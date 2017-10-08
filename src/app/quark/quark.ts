import * as jwt from 'jsonwebtoken';
import * as request from 'request';

import { Observable } from 'rxjs/Observable';
import { QuarkBase } from './quark-base';
import { QuarkOptions } from './quark-options';

export class Quark extends QuarkBase {

  options: QuarkOptions;
  path: string;

  static get REACTIVE(): boolean {
    return false;
  }

  static Microservice(options: QuarkOptions): Promise<any> | Observable<any> {
    return Quark.REACTIVE ? Quark.Observable(options) : Quark.Microservice(options);
  }

  static Observable(options: QuarkOptions): Observable<any> {
    return Observable.create(observer => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode === options.code) {
          observer.nex(body);
          observer.complete();
        } else {
          observer.error({ error: error || body, response });
        }
      });
    });
  }

  static Promise(options: QuarkOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode === options.code) {
          resolve(body);
        } else {
          reject({ error: error || body, response });
        }
      });
    });
  }

  static successMock(mock: any) {
    return Quark.REACTIVE ? new Observable(obs => { obs.next(mock); obs.complete(); }) : Promise.resolve(mock);
  }

  static failMock(error: any) {
    return Quark.REACTIVE ? new Observable(obs => { obs.error(error); obs.complete(); }) : Promise.reject({ error: error });
  }

  constructor(baseUrl: string) {
    super();
    return this.
      setBaseUrl(baseUrl)
      .setPath();
  }

  setBaseUrl(baseUrl: string): Quark {
    this.options = new QuarkOptions(baseUrl);
    return this;
  }

  setPath(path?: string): Quark {
    this.path = this.normalizePath(path || Quark.SLASH);
    return this;
  }

  request(req: any): Quark {
    const TOKEN = this.decode(req.headers);
    this.options
      .security(TOKEN)
      .setQuerystring(req.query);
    return this;
  }

  decode(headers: any): Quark {
    const AUTHORIZATION = headers && headers.hasOwnProperty('authorization') ? headers.authorization : undefined;
    const TOKEN = AUTHORIZATION ? AUTHORIZATION.split('Bearer ')[1] : undefined;
    return TOKEN ? jwt.decode(TOKEN) : undefined;
  }

  create(data: any): Promise<any> | Observable<any> {
    const URL = this.path;
    this.options
      .setUrl(URL)
      .setData(data)
      .setMethod(Quark.HTTP_VERBS.POST)
      .setCode(Quark.HTTP_STATES.CREATE_SUCCESS);
    return Quark.Microservice(this.options);
  }

  read(id: string): Promise<any> | Observable<any> {
    const URL = this.setUrl([this.path, id]);
    this.options
      .setUrl(URL)
      .setMethod(Quark.HTTP_VERBS.GET)
      .setCode(Quark.HTTP_STATES.SUCCESS);
    return Quark.Microservice(this.options);
  }

  update(data: any): Promise<any> | Observable<any> {
    const URL = this.setUrl([this.path, data.id]);
    this.options
      .setUrl(URL)
      .setData(data)
      .setMethod(Quark.HTTP_VERBS.PUT)
      .setCode(Quark.HTTP_STATES.UPDATE_SUCCESS);
    return Quark.Microservice(this.options);
  }

  delete(id: string): Promise<any> | Observable<any> {
    const URL = this.setUrl([this.path, id]);
    this.options
      .setUrl(URL)
      .setMethod(Quark.HTTP_VERBS.DELETE)
      .setCode(Quark.HTTP_STATES.DELETE_SUCCESS);
    return Quark.Microservice(this.options);
  }

  list(): Promise<any> | Observable<any> {
    const URL = this.setUrl([this.path]);
    this.options
      .setUrl(URL)
      .setMethod(Quark.HTTP_VERBS.GET)
      .setCode(Quark.HTTP_STATES.SUCCESS);
    return Quark.Microservice(this.options);
  }

  partial(id, data): Promise<any> | Observable<any> {
    const URL = this.setUrl([this.path, id]);
    this.options
      .setData(data)
      .setUrl(URL)
      .setMethod(Quark.HTTP_VERBS.PATCH)
      .setCode(Quark.HTTP_STATES.PARTIAL_UPDATE_SUCCESS);
    return Quark.Microservice(this.options);
  }

  private setUrl(params: any): string {
    return [...params].join(Quark.SLASH);
  }

  private normalizePath(path: string): string {
    if (path && path.length > 1) {
      const HAS_SLASH_AT_START: boolean = path.substr(0, 1) === Quark.SLASH;
      const HAS_SLASH_AT_END = path.substr(path.length - 1) === Quark.SLASH;
      path = HAS_SLASH_AT_END ? path.substring(0, path.length - 1) : path;
      path = HAS_SLASH_AT_START ? path : Quark.SLASH + path;
    } else {
      path = Quark.SLASH;
    }
    return path;
  }

}

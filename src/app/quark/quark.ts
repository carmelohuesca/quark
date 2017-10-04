import { QuarkOptions } from './quark-options';
import * as http from 'http';

export class Quark {

  endpoint: string;
  options: QuarkOptions;

  constructor(url, endpoint) {
    this.endpoint = endpoint;
  }

  // setUrl(url) {
  //   this.options = this.options ? this.options.setUrl(url) : new QuarkOptions();
  //   return this;
  // }

  // setEndpoint(path) {
  //   this.endpoint = path;
  //   this.options.path = path;
  //   return this;
  // }

  // setHeadersRoleAndAccount(headers) {
  //   const decodedToken = Service.decode(headers);
  //   this.options
  //     .setRoles(decodedToken.roles)
  //     .setLocale(decodedToken.locale)
  //     .setAccount(decodedToken.sub);
  // }

  // setHeaders(headers) {
  //   this.options.headers = headers;
  // }

  // request(req) {
  //   const roles = req.payload ? req.payload.roles : [];
  //   const account = req.payload ? req.payload.sub : undefined;
  //   const locale = req.payload ? req.payload.locale : undefined;
  //   const params = req.query ? req.query : undefined;
  //   const decodedToken = req.headers ? Service.decode(req.headers) : undefined;
  //   this.options
  //     .setRoles(decodedToken ? decodedToken.roles : roles)
  //     .setAccount(decodedToken ? decodedToken.sub : account)
  //     .setLocale(decodedToken ? decodedToken.locale : locale)
  //     .setParam(params);
  //   return this;
  // }

  // create(item) {
  //   const path = this.endpoint;
  //   this.options
  //     .setData(item)
  //     .setPath(path)
  //     .setMethod('POST')
  //     .setCode(HTTP_STATES.CREATE_SUCCESS);
  //   return Service.microservice(this.options);
  // }

  // read(id) {
  //   const path = [this.endpoint, id].join('/');
  //   this.options
  //     .setMethod('GET')
  //     .setCode(HTTP_STATES.SUCCCESS)
  //     .setPath(path);
  //   return Service.microservice(this.options);
  // }

  // update(item) {
  //   const path = [this.endpoint, item.id].join('/');
  //   this.options
  //     .setData(item)
  //     .setPath(path)
  //     .setMethod('PUT')
  //     .setCode(HTTP_STATES.UPDATE_SUCCESS);
  //   return Service.microservice(this.options);
  // }

  // remove(id) {
  //   const path = [this.endpoint, id].join('/');
  //   this.options
  //     .setPath(path)
  //     .setMethod('DELETE')
  //     .setCode(HTTP_STATES.UPDATE_SUCCESS);
  //   return Service.microservice(this.options);
  // }

  // list() {
  //   const path = this.endpoint;
  //   this.options
  //     .setPath(path)
  //     .setCode(HTTP_STATES.SUCCCESS)
  //     .setMethod('GET');
  //   return Service.microservice(this.options);
  // }

  // partial(id, item) {
  //   const path = [this.endpoint, id].join('/');
  //   this.options
  //     .setData(item)
  //     .setPath(path)
  //     .setMethod('PATCH')
  //     .setCode(HTTP_STATES.UPDATE_SUCCESS);
  //   return Service.microservice(this.options);
  // }

  // validate(data, schemeValidation, ...dependencies) {
  //   return JsonSchemaValidator.validate(data, schemeValidation, ...dependencies);
  // }

  // setPath(path) {
  //   this.endpoint = [this.endpoint, path].join('/');
  // }

}

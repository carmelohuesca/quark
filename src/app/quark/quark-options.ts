import { QuarkStates } from './quark-states';
const HTTP_STATES = QuarkStates.HTTP_STATES;

export class QuarkOptions {

  protocol?: string;
  host?: string;
  hostname?: string;
  family?: number;
  port?: number;
  localAddress?: string;
  socketPath?: string;
  method?: string;
  path?: string;
  headers?: { [key: string]: any };
  auth?: string;
  agent?: any | boolean;
  // agent?: Agent | boolean;

  init() {
    this.setProtocol();
  }

  setUrl(url) {
    return this;
  }

  setProtocol(protocol?: string) {
    this.protocol = protocol || 'http';
    return this;
  }

  normalizeUrl(url) {
    const hasSlash = url.substr(url.length - 1) === '/';
    return hasSlash ? url.substring(0, url.length - 1) : url;
  }

}

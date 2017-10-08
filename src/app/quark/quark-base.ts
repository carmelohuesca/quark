const PACKAGE = require('../../../package.json');

export class QuarkBase {

  static SLASH = '/';

  static NAME = PACKAGE.name;
  static VERSION = PACKAGE.version;

  static HTTP_STATES = {
    SUCCESS: 200,
    CREATE_SUCCESS: 201,
    UPDATE_SUCCESS: 202,
    PARTIAL_UPDATE_SUCCESS: 204,
    DELETE_SUCCESS: 205,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    ALREADY_EXISTS: 409,
    DUPLICATE_DATA: 422,
    INTERNAL_SERVER_ERROR: 500
  };

  static HTTP_VERBS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
  };

}

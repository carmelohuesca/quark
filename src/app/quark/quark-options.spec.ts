import { Quark } from './quark';
import { QuarkOptions } from './quark-options';
const TEST_URL = 'http://localhost:9876';
const HTTP_STATES = Quark.HTTP_STATES;
const HTTP_VERBS = Quark.HTTP_VERBS;

const DECODED_TOKEN = {
    user: 'carmelohuescacalatayud',
    account: '123e4567-e89b-12d3-a456-426655440000',
    locale: 'es-ES',
};

describe('QuarkOptions', () => {

    let instance: QuarkOptions;

    beforeEach(() => {
        instance = new QuarkOptions(TEST_URL);
    });

    it('existe la instancia', () => {
        expect(instance).toBeDefined();
    });

    describe('propiedad "baseUrl"', () => {
        it('propiedad baseUrl', () => {
            expect(instance.baseUrl).toBeDefined();
        });
        it('el valor por defecto de "baseUrl" es ' + `${TEST_URL}`, () => {
            expect(instance.baseUrl).toBe(TEST_URL);
        });
    });
    describe('propiedad "code"', () => {
        it('propiedad code', () => {
            expect(instance.code).toBeDefined();
        });
        it('el valor por defecto de "code" es ' + `${HTTP_STATES.SUCCESS}`, () => {
            expect(instance.code).toBe(HTTP_STATES.SUCCESS);
        });
    });
    describe('propiedad "method"', () => {
        it('propiedad method', () => {
            expect(instance.method).toBeDefined();
        });
        it('el valor por defecto de "method" es ' + `${HTTP_VERBS.GET}`, () => {
            expect(instance.method).toBe(HTTP_VERBS.GET);
        });
    });
    describe('propiedad "headers"', () => {
        it('propiedad headers', () => {
            expect(instance.headers).toBeDefined();
        });
    });
    describe('propiedad "qs"', () => {
        it('propiedad qs', () => {
            expect(instance.qs).toBeDefined();
        });
    });

    describe('Métodos de las Opciones', () => {
        it('setUrl() normaliza una url ', () => {
            expect(instance.setUrl).toBeDefined();
        });
        it('setData(data) establece los datos del body', () => {
            const DATA = {};
            expect(instance.json).toBeUndefined();
            instance.setData(DATA);
            expect(instance.json).toBeDefined();
            expect(instance.json).toBe(DATA);
        });
        it('setCode(400) setea el código ', () => {
            expect(instance.code).toBe(HTTP_STATES.SUCCESS);
            instance.setCode(HTTP_STATES.BAD_REQUEST);
            expect(instance.code).toBe(HTTP_STATES.BAD_REQUEST);
        });
        it('setMethod(data) establece el método', () => {
            expect(instance.method).toBe(HTTP_VERBS.GET);
            instance.setMethod(HTTP_VERBS.POST);
            expect(instance.method).toBe(HTTP_VERBS.POST);
        });
        it('setQuerystring(data) establece el método', () => {
            const querystring = { filter: true };
            expect(instance.qs).toBeDefined();
            instance.setQuerystring(querystring);
            expect(instance.qs).toBe(querystring);
        });
        it('security(TOKEN) establece la seguridad', () => {
            expect(instance.security).toBeDefined();
            instance.security(DECODED_TOKEN);
            expect(instance.headers).toBeDefined();
            expect(instance.headers['X-ACCOUNT']).toBe(DECODED_TOKEN.account);
            expect(instance.headers['X-LOCALE']).toBe(DECODED_TOKEN.locale);
            expect(instance.headers['X-USER']).toBe(DECODED_TOKEN.user);
        });

    });



});

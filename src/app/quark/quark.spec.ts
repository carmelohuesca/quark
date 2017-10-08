import { Quark } from './quark';
import { QuarkOptions } from './quark-options';
const HTTP_STATES = Quark.HTTP_STATES;
const HTTP_VERBS = Quark.HTTP_VERBS;

const TEST_URL = 'http://localhost:9876';
const ENDPOINT = '/users';
const METHOD = HTTP_VERBS.GET;

describe('Quark', () => {

    let instance: Quark;

    beforeEach(() => {
        instance = new Quark(TEST_URL);
        this.OPTIONS = new QuarkOptions(TEST_URL);
        spyOn(instance, 'request');
        spyOn(instance, 'create');
        spyOn(instance, 'read');
        spyOn(instance, 'update');
        spyOn(instance, 'delete');
        spyOn(instance, 'list');
        spyOn(instance, 'partial');
    });

    it('existe la instancia', () => {
        expect(instance).toBeDefined();
    });

    it('existe la propiedad VERSION ' + `${Quark.VERSION}`, () => {
        expect(Quark.VERSION).toBeDefined();
    });

    it('existe la propiedad NAME ' + `${Quark.NAME}`, () => {
        expect(Quark.NAME).toBeDefined();
    });

    it('default reactive mode is disabled', () => {
        expect(Quark.REACTIVE).toBeFalsy();
    });

    describe('Security', () => {
        it('headers', () => {
            expect(instance.decode(undefined)).toBeUndefined();
            expect(instance.decode(null)).toBeUndefined();
            expect(instance.decode({})).toBeUndefined();
            expect(instance.decode('headers')).toBeUndefined();
        });
    });

    describe('Propiedad path', () => {
        it('existe la propiedad "path"', () => {
            expect(instance.path).toBeDefined();
            expect(instance.path).toBe('/');
        });
        it('se cambia desde el método setPath("/users")', () => {
            const PATH = '/users';
            expect(instance.path).toBe('/');
            instance.setPath(PATH);
            expect(instance.path).toBe(PATH);
        });
        it('si setPath(null) la propiedad vale "/"', () => {
            instance.setPath(null);
            expect(instance.path).toBe(Quark.SLASH);
        });
        it('si setPath() la propiedad vale "/"', () => {
            instance.setPath();
            expect(instance.path).toBe(Quark.SLASH);
        });
        it('si setPath("users") la propiedad vale "/users"', () => {
            instance.setPath('users');
            expect(instance.path).toBe('/users');
        });
        it('si setPath("users/") la propiedad vale "/users"', () => {
            instance.setPath('users/');
            expect(instance.path).toBe('/users');
        });
        it('si setPath("/users/") la propiedad vale "/users"', () => {
            instance.setPath('/users/');
            expect(instance.path).toBe('/users');
        });
    });

    describe('Opciones', () => {
        it('existe la propiedad "options', () => {
            expect(instance.options).toBeDefined();
        });
        it('la propiedad options.baseUrl es "' + `${TEST_URL}` + '"', () => {
            expect(instance.options.baseUrl).toBe(TEST_URL);
        });
        it('existe la propiedad "options.headers', () => {
            expect(instance.options.headers).toBeDefined();
        });
        it('la propiedad options.method es ' + `${METHOD}`, () => {
            expect(instance.options.method).toBe(METHOD);
        });
        it('la propiedad options.code es ' + `${HTTP_STATES.SUCCESS}`, () => {
            expect(instance.options.code).toBe(HTTP_STATES.SUCCESS);
        });
    });

    describe('Métodos del Request', () => {
        it('existe el método "request"', () => {
            expect(instance.request).toBeDefined();
            instance.request(this.OPTIONS);
            expect(instance.request).toHaveBeenCalled();
            expect(instance.request).toHaveBeenCalledWith(this.OPTIONS);
        });
        it('existe el método "create"', () => {
            expect(instance.create).toBeDefined();
            instance.create({});
            expect(instance.create).toHaveBeenCalled();
        });
        it('existe el método "read"', () => {
            expect(instance.read).toBeDefined();
            instance.read('ONE');
            expect(instance.read).toHaveBeenCalled();
        });
        it('existe el método "update"', () => {
            expect(instance.update).toBeDefined();
            instance.update({ id: 'ONE' });
            expect(instance.update).toHaveBeenCalled();
        });
        it('existe el método "delete"', () => {
            expect(instance.delete).toBeDefined();
            instance.delete('ONE');
            expect(instance.delete).toHaveBeenCalled();
        });
        it('existe el método "list"', () => {
            expect(instance.list).toBeDefined();
            instance.list();
            expect(instance.list).toHaveBeenCalled();
        });
        it('existe el método "partial"', () => {
            expect(instance.partial).toBeDefined();
            instance.partial('ONE', { data: 'one' });
            expect(instance.partial).toHaveBeenCalled();
        });
    });

});

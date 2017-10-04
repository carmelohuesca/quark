import { QuarkOptions } from './quark-options';

const BASE_URL = 'http://localhost:8989';

fdescribe('QuarkOptions', () => {
  let instance: QuarkOptions;

  beforeEach(() => {
    instance = new QuarkOptions();
    instance.init();
  });

  describe('protocol', () => {
    it('tiene la propiedad "protocol"', () => {
      expect(instance.protocol).toBeDefined();
    });
    it('La propiedad "protocol" vale por defecto "http"', () => {
      expect(instance.protocol).toBe('http');
    });
  });

});

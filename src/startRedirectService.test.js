import { RedirectServer } from './RedirectServer';
import { startRedirectService } from './startRedirectService';

jest.mock('./RedirectServer');

const testStartRedirectService = options => {
  startRedirectService(options);

  expect(RedirectServer).toHaveBeenCalledWith(
    options.to,
    options.chain || false
  );
  expect(RedirectServer.prototype.listen).toHaveBeenCalledWith(
    options.port || 3000
  );
  expect(global.console.log.mock.calls).toMatchSnapshot();
};

beforeEach(() => {
  global.console = { log: jest.fn() };
});

test('should start a redirect service', () =>
  testStartRedirectService({ to: 'to-somewhere' }));

test('should start a redirect service with chain', () =>
  testStartRedirectService({ to: 'to-somewhere', chain: true }));
test('should start a redirect service with custom port', () =>
  testStartRedirectService({ to: 'to-somewhere', port: 4000 }));

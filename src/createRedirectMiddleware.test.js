import { createRedirectMiddleware } from './createRedirectMiddleware';

const testCreateRedirectMiddleware = (options, path, expectedRedirect) => {
  const request = { path };
  const response = { redirect: jest.fn() };

  const middleware = createRedirectMiddleware(options);

  middleware(request, response);

  expect(response.redirect).toBeCalledWith(expectedRedirect);
};

test('should create a middleware', () =>
  testCreateRedirectMiddleware(
    { to: 'to-somewhere' },
    '/some-path',
    'to-somewhere'
  ));

test('should create a middleware with chain', () =>
  testCreateRedirectMiddleware(
    { to: 'to-somewhere', chain: true },
    '/some-path',
    'to-somewhere/some-path'
  ));

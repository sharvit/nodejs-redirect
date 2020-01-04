import { RedirectServer } from './RedirectServer';

/**
 * Start a redirection service
 * @param  {Object}  options               Options object.
 * @param  {String}  options.to            URl to redirect requests.
 * @param  {Boolean} [options.chain=false] Will chain the request path to the redirect url.
 * @param  {Number}  [options.port=3000]   Port to run the service.
 */
export const startRedirectService = ({ to, chain = false, port = 3000 }) => {
  // create the redirection server
  const server = new RedirectServer(to, chain);

  // run the server and start listen to the port
  server.listen(port);

  // Render some console log output
  console.log('Redirection server listening on port: ' + port);
  console.log('Redirecting all requests to: ' + to);
  console.log('Chaining requests url is: ' + (chain ? 'on' : 'off'));
};

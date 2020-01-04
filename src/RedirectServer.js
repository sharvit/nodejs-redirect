import express from 'express';
import { createRedirectMiddleware } from './createRedirectMiddleware';

/**
 * Express server that redirect all requests to a different URL
 */
export class RedirectServer {
  /**
   * Creates an instance of RedirectServer
   * @param {string}  to            URl to redirect requests.
   * @param {Boolean} [chain=false] Will chain the request path to the redirect url.
   */
  constructor(to, chain = false) {
    /**
     * URl to redirect requests.
     * @type {string}
     */
    this.to = to;
    /**
     * Will chain the request path to the redirect url.
     * @type {boolean}
     */
    this.chain = chain;

    this._setupExpressServer();
  }

  /**
   * Setup express server
   */
  _setupExpressServer() {
    const { to, chain } = this;

    /**
     * Express server
     * @type {Express}
     */
    this.expressServer = express();

    // create the redirection middleware
    const redirectionMiddleware = createRedirectMiddleware({ to, chain });

    // setup the redirection middleware on all requests
    this.expressServer.get('*', redirectionMiddleware);
  }

  /**
   * Start the server on a port, start listening
   * @param  {Number} port Port for running the server
   */
  listen(port) {
    this.expressServer.listen(port);
  }
}

/**
 * Creates a redirection express middleware
 * @param  {Object}  options               Options object.
 * @param  {string}  options.to            URl to redirect requests
 * @param  {boolean} [options.chain=false] Will chain the request path to the redirect url.
 * @return {Function} Express middleware function
 */
export const createRedirectMiddleware = ({ to, chain = false }) => (
  request,
  response
) => {
  const redirectTo = chain ? `${to}${request.path}` : to;

  response.redirect(redirectTo);
};

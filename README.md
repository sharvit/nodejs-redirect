# nodejs-redirect

> Simple redirect service

[![Package Version](https://img.shields.io/npm/v/nodejs-redirect.svg?style=flat-square)](https://www.npmjs.com/package/nodejs-redirect)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Downloads Status](https://img.shields.io/npm/dm/nodejs-redirect.svg?style=flat-square)](https://npm-stat.com/charts.html?package=nodejs-redirect&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/sharvit/nodejs-redirect/master.svg?style=flat-square)](https://travis-ci.org/sharvit/nodejs-redirect)
[![Coverage Status](https://coveralls.io/repos/github/sharvit/nodejs-redirect/badge.svg?branch=master)](https://coveralls.io/github/sharvit/nodejs-redirect?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies Status](https://david-dm.org/sharvit/nodejs-redirect/status.svg)](https://david-dm.org/sharvit/nodejs-redirect)
[![devDependencies Status](https://david-dm.org/sharvit/nodejs-redirect/dev-status.svg)](https://david-dm.org/sharvit/nodejs-redirect?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Option 1 - Install from `npm` and run the redirection service

First, install `nodejs-redirect` using `npm` or `yarn`

```sh
npm install --global nodejs-redirect
# or using yarn
yarn global add nodejs-redirect
```

Run `nodejs-redirect` and set your environment variables:

```
REDIRECTION_URL=https://google.com nodejs-redirect
```

## Option 2 - Install from source as an application

First, clone the project from github and install the node modules:

```sh
git clone https://github.com/sharvit/nodejs-redirect.git
cd nodejs-redirect
yarn
```

Run `npm start` and set your environment variables:

```
REDIRECTION_URL=https://google.com npm start
```

### Available environment variables

| Variable          | Description                                      | Default Value      |
| ----------------- | ------------------------------------------------ | ------------------ |
| REDIRECTION_URL   | URl to redirect requests                         | https://google.com |
| CHAIN_REQUEST_URL | Will chain the request path to the redirect url. | false              |
| PORT              | Port to run the service                          | 3000               |

## Option 3 - Use as a library

```js
import { RedirectServer } from 'nodejs-redirect';

const to = 'https://google.com';
const chain = true;
const port = 3000;

// create the redirection server
const server = new RedirectServer(to, chain);

// start listening
server.listen(port);

// Render some console log output
console.log('Redirection server listening on port: ' + port);
console.log('Redirecting all requests to: ' + to);
console.log('Chaining requests url is: ' + (chain ? 'on' : 'off'));
```

# Option 4 - Use as an express middleware

```js
import express from 'express';
import { createRedirectMiddleware } from 'nodejs-redirect'

const to = 'https://google.com';
const chain = true;
const port = 3000;

// create an express server
const server = express();

// create the redirection middleware
const redirectionMiddleware = createRedirectMiddleware({ to, chain });

// setup the redirection middleware on all requests
server.get('*', redirectionMiddleware);

// start listening
server.listen(port);

// Render some console log output
console.log('Redirection server listening on port: ' + port);
console.log('Redirecting all requests to: ' + to);
console.log('Chaining requests url is: ' + (chain ? 'on' : 'off'));
```


## License

MIT &copy; [Avi Sharvit](https://sharvit.github.io)

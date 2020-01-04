#!/usr/bin/env node

// use new relic if license key exists
if (typeof process.env.NEW_RELIC_LICENSE_KEY === 'string') {
  require('newrelic');
}

const { startRedirectService } = require('../dist');

startRedirectService({
  to: process.env.REDIRECTION_URL || 'https://www.google.com',
  chain: process.env.CHAIN_REQUEST_URL === 'true',
  port: process.env.PORT || 3000,
});

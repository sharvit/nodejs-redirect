Simple redirect service with NodeJS

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Installation

Install the app package

```
npm install
```

## Running

Simply run the npm package with the REDIRECTION_URL environmen variables

```
REDIRECTION_URL=https://google.com npm start
```

Extend the redirection url by the request route (from.com/a/b -> google.com/a/b)

```
REDIRECTION_URL=https://google.com CHAIN_REQUEST_URL=true npm start
```
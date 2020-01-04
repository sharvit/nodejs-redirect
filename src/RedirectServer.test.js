import express from 'express';
import { createRedirectMiddleware } from './createRedirectMiddleware';

import { RedirectServer } from './RedirectServer';

jest.mock('express');
jest.mock('./createRedirectMiddleware');

const expressInstance = {
  get: jest.fn(),
  listen: jest.fn(),
};

express.mockImplementation(() => expressInstance);

describe('constructor', () => {
  const testConstructor = (to, chain) => {
    const server = new RedirectServer(to, chain);

    expect(server.to).toBe(to);
    expect(server.chain).toBe(chain || false);
    expect(express).toHaveBeenCalled();
    expect(createRedirectMiddleware).toHaveBeenCalledWith({
      to,
      chain: chain || false,
    });
    expect(expressInstance.get).toHaveBeenCalled();
  };

  afterEach(() => jest.clearAllMocks());

  test('should create a server', () => testConstructor('to-somewhere'));

  test('should create a server with chain', () =>
    testConstructor('to-somewhere', true));
});

describe('listen', () => {
  const port = 9999;

  const server = new RedirectServer('to-somewhere');

  server.listen(port);

  expect(expressInstance.listen).toHaveBeenCalledWith(port);
});

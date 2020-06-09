import axios from 'axios';

let window;

export function resolveApi(apiConfig) {
  const env = typeof window !== 'undefined' ? window.ENV : process.env.ENV;
  if (env && apiConfig[env]) {
    return apiConfig[env];
  }

  return apiConfig.production;
}

export function resolveUrl(config, url) {
  if (config && config.url && url) {
    return `${config.url}/${url}`;
  }

  return '';
}

class Request {
//     method: RequestMethod;
//
//     url: string;
//
//     params?: {};
//
// headers?: Headers;
//
// body?: {};

  constructor(method, url, options) {
    const {
      params = {},
      headers = {
        'Content-Type': 'application/json',
      },
      body = undefined,
    } = options;

    this.method = method;
    this.url = url;
    this.params = params;
    this.setHeaders(headers);
    this.body = body;
  }

  setHeaders(headers) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
  }

  fetch() {
    if (!this.url) {
      throw new Error('No URL provided');
    }

    return axios({
      url: this.url,
      method: this.method,
      data: this.body,
      params: this.params,
      headers: this.headers,

    }).catch((e) => {
      console.log(e); // todo log error with winston
      throw e;
    });
  }
}

export function createGetRequest(url, options) {
  return new Request('GET', url, options);
}

export function createPostRequest(url, options) {
  return new Request('POST', url, options);
}

export function createPatchRequest(url, options) {
  return new Request('PATCH', url, options);
}

export function createPutRequest(url, options) {
  return new Request('PUT', url, options);
}

export function createDeleteRequest(url, options) {
  return new Request('DELETE', url, options);
}

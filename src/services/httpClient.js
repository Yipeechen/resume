import axios from 'axios';

const LOGGER_MAX_LENGTH = 300;

export const createInstance = config => {
  function handleRequest (req) {
    // transform logged data
    let loggedData = { ...req.data };

    // log request info
    const logged = {
      url: `${req.baseURL}${req.url}`,
      method: req.method,
      params: req.params,
      data: loggedData,
    };
    console.info('REQUEST', JSON.stringify(logged));

    // handle custom request interceptor
    if (config.interceptors?.request) {
      return config.interceptors.request(req);
    }
    return req;
  }

  function handleResponseSuccess (res) {
    // log response success info
    const logged = {
      status: res.status,
      url: res.config.url,
      data: res.data, // just for debug
    };
    let loggedString = JSON.stringify(logged);
    if (loggedString.length > LOGGER_MAX_LENGTH) {
      loggedString = `${loggedString.slice(0, LOGGER_MAX_LENGTH)} ...more}`;
    }
    console.info('RESPONSE_SUCCESS', loggedString);
    // if server return 204, the response data will be '',
    // so we need to transform the data be undefined for use.
    res.data = res.data || undefined;

    // handle custom response interceptor
    if (config.interceptors?.response) {
      return config.interceptors.response(res);
    }
    return res.data;
  }

  function handleResponseFailure (error) {
    // log request failure info
    const logged = {
      status: error.response?.status,
      code: error.code,
      message: error.message,
      url: error.config?.url,
    };
    console.info('REQUEST_FAILURE', JSON.stringify(logged));
    return Promise.reject(error);
  }

  const instance = axios.create(config);
  instance.interceptors.request.use(handleRequest);
  instance.interceptors.response.use(handleResponseSuccess, handleResponseFailure);
  return instance;
};

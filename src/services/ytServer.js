import { createInstance } from './httpClient';
import * as TIME from '@src/constants/time';

const instance = createInstance({
  timeout: TIME.requestTimeOutMs,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  baseURL: 'https://www.googleapis.com/youtube/v3',
  interceptors: {
    response: res => {
      return res.data;
    },
  },
});

export const request = config => {
  return instance(config);
};

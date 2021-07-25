import { createInstance } from './httpClient';
import * as TIME from '@src/constants/time';

const instance = createInstance({
  timeout: TIME.requestTimeOutMs,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  baseURL: 'https://yipee-resume-default-rtdb.firebaseio.com',
  interceptors: {
    response: res => {
      return res.data;
    },
  },
});

export const request = config => {
  return instance(config);
};

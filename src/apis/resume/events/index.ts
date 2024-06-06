import { request } from '@src/services/firebaseServer';

export const fetchEvents = async () => {
  const response = await request({
    url: `/events.json`,
    method: 'GET',
  });
  return response;
};

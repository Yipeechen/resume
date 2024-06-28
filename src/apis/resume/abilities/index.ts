import { request } from '@src/services/firebaseServer';

export const fetchAbilities = async () => {
  const response = await request({
    url: `/abilities.json`,
    method: 'GET',
  });
  return response;
};

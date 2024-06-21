import { request } from '@src/services/firebaseServer';

export const fetchOverviewDetail = async () => {
  const response = await request({
    url: `/overview.json`,
    method: 'GET',
  });
  return response;
};

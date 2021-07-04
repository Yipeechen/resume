import { request } from '@src/services/ytServer';

const API_KEY = process.env.API_KEY;
export const fetchMostPopularYtVideo = async data => {
  const response = await request({
    url: `/videos`,
    method: 'GET',
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      pageToken: data.nextPageToken,
      maxResults: 12,
      key: API_KEY,
    },
  });
  return response;
};
export const fetchYtVideo = async data => {
  const response = await request({
    url: '/search',
    method: 'GET',
    params: {
      part: 'snippet',
      type: 'video',
      pageToken: data.nextPageToken,
      q: data.searchTerm,
      maxResults: 12,
      key: API_KEY,
    },
  });
  return response;
};

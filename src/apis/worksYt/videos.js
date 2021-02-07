import axios from 'axios';

const API_KEY = process.env.API_KEY;
export const fetchMostPopularYtVideo = async data => {
  const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
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
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
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

import axios from 'axios';

export const fetchYtVideo = async data => {
  const API_KEY = process.env.API_KEY;
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      type: 'video',
      pageToken: data.nextPageToken,
      q: data.searchTerm,
      maxResults: 10,
      key: API_KEY,
    },
  });
  return response;
};

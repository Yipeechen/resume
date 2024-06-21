import { types as actionTypes } from '@src/redux/modules/worksYt/worksYtActions';

// https://developers.google.com/youtube/v3/docs/videos?hl=zh-tw#resource
export interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      }
    }
  }
  [key: string]: any;
}

const initialState: {
  videos: VideoItem[];
  nextPageToken: string | null;
  loading: boolean;
  error: any;
} = {
  videos: [],
  nextPageToken: null,
  loading: false,
  error: null,
};
interface Action {
  type: string;
  payload: any;
}

export default function ytVideosReducer (state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.CLEAR_PLAYLIST:
      return initialState;
    case actionTypes.FETCH_POPULAR_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_POPULAR_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_POPULAR_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.SEARCH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case actionTypes.SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

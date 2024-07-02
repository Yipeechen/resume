import { ActionTypes } from './worksYtActionTypes';

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
  type: ActionTypes;
  payload: any;
}

export default function ytVideosReducer (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.CLEAR_PLAYLIST:
      return initialState;
    case ActionTypes.FETCH_POPULAR_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_POPULAR_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_POPULAR_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.SEARCH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        error: null,
      };
    case ActionTypes.SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

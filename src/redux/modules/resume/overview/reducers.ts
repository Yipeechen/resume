import { ActionTypes } from '@src/redux/modules/resume/overview/actionTypes';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface OverViewProps {
  title: string;
  subtitle: string;
  body: string[];
  skills: string[];
}


const initialState: {
  overview: OverViewProps;
  loading: boolean;
  error: any;
} = {
  overview: {
    title: '',
    subtitle: '',
    body: [],
    skills: [],
  },
  loading: false,
  error: null,
};

export default function reducer (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_OVERVIEW_DETAIL: 
      return ({
        ...state,
        loading: true,
      });
    case ActionTypes.GET_OVERVIEW_DETAIL_SUCCESS: 
      return ({
        ...state,
        overview: { ...state.overview, ...action.payload.overview },
        loading: false,
        error: null,
      });
    case ActionTypes.GET_OVERVIEW_DETAIL_FAILURE:
      return ({
        ...state,
        loading: false,
        error: action.payload,
      });
    default:
      return state;
  }
}

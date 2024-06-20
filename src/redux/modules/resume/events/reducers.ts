import { ActionTypes } from '@src/redux/modules/resume/events/actionTypes';

interface ContentProps {
  heading: string;
  isHighlight: boolean;
  body: string;
  skills: string[]
}

interface EventProps {
  content: ContentProps[];
  isMainEvent: boolean;
  period: string;
  subTitle: string;
  title: string;
}

interface Action {
  type: ActionTypes;
  payload: any;
}

const initialState: {
  events: EventProps[];
  loading: boolean;
  error: any;
} = {
  events: [],
  loading: false,
  error: null,
};

export default function reducer (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_ALL_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: [...state.events, ...action.payload.events],
        loading: false,
        error: null,
      };
    case ActionTypes.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

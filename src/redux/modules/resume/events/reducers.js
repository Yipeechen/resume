import * as actionTypes from './actionTypes';

const initialState = {
  events: [],
  loading: false,
  error: null,
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: [...state.events, ...action.payload.events],
        loading: false,
        error: null,
      };
    case actionTypes.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

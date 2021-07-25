import * as actionTypes from './actionTypes';
import { fetchEvents } from '@src/apis/resume/events';

const getAllEvents = payload => ({
  type: actionTypes.GET_ALL_EVENTS,
  payload,
});

const getAllEventsSuccess = payload => ({
  type: actionTypes.GET_ALL_EVENTS_SUCCESS,
  payload,
});

const getAllEventsFailure = error => ({
  type: actionTypes.GET_ALL_EVENTS_FAILURE,
  payload: error,
});

export function getEvents () {
  return async dispatch => {
    dispatch(getAllEvents());

    try {
      const response = await fetchEvents();

      dispatch(getAllEventsSuccess({
        events: response,
      }));
    } catch (error) {
      console.warn(error);
      dispatch(getAllEventsFailure(error));
    }
  };
}

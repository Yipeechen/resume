import { Dispatch } from 'redux';
import { ActionTypes } from '@src/redux/modules/resume/events/actionTypes';
import { fetchEvents } from '@src/apis/resume/events';

const getAllEvents = () => ({
  type: ActionTypes.GET_ALL_EVENTS,
});

const getAllEventsSuccess = (payload: { events: any }) => ({
  type: ActionTypes.GET_ALL_EVENTS_SUCCESS,
  payload,
});

const getAllEventsFailure = (error: Error) => ({
  type: ActionTypes.GET_ALL_EVENTS_FAILURE,
  payload: error,
});

export function getEvents () {
  return async (dispatch: Dispatch) => {
    dispatch(getAllEvents());

    try {
      const response = await fetchEvents();

      dispatch(getAllEventsSuccess({
        events: response,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(getAllEventsFailure(error));
    }
  };
}

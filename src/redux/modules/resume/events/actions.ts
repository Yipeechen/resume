import { Dispatch } from 'redux';

import { fetchEvents } from '@src/apis/resume/events';
import { getAllEventsRequest, getAllEventsSuccess, getAllEventsFailure } from '@src/redux/modules/resume/events/reducers';

export function getEvents () {
  return async (dispatch: Dispatch) => {
    dispatch(getAllEventsRequest());

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

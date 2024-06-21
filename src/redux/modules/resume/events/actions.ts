import { Dispatch } from 'redux';

import { createRequestedActions } from '@src/redux/modules/actionFactory';
import { fetchEvents } from '@src/apis/resume/events';

enum ActionTypes {
  GET_ALL_EVENTS = 'GET_ALL_EVENTS',
}

const { types: definedTypes, actions } = createRequestedActions(Object.values(ActionTypes));

export const types = definedTypes;

export function getEvents () {
  return async (dispatch: Dispatch) => {
    dispatch(actions.getAllEventsRequest());

    try {
      const response = await fetchEvents();

      dispatch(actions.getAllEventsSuccess({
        events: response,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(actions.getAllEventsFailure(error));
    }
  };
}

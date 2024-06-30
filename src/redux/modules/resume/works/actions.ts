import { Dispatch } from 'redux';

import { createRequestedActions } from '@src/redux/modules/actionFactory';
import { fetchWorks } from '@src/apis/resume/works';

enum ActionTypes {
  GET_ALL_WORKS = 'GET_ALL_WORKS',
}

const { types: definedTypes, actions } = createRequestedActions(Object.values(ActionTypes));

export const types = definedTypes;

export const getAllWorks = () => {
  return async (dispatch: Dispatch) => {
    dispatch(actions.getAllWorksRequest());

    try {
      const response = await fetchWorks();

      dispatch(actions.getAllWorksSuccess({
        works: response,
      }));
    } catch (error) {
      console.warn(error);
      dispatch(actions.getAllWorksFailure(error))
    }
  }
}
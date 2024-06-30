import { Dispatch } from 'redux';

import { createRequestedActions } from '@src/redux/modules/actionFactory';
import { fetchAbilities } from '@src/apis/resume/abilities';

enum ActionTypes {
  GET_ABILITIES = 'GET_ABILITIES',
}

const { types: definedTypes, actions } = createRequestedActions(Object.values(ActionTypes));

export const types = definedTypes;

export const getAbilities = () => {
  return async (dispatch: Dispatch) => {
    dispatch(actions.getAbilitiesRequest());

    try {
      const response = await fetchAbilities();
      
      dispatch(actions.getAbilitiesSuccess({
        abilities: response,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(actions.getAbilitiesFailure(error));
    }
  }
}

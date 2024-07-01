import { Dispatch } from 'redux';

import { fetchAbilities } from '@src/apis/resume/abilities';
import { getAbilitiesRequest, getAbilitiesSuccess, getAbilitiesFailure } from '@src/redux/modules/resume/abilities/reducers';

export const getAbilities = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAbilitiesRequest());

    try {
      const response = await fetchAbilities();
      
      dispatch(getAbilitiesSuccess({
        abilities: response,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(getAbilitiesFailure(error));
    }
  }
}

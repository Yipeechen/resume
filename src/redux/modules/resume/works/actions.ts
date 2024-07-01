import { Dispatch } from 'redux';

import { fetchWorks } from '@src/apis/resume/works';
import { getAllWorksRequest, getAllWorksSuccess, getAllWorksFailure } from '@src/redux/modules/resume/works/reducers';

export const getAllWorks = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAllWorksRequest());

    try {
      const response = await fetchWorks();

      dispatch(getAllWorksSuccess({
        works: response,
      }));
    } catch (error) {
      console.warn(error);
      dispatch(getAllWorksFailure(error))
    }
  }
}
import { Dispatch } from 'redux';

import { fetchOverviewDetail } from '@src/apis/resume/overview';
import { getOverviewDetailRequest, getOverviewDetailSuccess, getOverviewDetailFailure } from '@src/redux/modules/resume/overview/reducers';

export const getOverview = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getOverviewDetailRequest());

    try {
      const response = await fetchOverviewDetail();
      
      dispatch(getOverviewDetailSuccess({
        overview: response,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(getOverviewDetailFailure(error));
    }
  }
}

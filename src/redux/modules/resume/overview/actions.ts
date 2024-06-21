import { Dispatch } from 'redux';
import { ActionTypes } from '@src/redux/modules/resume/overview/actionTypes';
import { OverViewProps } from '@src/redux/modules/resume/overview/reducers';
import { fetchOverviewDetail } from '@src/apis/resume/overview';

const getOverviewDetail = () => ({
  type: ActionTypes.GET_OVERVIEW_DETAIL
});

const getOverviewDetailSuccess = (payload: { overview: OverViewProps }) => ({
  type: ActionTypes.GET_OVERVIEW_DETAIL_SUCCESS,
  payload,
});

const getOverviewDetailFailure = (error: Error) => ({
  type: ActionTypes.GET_OVERVIEW_DETAIL_FAILURE,
  payload: error,
}) 

export const getOverview = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getOverviewDetail());

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

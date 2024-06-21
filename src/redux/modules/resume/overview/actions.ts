import { Dispatch } from 'redux';

import { createRequestedActions } from '@src/redux/modules/actionFactory';
import { fetchOverviewDetail } from '@src/apis/resume/overview';

enum ActionTypes {
  GET_OVERVIEW_DETAIL = 'GET_OVERVIEW_DETAIL',
}

const { types: definedTypes, actions } = createRequestedActions(Object.values(ActionTypes));

export const types = definedTypes;

export const getOverview = () => {
  return async (dispatch: Dispatch) => {
    dispatch(actions.getOverviewDetailRequest());

    try {
      const response = await fetchOverviewDetail();
      
      dispatch(actions.getOverviewDetailSuccess({
        overview: response,
      }));
    } catch (error: any) {
      console.warn(error);
      dispatch(actions.getOverviewDetailFailure(error));
    }
  }
}

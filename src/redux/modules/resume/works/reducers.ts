import { types as actionTypes } from '@src/redux/modules/resume/works/actions';

interface Action {
  type: string;
  payload: any;
}

export interface Work {
  title: string;
  tool: string;
  link: string;
  img: {
    pc: string;
    mobile: string;
  }
}

const initialState: {
  works: Work[],
  loading: boolean,
  error: any,
} = {
  works: [],
  loading: false,
  error: null,
}

export default function reducer (state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.GET_ALL_WORKS:
      return ({
        ...state,
        loading: true,
      });
    case actionTypes.GET_ALL_WORKS_SUCCESS:
      return ({
        ...state,
        works: [...state.works, ...action.payload.works],
        loading: false,
        error: null,
      });
    case actionTypes.GET_ALL_WORKS_FAILURE:
      return ({
        ...state,
        loading: false,
        error: action.payload,
      });
    default:
      return state;
  }
}
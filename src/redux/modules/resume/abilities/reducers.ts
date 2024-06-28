import { types as actionTypes } from '@src/redux/modules/resume/abilities/actions';

interface Ability {
  icon: string;
  title: string;
  list: string[];
}

const initialState: {
  abilities: Ability[],
  loading: boolean,
  error: Error | null
} = {
  abilities: [],
  loading: false,
  error: null,
}


export default function reducer (state = initialState, action: { type: string, payload: any }) {
  switch (action.type) {
    case actionTypes.GET_ABILITIES:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ABILITIES_SUCCESS:
      return {
        ...state,
        abilities: [...state.abilities, ...action.payload.abilities],
        loading: false,
        error: null,
      };
    case actionTypes.GET_ABILITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

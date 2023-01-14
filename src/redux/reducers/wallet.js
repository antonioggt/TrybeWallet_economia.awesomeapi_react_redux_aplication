// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  INNITIAL_REQUEST,
  PASS_REQUEST,
  ERROR_REQUEST,
  INFOS,
  SAVE_INFOS,
} from '../actions';

const INITIAL_STATE = {
  idToEdit: 0,
  currencies: [],
  expenses: [],
  editor: false,
  isLoading: false,
  totalField: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INNITIAL_REQUEST: {
    return {
      ...state,
      isLoading: true,
    };
  }
  case PASS_REQUEST: {
    return {
      ...state,
      currencies: action.payload.currencies,
      isLoading: false,
    };
  }
  case ERROR_REQUEST: {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.error.message || 'Erro',
    };
  }
  case INFOS: {
    return {
      ...state,
      totalField: action.payload.value,
    };
  }
  case SAVE_INFOS: {
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  }
  default:
    return state;
  }
};

export default wallet;

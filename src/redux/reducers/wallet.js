// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INFOS } from '../actions';

const INITIAL_STATE = {
  idToEdit: 0,
  currencies: ['BRL'],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFOS:
    return {
      ...state,
      idToEdit: action.payload.value,
      currencies: action.payload.value,
    };
  default:
    return state;
  }
};

export default wallet;

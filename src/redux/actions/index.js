// Coloque aqui suas actions
import fetchApiFunc from '../../helpers/fetchApiFunc';

export const LOGIN = 'LOGIN';
export const INFOS = 'INFOS';
export const INNITIAL_REQUEST = 'INNITIAL_REQUEST';
export const PASS_REQUEST = 'PASS_REQUEST';
export const ERROR_REQUEST = 'ERROR_REQUEST';
export const SAVE_INFOS = 'SAVE_INFOS';

export const login = (value) => ({
  type: LOGIN,
  payload: { value },
});

export const infos = (value) => ({
  type: INFOS,
  payload: { value },
});

const initRequest = () => ({
  type: INNITIAL_REQUEST,
});

const passRequest = (value) => ({
  type: PASS_REQUEST,
  payload: {
    currencies: Object.keys(value),
  },
});

const errorRequest = (error) => ({
  type: ERROR_REQUEST,
  payload: {
    error,
  },
});

export const fetchApi = () => async (dispatch) => {
  dispatch(initRequest());

  try {
    const response = await fetchApiFunc();
    delete response.USDT;
    dispatch(passRequest(response));
  } catch (error) {
    dispatch(errorRequest(error));
  }
};

export const saveInfos = (value) => ({
  type: SAVE_INFOS,
  payload: {
    expenses: value,
  },
});

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const INFOS = 'INFOS';

export const login = (value) => ({
  type: LOGIN,
  payload: { value },
});

export const infos = (value) => ({
  type: INFOS,
  payload: { value },
});

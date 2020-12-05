import {UserTypes} from '../types';

export const saveUser = (user) => ({
  type: UserTypes.SAVE_USER,
  payload: user,
});

export const clearUser = () => ({
  type: UserTypes.CLEAN_USER,
  payload: {},
});

export const isAuth = (auth) => ({
  type: UserTypes.IS_AUTH,
  payload: auth,
});

// import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ISLOADING = 'ISLOADING';
export const login = response => dispatch => {
  console.log(response);
  dispatch({
    type: LOGIN,
    isLogin: true,
    userID: response.userID,
    name: response.name,
    email: response.email,
    picture: response.picture.data.url
  });
};

export const logout = () => async dispatch => {};

export const isloading = () => async dispatch => {
  dispatch({
    type: ISLOADING,
    isLoading: false
  });
};

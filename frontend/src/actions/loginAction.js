import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ISLOADING = 'ISLOADING';
export const login = response => async dispatch => {
  if (response.status !== 'unknown') {
    await axios
      .post('http://localhost:5050/auth/facebook_login', {
        name: response.name,
        email: response.email,
        uid: response.userID,
        avatar_url: response.picture.data.url
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(error => {
        console.log(error);
      });

    dispatch({
      type: LOGIN,
      isLogin: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }
};

export const logout = () => async dispatch => {};

export const isloading = () => async dispatch => {
  dispatch({
    type: ISLOADING,
    isLoading: false
  });
};

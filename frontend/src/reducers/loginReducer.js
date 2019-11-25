import * as login from '../actions/loginAction';

const initialState = {
  isLogin: true,
  name: 'Taio Newgate',
  nickname: 'Newgate',
  token: '',
  isLoading: true,
  image:
    'https://lh3.googleusercontent.com/-NncmLvZP5l4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re14K03xKtbJui9PE-L2dTnt7Jq-Q/photo.jpg?sz=46'
  // NOTE
  // some thing you want to set global
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        name: action.name,
        token: action.token
      };

    case login.ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    // NOTE
    // write case to update initialState
    default:
      return state;
  }
};

export default loginReducer;

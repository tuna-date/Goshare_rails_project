import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from '../../store';
import * as loginAction from '../../actions/loginAction';
import FacebookLogin from 'react-facebook-login';

import './Login.css';

class Login extends React.Component {
  responseFacebook = response => {
    store.dispatch(loginAction.login(response));
  };

  // componentClicked = () => console.log('clicked');

  render() {
    return (
      <div className='device'>
        <div className='row container'>
          <div className='col-8'>
            <div className='device-size'>
              <figure className='iphone'>iPhone</figure>
              <figure className='ipad'>iPad</figure>
            </div>
          </div>

          <div className='col-4 box'>
            <p className='title'>Login to Goshare</p>
            <div className='col'>
              <div className='center'>
                <div className='login-div button-size loginBtn loginBtn--facebook'>
                  <FacebookLogin
                    appId='1347097842155650'
                    autoLoad={true}
                    fields='name,email,picture'
                    // onClick={this.componentClicked}
                    callback={this.responseFacebook}
                  />
                </div>
              </div>

              <button className='login-div button-size loginBtn loginBtn--google'>
                Login with Google
              </button>
            </div>
            <div className='separator'>OR</div>
            <div className='form-group login-div'>
              <div className='col button-size'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
            </div>
            <div className='form-group login-div'>
              <div className='col button-size'>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='col login-div'>
              <button type='submit' className='btn btn-primary button-size'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(Login);

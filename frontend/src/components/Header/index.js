import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className='Nav'>
        <div className='Nav-menus'>
          <div className='Nav-brand row justify-content-between'>
            <Link className='Nav-brand-logo' to='/'>
              Instagram
            </Link>
            {this.props.LoginStatus.isLogin ? (
              <Link to='/profile'>
                <div className='Post-user-nav'>
                  <div className='Post-user-avatar'>
                    <img alt='avatar' src={this.props.LoginStatus.image} />
                  </div>
                  <div className='Post-user-nickname'>
                    <span>{this.props.LoginStatus.name}</span>
                  </div>
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(Header);

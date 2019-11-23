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
            <Link to='/login'>Login</Link>
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

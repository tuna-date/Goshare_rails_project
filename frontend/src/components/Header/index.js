import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className='Nav'>
        <div className='Nav-menus'>
          <div className='Nav-brand'>
            <a className='Nav-brand-logo' href='/'>
              Instagram
            </a>
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

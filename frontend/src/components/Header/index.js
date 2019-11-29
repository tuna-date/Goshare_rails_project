import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';

import './Header.css';
import ImageUpload from '../ImageUpload';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal = () => {
    this.setState({
      visible: true
    });
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className='Nav'>
        <div className='Nav-menus'>
          <div className='Nav-brand row justify-content-between'>
            <Link className='Nav-brand-logo' to='/'>
              Instagram
            </Link>

            {this.props.LoginStatus.isLogin ? (
              <div className='row'>
                <div className='col' onClick={this.openModal}>
                  <div className='camera'></div>
                </div>
                <Modal
                  visible={this.state.visible}
                  width='721px'
                  height='500px'
                  effect='fadeInUp'
                  onClickAway={() => this.closeModal()}>
                  <ImageUpload close={this.closeModal} />
                </Modal>
                <Link
                  to={{
                    pathname: '/profile',
                    state: {
                      userData: {
                        name: this.props.LoginStatus.name,
                        user_profile_avatar_url: this.props.LoginStatus.image
                      }
                    }
                  }}>
                  <div className='Post-user-nav'>
                    <div className='Post-user-avatar'>
                      <img alt='avatar' src={this.props.LoginStatus.image} />
                    </div>
                    <div className='Post-user-nickname'>
                      <span>{this.props.LoginStatus.name}</span>
                    </div>
                  </div>
                </Link>
              </div>
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

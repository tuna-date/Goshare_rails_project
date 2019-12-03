import React, { Component } from 'react';
import Comment from '../Comment';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      commentNumber: 0
    };
  }

  setCommentNumber = comment => {
    this.setState({
      commentNumber: comment
    });
  };

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

  like = () => {
    console.log('like');
  };

  render() {
    const nickname = this.props.nickname;
    const avatar = this.props.avatar;
    const image = this.props.image;
    const caption = this.props.caption;

    return (
      <article className='Post' ref='Post'>
        <header>
          <Link
            to={{
              pathname: '/profile',
              state: {
                userData: this.props.data
              }
            }}>
            <div className='Post-user'>
              <div className='Post-user-avatar'>
                <img src={avatar} alt={nickname} />
              </div>
              <div className='Post-user-nickname'>
                <span>{nickname}</span>
              </div>
            </div>
          </Link>
        </header>
        <Modal
          visible={this.state.visible}
          width='721px'
          height='500px'
          effect='fadeInUp'
          onClickAway={() => this.closeModal()}>
          <div className='row'>
            <div className='col-8'>
              <img className='modal-size row' alt={caption} src={image} />
            </div>
            <div className='col-4' style={{ paddingLeft: 0 }}>
              <Map
                defaultCenter={[21.0055203, 105.8411911]}
                defaultZoom={12}
                width={235}
                height={250}>
                <Marker
                  anchor={[21.0055203, 105.8411911]}
                  payload={1}
                  onClick={this.handleMarkerClick}
                />
              </Map>
            </div>
          </div>
        </Modal>
        <div className='Post-image' onClick={this.openModal}>
          <div className='Post-image-bg'>
            <img alt={caption} src={image} />
          </div>
        </div>
        <div className='col'>
          <div className='col'>
            <div className='Post-caption text-left row'>
              <div className='row like_long'>
                <ion-icon name='heart'></ion-icon>
                <strong className='like_number'>150</strong>
              </div>
              <div className='row like_long'>
                <ion-icon name='text'></ion-icon>
                <strong className='like_number'>{this.state.commentNumber}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className='Post-caption text-left'>
          <strong>{nickname} </strong>
          {caption}
        </div>
        <hr></hr>
        <Comment id={this.props.id} updateCommentNumber={this.setCommentNumber} />
      </article>
    );
  }
}
export default Post;

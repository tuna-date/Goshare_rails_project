import React, { Component } from 'react';
import Comment from '../Comment';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';

import './Post.css';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      starNumber: 2,
      commentNumber: 0
    };
  }

  handleChange = star => {
    this.setState({
      starNumber: star
    });
  };

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
            }}
            params={{ user_name: nickname }}>
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
              <iframe
                title='myFrame'
                width='100%'
                height='250'
                src={`https://www.google.com/maps/embed/v1/place?q=${this.props.location}&key=${process.env.REACT_APP_GOOGLEMAP_KEY}`}
              />
              <br />
              <strong>Rating:</strong>
              <Rate
                style={{ fontSize: '20px', display: 'inline-block !important' }}
                tooltips={desc}
                onChange={this.handleChange}
                value={this.state.starNumber}
              />
              {this.state.starNumber ? (
                <span className='ant-rate-text'>
                  <strong>{desc[this.state.starNumber - 1]}</strong>
                </span>
              ) : (
                ''
              )}
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

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Profile.css';
import ProfilePicture from '../../components/ProfilePicture';

function Profile(props) {
  const [info, setInfo] = useState({ ports: '16', follower: '238', follow: '808' });
  const [imageUrls, setImageUrls] = useState([
    { url: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg' },
    { url: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg' },
    { url: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg' },
    { url: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg' },
    { url: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg' },
    { url: 'https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg' }
  ]);

  const { userData } = props.location.state;
  const content = useSelector(state => state);
  return (
    <div className='body-area'>
      <div className='content'>
        <div className='profile row'>
          <div className='col-4'>
            <div className='User-avatar'>
              <img alt='avatar' src={userData.user_profile_avatar_url} />
            </div>
          </div>
          <div className='col-8'>
            <div className='col'>
              <div className='row margin_botton'>
                <p className='userName col-5 profile-content'>{userData.name}</p>
                <div className='col-7'>
                  <button type='button' className='btn btn-light'>
                    Chinh sua trang ca nhan
                  </button>
                </div>
              </div>
            </div>
            <div className='col profile-content'>
              <div className='row'>
                <p className='col-3 profile-content'>
                  <strong>{info.ports}</strong> Bai viet
                </p>
                <p className='col-4 profile-content'>
                  <strong>{info.follow}</strong> nguoi theo doi
                </p>
                <p className='col-5 profile-content'>
                  Dang theo doi <strong>{info.follower}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='profile-image-area'>
        {imageUrls.map((imageUrl, index) => (
          <ProfilePicture key={index} imageUrl={imageUrl.url} />
        ))}
      </div>
    </div>
  );
}

export default Profile;

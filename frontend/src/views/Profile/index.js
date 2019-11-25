import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Profile.css';

function Profile() {
  const content = useSelector(state => state);
  return (
    <div className='body-area'>
      <div className='content'>
        <div className='profile row'>
          <div className='col-4'>
            <div className='User-avatar'>
              <img alt='avatar' src={content.LoginStatus.image} />
            </div>
          </div>
          <div className='col-8'>
            <div className='col'>
              <div className='row'>
                <p className='userName'>{content.LoginStatus.name}</p>
              </div>
            </div>
            <div className='col'>
              <div className='row'></div>
            </div>
            <div className='col'>
              <div className='row'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

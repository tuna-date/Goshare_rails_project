import React from 'react';
import './ProfilePicture.css';

function ProfilePicture(props) {
  return (
    <div className='wrap'>
      <ul className='photo-feed photo-grid'>
        <li className='photo'>
          <div className='photo-wrapper'>
            <time className='photo-date'>
              <span>
                <span></span>
                <span>26</span>
                <span></span>
                <span>10 月</span>
                <span></span>
                <span>2013</span>
                <span></span>
              </span>
            </time>
            <img className='image-size' src={props.imageUrl} alt={props.imageUrl} />
            <ul className='photo-stats'>
              <li className='stat-likes'>
                <b>159</b>
              </li>
              <li className='stat-comments'>
                <b>23</b>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProfilePicture;

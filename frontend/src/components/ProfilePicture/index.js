import React, { useState } from "react";
import Modal from "react-awesome-modal";
import "./ProfilePicture.css";

function ProfilePicture(props) {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className='wrap'>
      <ul className='photo-feed photo-grid'>
        <li className='photo'>
          <div className='photo-wrapper'>
            <time className='photo-date'>
              <span>
                <span></span>
                <span>2013/ </span>
                <span></span>
                <span>10/ </span>
                <span></span>
                <span>26 </span>
                <span></span>
              </span>
            </time>
            <Modal
              visible={visible}
              width='721px'
              height='500px'
              effect='fadeInUp'
              onClickAway={closeModal}
            >
              <div className='row'>
                <div className='col-8'>
                  <img
                    className='modal-size row'
                    alt={props.imageUrl}
                    src={props.imageUrl}
                  />
                </div>
                {/* <div className='col-4'>hello</div> */}
              </div>
            </Modal>

            <img
              className='image-size'
              src={props.imageUrl}
              alt={props.imageUrl}
              onClick={openModal}
            />
            <ul className='photo-stats'>
              <li className='stat-likes'>
                <ion-icon name='heart'></ion-icon>
                <b className='text-flex-center'>159</b>
              </li>
              <li className='stat-comments'>
                <ion-icon name='text'></ion-icon>
                <b className='text-flex-center'>23</b>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProfilePicture;

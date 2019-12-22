import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { ActionCableConsumer } from "react-actioncable-provider";
import { notification } from "antd";

import "./Header.css";
import ImageUpload from "../ImageUpload";

function Header(props) {
  const [visible, setvisible] = useState(false);

  // const { userData } = props.location.state;
  const content = useSelector((state) => state);

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  function handleReceivedConversation(response) {
    if (response.to === content.LoginStatus.name) {
      openNotification(response.from);
    }
  }

  function openNotification(follower) {
    notification.open({
      message: follower + " started following you",
      description: `Be the inspiration for ${follower} !`
      // onClick: () => {
      //   console.log("Notification Clicked!");
      // }
    });
  }

  useEffect(() => {
    i18next.changeLanguage(localStorage.getItem("language"));
  }, []);

  return (
    <nav className='Nav'>
      <div className='Nav-menus'>
        <div className='Nav-brand row justify-content-between'>
          <ActionCableConsumer
            channel='NotificationChannel'
            onReceived={handleReceivedConversation}
          />
          <Link className='Nav-brand-logo' to='/'>
            Instagram
          </Link>

          {content.LoginStatus.isLogin ? (
            <div className='row'>
              <label className='dropdown'>
                <div className='dd-button'>{t("nav.lang")}</div>

                <input type='checkbox' className='dd-input' id='test' />

                <ul className='dd-menu'>
                  <li onClick={() => handleClick("en")}>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>English</div>
                      </div>
                    </div>
                  </li>
                  <li onClick={() => handleClick("vn")}>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>Tiếng Việt</div>
                      </div>
                    </div>
                  </li>
                  <li onClick={() => handleClick("jp")}>
                    <div className='col'>
                      <div className='row'>
                        <div className='col'>日本語</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </label>
              <div className='col' onClick={() => setvisible(true)}>
                <div className='camera'></div>
              </div>
              <Modal
                visible={visible}
                width='721px'
                height='500px'
                effect='fadeInUp'
                onClickAway={() => setvisible(false)}
              >
                <ImageUpload close={() => setvisible(false)} />
              </Modal>
              <Link
                to={{
                  pathname: "/profile",
                  state: {
                    userData: {
                      name: content.LoginStatus.name,
                      user_profile_avatar_url: content.LoginStatus.image,
                      user_profile_id: content.LoginStatus.userID
                    }
                  }
                }}
              >
                <div className='Post-user-nav'>
                  <div className='Post-user-avatar'>
                    <img alt='avatar' src={content.LoginStatus.image} />
                  </div>
                  <div className='Post-user-nickname'>
                    <span>{content.LoginStatus.name}</span>
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

export default Header;

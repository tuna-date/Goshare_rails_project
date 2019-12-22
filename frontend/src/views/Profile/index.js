import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ActionCableConsumer } from "react-actioncable-provider";
import axios from "axios";
import { BackTop } from "antd";

import "./Profile.css";
import ProfilePicture from "../../components/ProfilePicture";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Profile(props) {
  const [profileData, setProfileData] = useState({});

  const { userData } = props.location.state;
  const content = useSelector((state) => state);
  var token = localStorage.getItem("token");

  const { t } = useTranslation();

  useEffect(() => {
    fetchUserData();
  }, [userData]);

  async function fetchUserData() {
    var url = `http://localhost:5050/users/${userData.user_profile_id}/profile`;
    var data = await axios.get(url, {
      headers: { Authorization: token }
    });
    setProfileData(data.data);
  }

  async function followUser() {
    var url = `http://localhost:5050/users/user/follow`;
    axios
      .post(
        url,
        {
          user_id: profileData.id
        },
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        fetchUserData();
      });
  }

  async function unfollowUser() {
    var url = `http://localhost:5050/users/user/unfollow`;
    axios
      .post(
        url,
        {
          user_id: profileData.id
        },
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        fetchUserData();
      });
  }

  function handleReceivedConversation(response) {
    if (response.to === content.LoginStatus.name) {
      fetchUserData();
    }
  }

  return (
    <div className='body-area'>
      <ActionCableConsumer
        channel='NotificationChannel'
        onReceived={handleReceivedConversation}
      />
      <div className='content'>
        <div className='profile row'>
          <div className='col-4'>
            <div className='User-avatar'>
              <img alt='avatar' src={profileData.avatar_url} />
            </div>
          </div>
          <div className='col-8'>
            <div className='col'>
              <div className='row margin_botton justify-content-around'>
                <p className='userName profile-content'>{profileData.name}</p>
                <button type='button' className='btn btn-light'>
                  {t("profile_page.profile_edit_button")}
                </button>
                {profileData.id === content.LoginStatus.userID ? (
                  ""
                ) : profileData.is_following_by_current_user ? (
                  <button
                    type='button'
                    className='btn btn-light'
                    onClick={unfollowUser}
                  >
                    {t("profile_page.unfollow_button")}
                  </button>
                ) : (
                      <button
                        type='button'
                        className='btn btn-light'
                        onClick={followUser}
                      >
                        {t("profile_page.follow_button")}
                      </button>
                    )}
              </div>
            </div>
            <div className='col profile-content'>
              <div className='row'>
                <p className='col-3 profile-content'>
                  <strong>{profileData.posts_count}</strong> {t("profile_page.post")}
                </p>
                <p className='col-4 profile-content'>
                  <strong>{profileData.followers_count}</strong>
                  {t("profile_page.follower")}
                </p>
                <p className='col-5 profile-content'>
                  {t("profile_page.following_prefix")}{" "}
                  <strong>{profileData.following_count}</strong> {t("profile_page.following_postfix")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='profile-image-area'>
        {profileData.posts
          ? profileData.posts.map((imageUrl, index) => (
            <ProfilePicture key={index} imageUrl={imageUrl.image_url} />
          ))
          : ""}
      </div>
      <div>
        <BackTop />
      </div>
      <div>
        <BackTop />
      </div>
    </div>
  );
}

export default Profile;

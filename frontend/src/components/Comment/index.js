import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css';

export default function Comment(props) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState();
  var token = localStorage.getItem('token');
  const fetchData = async () => {
    var url = 'http://localhost:5050/newfeed/post/' + props.id;
    var comment = await axios.get(url, {
      headers: { Authorization: token }
    });
    props.updateCommentNumber(comment.data.all_comments.length);
    setComments(comment.data.all_comments);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postComment = () => {
    axios
      .post(
        'http://localhost:5050/newfeed/post/comment/create',
        {
          post_id: props.id,
          content: commentText
        },
        { headers: { Authorization: token } }
      )
      .then(() => {
        fetchData();
      });
    // console.log(commentText);
  };

  return (
    <div className='text-left'>
      {comments !== undefined ? (
        comments.map((comment, index) => (
          <div key={index} className='col'>
            <div className='Post-user'>
              <div className='Post-user-avatar'>
                <img src={comment.user_info.avatar_url} alt={index} />
              </div>
              <div className='Post-user-nickname'>
                <span>{comment.user_info.name}</span>
              </div>
            </div>
            <div className='comment-padding'>
              <div>{comment.content}</div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}

      <hr />
      <div className='col'>
        <div className='form-group col'>
          <div className='row'>
            <div className='col-sm-11'>
              <input
                type='text'
                className='form-control-plaintext'
                id='staticEmail'
                value={commentText}
                placeholder='Viet gi do di !!!'
                onChange={e => setCommentText(e.target.value)}
              />
            </div>
            <div>
              <button type='button' className='btn btn-light' onClick={postComment}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './Comment.css';

export default function Comment(props) {
  const [comments, setComments] = useState([
    {
      user: 'hoang',
      avatar:
        'https://lh3.googleusercontent.com/-NncmLvZP5l4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re14K03xKtbJui9PE-L2dTnt7Jq-Q/photo.jpg?sz=46',
      comment: 'co van toi cao tong thong hoa ki'
    },
    {
      user: 'hoang',
      avatar:
        'https://lh3.googleusercontent.com/-NncmLvZP5l4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re14K03xKtbJui9PE-L2dTnt7Jq-Q/photo.jpg?sz=46',
      comment: 'co van toi cao tong thong hoa ki'
    },
    {
      user: 'hoang',
      avatar:
        'https://lh3.googleusercontent.com/-NncmLvZP5l4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re14K03xKtbJui9PE-L2dTnt7Jq-Q/photo.jpg?sz=46',
      comment: 'co van toi cao tong thong hoa ki'
    },
    {
      user: 'hoang',
      avatar:
        'https://lh3.googleusercontent.com/-NncmLvZP5l4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re14K03xKtbJui9PE-L2dTnt7Jq-Q/photo.jpg?sz=46',
      comment: 'co van toi cao tong thong hoa ki'
    }
  ]);
  const [commentText, setCommentText] = useState('');

  const postComment = () => {
    console.log(commentText);
  };

  return (
    <div className='text-left'>
      {comments.map((comment, index) => (
        <div key={index} className='col'>
          <div className='Post-user'>
            <div className='Post-user-avatar'>
              <img src={comment.avatar} alt={index} />
            </div>
            <div className='Post-user-nickname'>
              <span>{comment.user}</span>
            </div>
          </div>
          <div className='comment-padding'>
            <div>{comment.comment}</div>
          </div>
        </div>
      ))}
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

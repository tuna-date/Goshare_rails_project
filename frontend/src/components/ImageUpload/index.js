import React, { Component, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { storage } from '../../firebase';
import axios from 'axios';
import { Redirect } from 'react-router';

import './ImageUpload.css';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function ImageUpload(props) {
  const [commentText, setCommentText] = useState('');
  const [files, setFiles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const removeImage = () => {
    setFiles([]);
  };

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleUpload = () => {
    const image = files[0];
    const uploadTask = storage.ref(`images/${image.path}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        // progrss function ....
        // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // this.setState({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);

            var token = localStorage.getItem('token');
            console.log(token);
            axios
              .post(
                'http://localhost:5050/newfeed/post/create',
                {
                  content: commentText,
                  image_url: url,
                  location_tag: 'abc'
                },
                { headers: { Authorization: token } }
              )
              .then(res => {
                console.log(res);
                props.close();
                setRedirect(true);
              })
              .catch(error => {
                console.log(error);
              });
          });
      }
    );
  };

  return (
    <div style={style}>
      {redirect ? <Redirect push to='/' /> : <></>}
      <br />
      <section className='container'>
        <div className='drag-box' {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some images here, or click to select images</p>
        </div>
        <aside style={thumbsContainer} onClick={removeImage}>
          {thumbs}
        </aside>
        <input
          type='text'
          className='form-control'
          id='staticEmail'
          value={commentText}
          placeholder='Viet gi do di !!!'
          onChange={e => setCommentText(e.target.value)}
        />
        <div className='botton-area'>
          <button className='btn btn-light' onClick={handleUpload}>
            Upload
          </button>
        </div>
      </section>
      <br />
    </div>
  );
}

export default ImageUpload;

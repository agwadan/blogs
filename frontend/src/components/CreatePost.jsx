import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

export const CreatePost = () => {

  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', { title });
    setTitle('');
    window.location.reload();
  }

  return (
    <div className='create-post'>
      <h2>Create Post</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title   </label>
          <input
            className='form-control'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div> <br /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
import axios from 'axios';
import React, { useState } from 'react';

export const CreateComment = ({ postId }) => {

  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    setContent('');
    window.location.reload();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className='form-control'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
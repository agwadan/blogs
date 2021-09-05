import React, { useState } from 'react';
import axios from 'axios';

export const CreatePost = () => {

  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', { title });
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className='form-control'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

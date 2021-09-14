import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CreateComment } from '../CreateComment';
import { CommentList } from '../CommentList';
import './PostList.css';

export const PostList = () => {

  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts'); //--------- Now making a request to the query service.
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => { //-------------- Object.values => returns an array of all the objects of posts
    return (
      <div className='card' key={post.id}>
        <div className='card-body'>
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    )
  });

  return (
    <div className=''>
      <h1>Posts</h1>
      {renderedPosts}
    </div>
  )
}
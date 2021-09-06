import React from 'react';
import './App.css';
import { CreatePost } from './components/CreatePost';
import { PostList } from './components/PostList';

function App() {

  return (
    <div className="App">
      <h1>Blogs Microservices</h1>
      <h2>Create Post</h2>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  )
}

export default App

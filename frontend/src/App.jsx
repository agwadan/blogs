import React from 'react';
import './App.css';
import { CreatePost } from './components/CreatePost';
import Navbar from './components/Navbar/Navbar';
import { PostList } from './components/PostList/PostList';

function App() {

  return (
    <div className="App">
      <Navbar />
      <CreatePost />
      <hr />
      <PostList />
    </div>
  )
}

export default App

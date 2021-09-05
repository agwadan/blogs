import React from 'react';
import './App.css';
import { CreatePost } from './components/CreatePost';

function App() {

  return (
    <div className="App">
      <h1>Blogs Microservices</h1>
      <h2>Create Post</h2>
      <CreatePost />
    </div>
  )
}

export default App

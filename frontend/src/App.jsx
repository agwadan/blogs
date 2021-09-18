import React from 'react';
import './App.css';
import { BackDrop } from './components/BackDrop/BackDrop';
import { CreatePost } from './components/CreatePost';
import Navbar from './components/Navbar/Navbar';
import { PostList } from './components/PostList/PostList';
import { SideDrawer } from './components/SideDrawer/SideDrawer';

function App() {

  return (
    <div className="App" style={{ height: '100% ' }}>
      <Navbar />
      <SideDrawer />
      <BackDrop />
      <CreatePost />
      <hr />
      <PostList />
    </div>
  )
}

export default App

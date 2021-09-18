import React from 'react';
import { BackDrop } from '../BackDrop/BackDrop';
import './SideDrawer.css';

export const SideDrawer = ({ toggleHandler }) => {
  return (
    <>
      <nav className='side-drawer'>
        <h1 className='close-button' onClick={() => toggleHandler(false)}>X</h1>
        <ul>
          <li>Posts</li>
          <li>Comments</li>
        </ul>
      </nav>
      <BackDrop />
    </>
  )
}

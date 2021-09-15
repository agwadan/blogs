import React from 'react';
import './DrawerButton.css';

export const DrawerButton = (props) => {
  return (
    <button className='toggle-button'>
      <div className='btn-line' />
      <div className='btn-line' />
      <div className='btn-line' />
    </button>
  )
}

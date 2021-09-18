import React from 'react';
import './DrawerButton.css';

export const DrawerButton = ({ toggleHandler }) => {
  return (
    <button className='toggle-button' onClick={() => toggleHandler(true)}>
      <div className='btn-line' />
      <div className='btn-line' />
      <div className='btn-line' />
    </button>
  )
}

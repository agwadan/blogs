import React from 'react';
import './Navbar.css';
import { DrawerButton } from '../SideDrawer/DrawerButton';

const Navbar = () => {
  return (
    <header className='navbar'>
      <nav className='navbar-nav'>
        <div><DrawerButton /></div>
        <div className='navbar-logo'><a href="/">BLOGS</a></div>
        <div className='spacer' />
        <div className='navbar-items'>
          <ul>
            <li><a href='/'>Posts</a></li>
            <li><a href='/'>Comments</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;
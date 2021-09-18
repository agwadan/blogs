import React, { useState } from 'react';
import './Navbar.css';
import { DrawerButton } from '../SideDrawer/DrawerButton';
import { SideDrawer } from '../SideDrawer/SideDrawer';

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <>
      <header className='navbar'>
        <nav className='navbar-nav'>
          <div><DrawerButton toggleHandler={setSideDrawerOpen} /></div>
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
      {sideDrawerOpen &&
        <SideDrawer toggleHandler={setSideDrawerOpen} />
      }
    </>
  )
}
export default Navbar;
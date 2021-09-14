import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
      <nav className='navbar-nav'>
        <div></div>
        <div className='navbar-logo'><a href="/">BLOGS</a></div>
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
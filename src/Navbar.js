import React from 'react';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1 className="nav-logo">Wavvy</h1>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
       
        <ul className='nav-links'>
          <li>
            <button className='link-btn2' onClick="window.location.href='/'">
              Home
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Services
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Blog
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Contact
            </button>
          </li>
           
        </ul>
        <button className="btn phoneBtn"><FaPhoneAlt/> 9876543210</button>
      </div>
    </nav>
  );
};

export default Navbar;

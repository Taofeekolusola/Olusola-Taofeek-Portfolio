import React, { useState } from 'react';
import getImageUrl from '../../utils';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative z-20 w-full px-[10%] pt-[61px] flex items-center justify-between">
      <a className="text-[30px] font-semibold text-white no-underline" href="/">
        Portfolio
      </a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <img
          className="w-[30px] h-[30px] cursor-pointer"
          src={
            openMenu
              ? getImageUrl('closedmenu.png')
              : getImageUrl('menuicon.png')
          }
          alt="menu-button"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          openMenu ? 'flex' : 'hidden'
        } absolute top-full left-0 w-full flex-col items-center gap-4 px-6 py-4 mt-2 bg-gradient-to-t from-[rgba(25,55,109,1)] to-[rgba(25,25,109,0.2)] shadow-md md:shadow-none md:static md:flex md:flex-row md:w-auto md:mt-0 md:bg-transparent md:gap-[47px]`}
        onClick={() => setOpenMenu(false)}
      >
        <li>
          <Link to="/" className="text-[25px] text-white no-underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/experience" className="text-[25px] text-white no-underline">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/project" className="text-[25px] text-white no-underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-[25px] text-white no-underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-[25px] text-white no-underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
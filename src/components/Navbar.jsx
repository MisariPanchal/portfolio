import React, { useState } from 'react';
import logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  const handleClose = () => setClick(false);

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100 }} className="bg-white shadow-md">
      <div className="flex items-center justify-between h-16 px-14">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-bold uppercase">
          <a href="#" className='hover:text-[#00296b] transition cursor-pointer'><li>Home</li></a>
          <a href="#about" className='hover:text-[#00296b] transition cursor-pointer'><li>About</li></a>
          <a href="#projects" className='hover:text-[#00296b] transition cursor-pointer'><li>Projects</li></a>
          <a href="#contact" className='hover:text-[#00296b] transition cursor-pointer'><li>Contact</li></a>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {click && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden z-50 shadow-md">
          <ul className="flex flex-col text-center font-bold uppercase">
            <a href="#" onClick={handleClose} className="py-5 border-t border-b border-gray-200 hover:text-[#00296b]"><li>Home</li></a>
            <a href="#about" onClick={handleClose} className="py-5 border-t border-b border-gray-200 hover:text-[#00296b]"><li>About</li></a>
            <a href="#projects" onClick={handleClose} className="py-5 border-t border-b border-gray-200 hover:text-[#00296b]"><li>Projects</li></a>
            <a href="#contact" onClick={handleClose} className="py-5 border-t border-b border-gray-200 hover:text-[#00296b]"><li>Contact</li></a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

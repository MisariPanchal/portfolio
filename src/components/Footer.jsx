import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-[#011e4c] text-white pt-20 pb-10">
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center px-10 lg:px-40 gap-5">
        {/* Left Section */}
        <div className='text-center lg:text-left lg:w-[50%]'>
          <h1 className="font-bold text-xl">MISARI PANCHAL</h1>
          <p className="mt-2 text-sm">
            A Frontend focused Web Developer building the Frontend of Websites and 
            Web Applications that leads to the success of the overall product.
          </p>
        </div>

        {/* Right Section - Social Icons */}
        <div className="mt-5 lg:mt-0">
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://github.com/MisariPanchal" target='_blank' className="hover:text-gray-400 text-white">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/misari-panchal/" target='_blank' className="hover:text-gray-400">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center pt-4">
        <div className='border-t border-white w-[80%] mx-auto'></div>
        <p className="text-xs mt-10">
          © Copyright 2024. Made by <a href="#" className="font-bold text-white hover:underline">Misari Panchal</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

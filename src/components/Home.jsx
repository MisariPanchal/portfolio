import React from 'react';
import bg from "../assets/bg2.jpg";
import './style.css';

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat " style={{
        background: `linear-gradient(to right, rgba(245, 245, 245, 0.9), rgba(245, 245, 245, 0.7)), url(${bg})`,
        backgroundSize: 'cover',
      }}>
        <div className='flex flex-col items-center py-40'>
          <h1 className="md:animate-typing animate-typing-sm text-center md:text-[50px] text-[25px] font-bold mb-4">HI, I AM MISARI PANCHAL</h1>
          <p className="md:text-[20px] text-[17px] text-center mb-8 md:px-0 px-10 md:w-[80%] w-[85%]">
            A highly motivated Frontend Developer with strong problem-solving skills and a passion for developing user-centric solutions
          </p>
          <a href='#projects' className="md:text-lg text-[15px] text-white bg-[#00296b] hover:bg-[#063279] font-medium rounded-md px-12 py-3">
            PROJECTS
          </a>
        </div>

        {/* Animation below the button */}
        <div className="arrow-container mb-12">
          <div className="bounce-arrow">
            <span className="arrow-down ">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;

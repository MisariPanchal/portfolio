import React from 'react';

const About = () => {
  const arr = ["HTML/CSS", "JavaScript", "React","Redux", "Git", "Github", "Bootstrap", "TailwindCSS", "Responsive Design", "C++","Python"];

  return (
    <div id='about' className='flex flex-col items-center bg-[#eef2f5] py-20'>
      <div className='w-full text-center mb-8 flex flex-col items-center'>
        <p className='text-3xl md:text-4xl font-bold'>ABOUT ME</p>
        <div className='my-5 w-7 h-1 rounded bg-[#00296b]'></div>
        <p className='md:text-[20px] text-[18px] text-gray-600 md:mb-15 mb-10 md:w-[60%] w-[75%]'>
          Here you will find more information about me, what I do,
          and my current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center w-full max-w-full gap-10 md:gap-40 px-6 md:px-40'>
        {/* Left Section */}
        <div className='w-full md:w-1/2 px-6 md:mb-0 mb-10'>
          <p className='text-2xl md:text-3xl font-bold mb-6'>Get to know me!</p>
          <p className='text-gray-600 leading-relaxed text-[18px] md:text-[20px]'>
            I'm an enthusiastic <span className='font-bold text-[#00296b]'>Frontend Developer</span> with a talent for creating dynamic, approachable websites. I'm proficient in <span className='font-bold text-[#00296b]'>JavaScript, React, and CSS,</span> and I've produced high-caliber code and designed user interfaces that are easy to understand. I like finding solutions to <span className='font-bold text-[#00296b]'>challenging issues</span> and making designs work flawlessly.
          </p>
          <p className='text-gray-600 leading-relaxed mt-4 mb-10 md:text-[20px] text-[18px]'>
            With a background in <span className='font-bold text-[#00296b]'>Computer Engineering</span>, a <span className='font-bold text-[#00296b]'>CGPA of 9.21</span>, and experience applying for roles like <span className='font-bold text-[#00296b]'>Frontend Developer</span>, I’m always ready to take on new challenges and grow as a developer.
          </p>
          <a href='#contact' className="mt-6 md:text-lg text-[15px] text-white bg-[#00296b] hover:bg-[#063279] font-medium rounded-md px-12 py-3">
            CONTACT
          </a>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 px-6'>
          <p className='text-2xl md:text-3xl font-bold mb-6'>My Skills</p>
          <div className='flex flex-wrap gap-4'>
            {arr.map((item, index) => {
              return <span key={index} className='text-[14px] md:text-[16px] text-[#4b4a4a] bg-[#e6e5e5] px-4 py-2 rounded-md'>{item}</span>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

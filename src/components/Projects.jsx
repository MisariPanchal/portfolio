import React from 'react';
import TextUtils from "../assets/text-utils.jpg";
import TaskMate from "../assets/task-mate.jpg";
import Smoothecart from "../assets/smoothe-cart.jpg";
import FormFlux from "../assets/form-flux.jpg";

const Projects = () => {
  const arr = [1, 2, 3, 4]; 
  const projectDetails = [
    {
      name:"TaskMate",
      description:"TaskMate is a simple task manager with Open, In-Progress, and Completed categories. Users can easily add, edit, delete, or move tasks between stages using a drag-and-drop interface for seamless task organization.",
      image:TaskMate,
      live_link:"https://misaripanchal.github.io/TaskMate/",
      github_link:"https://github.com/MisariPanchal/TaskMate"
    },
    {
      name:"SmootheCart",
      description:"SmootheCart is an e-commerce platform featuring a variety of products across multiple categories. It offers a user-friendly interface for easy browsing and purchasing, allowing users to add items to their cart or buy directly.",
      image:Smoothecart,
      live_link:"https://misaripanchal.github.io/SmootheCart/",
      github_link:"https://github.com/MisariPanchal/SmootheCart"
    },
    {
      name:"FormFlux",
      description:"FormFlux is a dynamic form generator that allows users to select fields like Name, Email, Password, Phone, and Address. Based on the selections, it creates a custom form that can be filled out and submitted.",
      image:FormFlux,
      live_link:"https://misaripanchal.github.io/FormFlux/",
      github_link:"https://github.com/MisariPanchal/FormFlux"
    },
    {
      name:"TextUtils",
      description:"TextUtils is a web app for efficient text manipulation, offering features like case conversion, word/character counting, and space removal. It streamlines text processing with a simple, user-friendly interface.",
      image:TextUtils,
      live_link:"https://misaripanchal.github.io/text-utils/",
      github_link:"https://github.com/MisariPanchal/text-utils"
    },
  ];

  return (
    <div id='projects' className='flex flex-col items-center py-20 md:px-20'>
      {/* Title Section */}
      <div className='w-full text-center mb-8 flex flex-col items-center'>
        <p className='text-3xl md:text-4xl font-bold'>PROJECTS</p>
        <div className='my-5 w-7 h-1 rounded bg-[#00296b]'></div>
        <p className='md:text-[20px] text-[18px] text-gray-600 md:mb-15 mb-10 md:w-[60%] w-[75%]'>
        These are projects that I created while I was an intern, demonstrating how I used my knowledge and abilities in practical settings.
        </p>
      </div>

      {/* Projects Section */}
      <div className='w-full flex flex-col items-center gap-20 custom:gap-40 sm:px-6 px-4'>
        {
          projectDetails.map((item, index) => {
            return (
              <div key={index} className='flex flex-col w-full items-center custom:flex-row bg-white overflow-hidden'>

                {/* Project Image */}
                <div className='md:w-1/2 flex justify-center'>
                  <img src={item.image} alt={`Project ${item.name}`} className='object-cover h-48 custom:h-80' />
                </div>

                {/* Project Info */}
                <div className='md:w-1/2 p-6 flex flex-col custom:justify-center custom:items-start items-center'>
                  <h3 className='text-2xl font-semibold mb-4'>{item.name}</h3>
                  <p className='text-gray-600 mb-4'>
                    {item.description}
                  </p>
                  <div className='flex gap-5'>
                    <a href={item.live_link} target='_blank' className="md:text-lg text-[15px] text-white bg-[#00296b] hover:bg-[#063279] font-medium rounded-md px-12 py-3 self-start">
                      Live Link
                    </a>
                    <a href={item.github_link} target='_blank' className="md:text-lg text-[15px] text-white bg-[#00296b] hover:bg-[#063279] font-medium rounded-md px-12 py-3 self-start">
                      Github Link
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Projects;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e3dcik3', 'template_uthhzpv', formRef.current, {
        publicKey: 'zDi7bRNx1y3N3cAxx',
      })
      .then(
        () => {
          e.target.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='contact' className="flex flex-col justify-center items-center py-20 bg-[#eef2f5]">
      <div className='w-full text-center mb-8 flex flex-col items-center'>
        <p className='text-3xl md:text-4xl font-bold'>CONTACT</p>
        <div className='my-5 w-7 h-1 rounded bg-[#00296b]'></div>
        <p className='md:text-[20px] text-[18px] text-gray-600 md:mb-15 mb-10 md:w-[60%] w-[75%]'>
        Please fill out the form below to get in contact with me, and I will get back to you as soon as possible.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[75%] md:w-full max-w-md">
        
        <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter Your Name"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter Your Message"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" value="submit" className="md:text-lg text-[15px] text-white bg-[#00296b] hover:bg-[#063279] font-medium rounded-md px-12 py-3 self-start">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // EmailJS service details
//     const serviceID = 'your_service_id';
//     const templateID = 'your_template_id';
//     const userID = 'your_user_id';

//     const templateParams = {
//       subject: formData.name,
//       from: formData.email,
//       message: formData.message,
//     };

//     emailjs
//       .send(serviceID, templateID, templateParams, userID)
//       .then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           alert('Email sent successfully!');
//         },
//         (err) => {
//           console.log('FAILED...', err);
//           alert('Failed to send email. Please try again.');
//         }
//       );
//   };

//   return (
//     <div id='contact' className="flex flex-col justify-center items-center py-20 bg-[#eef2f5]">
//       <div className='w-full text-center mb-8 flex flex-col items-center'>
//         <p className='text-4xl font-bold'>CONTACT</p>
//         <div className='my-5 w-7 h-1 rounded bg-[#00296b]'></div>
//       </div>
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter Your Name"
//               required
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Your Email"
//               required
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               placeholder="Enter Your Message"
//               required
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button type="submit" className="text-lg text-white bg-[#00296b] hover:bg-[#063279] focus:ring-4 font-medium rounded-md px-12 py-3 self-start ">
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

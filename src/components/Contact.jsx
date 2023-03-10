import React, {useRef} from 'react'
import ProfilePic from '../images/profilepic.jpg'

import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        "by35LgX_KNrtRLL7n"
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your email has been sent")
      e.target.reset()
  }

  return (
    <div id="contact" className='mb-20'>
      <h1 className='text-xl4 mt-20 px-10 lg:px-72'>Contact</h1>
      <hr className="w-1/3 h-1 bg-pink border-none mt-20" />
        <div className='px-10 lg:px-72 xl:flex xl:justify-between'>
          <div className='flex flex-col'>
            <p className="my-10 text-xl lg:text-xl2">Contact me by filling out this form or sent an email to laurangt@yahoo.com. </p>
            <form id="contactForm" ref={form} onSubmit={sendEmail} className="text-lg">
              <div className='flex mb-5'>
                <label htmlFor="name" className='w-36 self-center'>Name</label>
                <input type="text" name="name" className="block p-3 w-full bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your full name" required/>
              </div>
              <div className='flex mb-5'>
                  <label htmlFor="email" className='w-36 self-center'>Your email</label>
                  <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required />
              </div>
              <div className="flex mb-5">
                  <label htmlFor="message" className='w-36 mt-2.5'>Your message</label>
                  <textarea name="message" rows="6" className="block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave your message..." required></textarea>
              </div>
              <button type="submit" className="py-3 px-5 font-bold text-center rounded-lg bg-pink w-48">Send message</button>
            </form>
          </div>
        <img src={ProfilePic} alt="profilepic" className='xl:w-60 h-80 xl:ml-10 mt-10 object-cover rounded w-full object-top'/>
      </div>
    </div>
  )
}

export default Contact

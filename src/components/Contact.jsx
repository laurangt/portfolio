import React from 'react'

function Contact() {
  return (
    <div className='mb-20 '>
      <h1 className='text-4xl mt-20 px-20 lg:px-72'>Projects</h1>
      <hr class="w-1/3 h-1 bg-pink border-none mt-20" />
      <div className='px-20 lg:px-72'>
        <p className="my-10 text-2xl">Contact me by filling out this form or sent an email to laurangt@yahoo.com. </p>
        <form action="#">
          <div className='flex mb-5'>
            <label htmlFor="name" className='w-36 self-center'>Name</label>
            <input type="text" id="name" className="block p-3 w-full bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your full name"/>
          </div>
          <div className='flex mb-5'>
              <label htmlFor="email" className='w-36 self-center'>Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required />
          </div>
          <div className="flex mb-5">
              <label htmlFor="message" className='w-36 mt-2.5'>Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave your message..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 font-bold text-center rounded-lg bg-pink w-48">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

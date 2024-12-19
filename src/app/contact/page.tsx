import React from 'react'

const page = () => {
  return (
    <form className='bg-gray-700  '>
      <h2 className="text-[30px] ml-3 text-orange-600 font-bold text-center p-5 md:text-[40px]">Contact Us</h2>
        <div className='border rounded mx-2 font-bold grid p-5 bg-gray-600 bg-transparent md:p-9 md:mx-4 lg:w-[70%] lg:ml-[14%] '>
          <label className='text-gray-100 font-bold'>Your Name</label>
          <input className='text-center h-[40px] rounded bg-gray-100' type="text" required />
          <label className='text-gray-100 font-bold'>Email Address</label>
          <input className='text-center h-[40px] rounded bg-gray-100' type="email" required />
          <label className='text-gray-100 font-bold'>Your Message</label>
          <textarea className='pl-2 bg-gray-100' rows={5} required></textarea>

         <button type='submit' className='bg-orange-500 py-3 rounded text-gray-200 mt-3'> Send Message </button>
        </div>

        <div className='text-gray-400 p-5 bg-gray-600 rounded mx-3 mt-5'>
         <h3> Phone#: 03473239151</h3>
          <h3>Gmail: abc@gmail.com</h3>
        </div>

    </form>
  )
}

export default page
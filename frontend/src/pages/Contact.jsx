import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-lg font-semibold text-gray-600 '>OUR OFFICE</p>
          <p className='text-gray-500 '>252 Hill Station <br /> Suite 350, Vadodara, Gujarat</p>
          <p className='text-gray-500 '>Tel: 9584258515 <br /> Email: demoproject@gmail.com</p>
          <p className='text-lg font-semibold text-gray-600 '>CAREERS AT LIFELINK</p>
          <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className='bg-maroon p-6 flex justify-between items-center font-Lora font-semibold'>
      <div className=''>BSQ Logo</div>
      <div className='flex justify-around padding-2 text-white gap-20 font-semibold text-2xl items-center'>
        <Link to='/' className='hover:text-yellow'>
          Home
        </Link>
        <Link to='/about' className='hover:text-yellow'>
          About
        </Link>
        <Link to='/faqs' className='hover:text-yellow'>
          FAQs
        </Link>
        <Link to='/contactus' className='hover:text-yellow'>
          Contact Us
        </Link>
        <li className='list-none '>
          <button className='font-bold py-4 px-8 rounded-3xl border-white border-2 bg-gray hover:text-yellow hover:bg-maroon text-black'>
            Get Started
          </button>
        </li>
      </div>
    </div>
  )
}

export default NavigationBar

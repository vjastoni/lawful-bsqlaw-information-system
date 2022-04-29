import React from 'react'

function NavigationBar() {
  return <div className='bg-red-800 p-6 flex justify-between'>
    <div className=''>
      BSQ Logo
    </div>
    <div className="flex justify-around padding-2 text-gray-200">
      <li className='list-none'><a href="#">Home</a></li>
      <li className='list-none'><a href="#">About</a></li>
      <li className='list-none'><a href="#">Contact Us</a></li>
      <li className='list-none'><a href="#">Get Started</a></li>
    </div>
  </div>
}

export default NavigationBar

import React from 'react'
import img1 from './Images/BLOG APP.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img className='w-28 h-28' src={img1} alt="BlogApp Logo" />
    </div>
  )
}

export default Logo
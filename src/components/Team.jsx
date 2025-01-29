import React from 'react'
import { memberOne, memberTwo } from '../assets/images'

const Team = () => {
  return (
    <div>
      <div className='px-25 font-semibold'>
        <p>My Team</p>
      </div>
      <div className='relative flex px-20'>
  <div className="relative w-16 h-16">
    <img src={memberTwo} alt="memberTwo" className='absolute w-16 h-16 rounded-full  z-10  ' />
    <img src={memberOne} alt="memberOne" className='absolute w-16 h-16 rounded-full left-9 z-10' />
    
  </div>
</div>

    </div>
  )
}

export default Team

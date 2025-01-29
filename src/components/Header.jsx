import React from 'react'
import { search, menu } from '../assets/icons'
import {user} from '../assets/images'

const Header = () => {
  return (
    <div className='flex text-gray-950'>
      <section className='h-18 flex px-15 ml-10 w-220 bg-blue-200 rounded-sm '>
        <div className='rounded-full bg-gray-400 h-7 p-3 mt-6 flex items-center justify-between w-full max-w-120'>
          <img src={menu} alt="menu" style={{width: '20px', height: '20px'}}/>
          <input className='text-gray-950 h-6 border-none' placeholder='Hinted search text'/>
          <img src={search} alt="search" style={{width: '20px', height: '20px'}} className='pointer' />
        </div>
        <div className='flex justify-between'>
          <div className='block ml-15'>
          <p className='font-bold text-2xl font-sans'>John Doe</p>
          <p className='font-light'>johndoe@gmail.com</p>
          </div>
          <img src={user} alt="user" style={{width: '50px', height: '50px'}} className='rounded-full ml-6 mt-3' />
        </div>
      </section>
    </div>
  )
}

export default Header

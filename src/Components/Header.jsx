import React from 'react'
import Logo from "../assets/Clip.jpeg"

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 h-18'>
      <img src={Logo} className='w-20 h-12 border-2 rounded-2xl' alt="" />
      <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
      <Link to="/watchlist" className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Header
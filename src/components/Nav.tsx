import React from 'react'
import Image from 'next/image.js'
import {navLists} from "../constants/index"
import logo from "../assets/images/logo.svg"
import search from "../assets/images/search.svg"
import store from "../assets/images/store.svg"

function Nav () {
  return (
    <nav className='nav-wrapper w-full justify-between bg-white p-3' >
     <div className='nav-content flex ml-10 justify-between w-[90%]'>
        <Image src={logo} alt="apple" className='mt-[-10]'/>
      <ul className='list-style flex max-md:hidden'>
      {navLists.map((nav, i) => (
            <div className="px-5 text-sm cursor-pointer text-black hover:text-white transition-all">{nav}</div>
          ))}
      </ul>
      <Image src={search} alt="search" className='mt-[-10]'/>
      <Image src={store} alt="store" className='mt-[-10]'/>
     </div>
    </nav>
  )
}

export default Nav
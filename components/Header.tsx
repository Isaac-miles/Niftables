'use client'

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"



const Header = () => {

    const logo = new URL(`/public/img/logo.png`, import.meta.url).href
    // const accImgUrl = new URL(`/public/img/acc-logo.png`, import.meta.url).href


  return (
    <header className="bg-[#141414] text-white" >

      <div className="flex items-center justify-between m-5 md:space-x-10">
        <Image 
        src={logo}
        alt="netflix"
        width={100}
        height={100}
        priority
        className="cursor-pointer object-contain w-auto h-auto"/>

      <div className="flex items-center space-x-4 text-sm font-light  ">
            <ul className="hidden space-x-4 md:flex">
                  <li className="headerLink">Home</li>
                  <li className="headerLink">Tv Shows</li>
                  <li className="headerLink">Movie</li>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">My List</li>
              </ul>
              <button className="w-20 h-7 border px-2 py-1 rounded">connect</button>

         </div>
      </div>

    
    </header>
  )
}

export default Header
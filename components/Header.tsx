'use client'

import Image from "next/image"
import { FaBars } from "react-icons/fa6";
import ListStyle from "./ui-utils/ListStyle"
import localFont from 'next/font/local'
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

type ListStyle = {
  id:number
  name:string
  live:boolean
}[]


const Header = () => {
    const listStyleFromDataBase:ListStyle = [
      {id:0,name:'Creon Pass', live:false},
      {id:1,name:'Token', live:true},
      {id:2,name:'AI Revenue', live:true},
      {id:3,name:'AI Launchpad', live:true}
    ]

    
    const logo = new URL(`/public/img/logo.png`, import.meta.url).href
  

  return (
   <header className=" z-40" >

    <div className="flex items-center space-x-2 md:space-x-10 ">
      <Image 
      src={logo}
      alt="netflix"
      width={100}
      height={100}
      priority
      className="cursor-pointer object-contain w-auto h-auto"/>
     
    </div>

    <div className="flex items-center space-x-2 text-sm font-light ">
    
    <ul   className={`${satoshi.className} hidden space-x-20 md:flex lg:mr-20  `}>
          {listStyleFromDataBase.map((style)=>(
            <ListStyle key={style.id} title={style.name} comingSoon={style.live}/>
          ))}
    </ul>
      <button className="w-20 h-7 border px-3 py-0 rounded ">connect</button>
      <FaBars className=" lg:hidden w-7 h-7 bg-white text-black p-1 rounded" />
    </div>
    </header>
    
  )
}

export default Header
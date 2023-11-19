'use client'

import Image from "next/image"
import { FaBars } from "react-icons/fa6";
import ListStyle from "./ListStyle"

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
   <header  >

    <div className="flex items-center space-x-2 md:space-x-10 ">
      <Image 
      src={logo}
      alt="netflix"
      width={100}
      height={100}
      priority
      className="cursor-pointer object-contain w-auto h-auto"/>
     
    </div>

    <div className="flex items-center space-x-4 text-sm font-light ">
    
    <ul className="hidden space-x-28 md:flex lg:mr-24 ">
          {listStyleFromDataBase.map((style)=>(
            <ListStyle key={style.id} title={style.name} comingSoon={style.live}/>
          ))}
    </ul>
      <button className="w-20 h-7 border px-3 py-0 rounded ">connect</button>
      <FaBars className=" 2xl:hidden w-7 h-7 bg-white text-black p-1 rounded" />
    </div>
    </header>
    
  )
}

export default Header
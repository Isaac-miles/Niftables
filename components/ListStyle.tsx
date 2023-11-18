import React from 'react'

type Props ={
  title:string,
  comingSoon:boolean
}
export default function ListStyle({title,comingSoon}:Props) {

  return (
    
    <li className="headerLink ">
      {title}
     {comingSoon && <span className='absolute bottom-2 mx-2 uppercase text-center py-0 px-2 bg-black text-[#AB23FF] text-[10px] rounded-2xl border-transparent'>soon</span>}
     
    
    </li>
  )
}
// after:absolute after:left-1/2 after:bottom-1/2  after:block after:translate-x-[95%] 
// after:border-2 after:border-transparent after:content-["SOON"] after:rounded-2xl after:text-[#AB23FF]
//  after:bg-black after:text-[15px] after:px-2 after:mr-24
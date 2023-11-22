
import Link from "next/link"
import {VscMail} from "react-icons/vsc";

function MobileMenu() {

    return(
      <div className="fixed bg-black/50 w-full h-full z-20 left-0 top-0 justify-end">

            <button className="w-20 h-7 border px-3 py-0 rounded ">connect</button>

        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg flex flex-col gap-6">
          <button 
          className="bg-[#F49F37] text-md text-white py-2 px-4 rounded-lg"
       
          >
            Download Resume
          </button>
  
  
          <button 
          className="bg-[#F49F37] text-md text-white py-2 px-4 rounded-lg">
            <Link href={'mailto:davidisaacomokafe@gmail.com'}><li className='flex  gap-2  items-center text-sm'>
              <VscMail className='text-[#F49F37] text-2xl'/>Contact Me</li></Link> 
          </button>
        </div>
      </div>
    )
  
}

export default MobileMenu



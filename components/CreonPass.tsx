import localFont from 'next/font/local'
import Image from 'next/image'
import { listItems, writeUpsFromDb } from '@/util/statements'
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

function CreonPass() {

  const bgImage = new URL(`/public/img/Video.png`, import.meta.url).href
 
  return (
  <div className='creonPass'>

     <div className="group  md:-ml-2 bg-black px-10" >
    
        <div  className="flex flex-col items-start space-y-4  md:space-y-2.5 p-2 mb-6">
        <h1 className={`${monumentExtendedFont.className} bannerHeading  pb-10 border-x-0 border-b-2 border-[#13171d]`}>{writeUpsFromDb.creonTitle}</h1>
        <div className={`${satoshi.className} bannerParagraph bannerParagraphExtra w-[85%] pt-2 pl-0 `}>{writeUpsFromDb.creonStatement}</div> 
        </div>
         
         <ul className={`${satoshi.className} flex flex-col  w-[85%]  `}>
          {listItems.map((item, i)=>(
            <li key={i} className='bannerParagraph font-normal inline-block mb-2 rounded text-white p-2 border  border-[#13171d]'>
            {item}</li>
          ))} 
         </ul>

         <button  className={`${satoshi.className} creonBtn capitalize text-white text-center my-16 `}>Buy Creon Pass</button>

      </div> 

        <div className="group md:-ml-2 bg-black" >
            <div  className="flex flex-col  items-start space-y-4  md:space-y-2.5  md:p-2">
          
              <Image
              width={800}
              
              height={800}
              src={bgImage}
              alt="banner logo" 
              // objectFit="cover" 
              sizes="100%"
              priority/> 

            </div>
        </div> 
  
  </div>
  )
}

export default CreonPass
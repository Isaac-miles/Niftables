import localFont from 'next/font/local'
import Image from 'next/image'
import { listItems, writeUpsFromDb } from '@/util/statements'
import BasicAccordion from './Accordion'
import { accordionStatements } from '@/util/statements';
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

function CreonPass() {

  const bgImage = new URL(`/public/img/Video.png`, import.meta.url).href
  return (
  <div className='grid grid-cols-2 grid-flow-col gap-4 w-full content-center px-24 lg:px-16 nifxl:px-[80px] xlmd:px-2 pt-0 pb-4 bg-cyan-600 '>
      


  <div className="group  md:-ml-2 bg-black px-10" >
    
        <div  className="hidden 2xl:flex flex-col items-start space-y-4  md:space-y-2.5 p-2 mb-6">
        <h1 className={`${monumentExtendedFont.className} bannerHeading  pb-10 border-x-0 border-b-2 border-[#13171d]`}>{writeUpsFromDb.creonTitle}</h1>
        <div className={`${satoshi.className} bannerParagraph bannerParagraphExtra w-[85%] pt-2 pl-0 `}>{writeUpsFromDb.creonStatement}</div> 
        </div>
         
         <ul className={`${satoshi.className} hidden 2xl:inline  w-[85%]  `}>
          {listItems.map((item, i)=>(
            <li key={i} className='bannerParagraph font-normal inline-block mb-2 rounded text-white p-2 border  border-[#13171d]'>
            {item}</li>
          ))} 
         </ul>

         <button  className={`${satoshi.className} hidden 2xl:inline creonBtn capitalize text-white text-center my-16 `}>Buy Creon Pass</button>

        <div  className=" 2xl:hidden flex-col lg:w-[85%] xlmd:w-full items-start space-y-4  md:space-y-2.5 pl-0 md:pt-2 ">
            <h2 className={`${monumentExtendedFont.className} missionStatement `}>
              {writeUpsFromDb.missionStatement}
              <span className='missionStatementSub'>{writeUpsFromDb.missionSubStatement}</span>
            </h2>

            <div  className="bgimg relative w-[628px] h-[351px] -top-4 flex-shrink-0 ">
              <div className='w-full h-[351px] bg-gradient-to-r'>
        
              </div>
            </div>
       
        </div>
        
  </div> 

        <div className="group  md:-ml-2 bg-black" >
        <div  className="hidden 2xl:flex flex-col items-start space-y-4  md:space-y-2.5  md:p-2">
          
              <Image
              width={800}
              
              height={800}
              src={bgImage}
              alt="banner logo" 
              // objectFit="cover" 
              sizes="100%"
              priority/> 

              </div>
        <div  className="flex 2xl:hidden flex-col items-start space-y-4  md:space-y-2.5  md:p-2">
            {accordionStatements.map((accordion,index)=>(
              <BasicAccordion  key={index}  title={accordion.title} summary={accordion.summary} logoTitle={accordion.logoTitle}/>
            ))}
          
              </div>
        </div> 
  
  </div>
  )
}

export default CreonPass
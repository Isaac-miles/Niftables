import localFont from 'next/font/local'
import { writeUpsFromDb } from '@/util/statements'
import BasicAccordion from './Accordion'
import { accordionStatements } from '@/util/statements';
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})

function MissionStatement() {

  const bgImage = new URL(`/public/img/Video.png`, import.meta.url).href
  return (
  <div className='grid grid-cols-1 md:grid-cols-1 nifxl:grid-cols-2 lg:grid-cols-2  w-full content-center px-24 lg:px-16 nifxl:px-[80px] xlmd:px-2 pt-0 pb-4 bg-black'>
    <div className="group  md:-ml-2 bg-black px-10" >
          <div  className="flex flex-col lg:w-[85%] xlmd:w-full items-start space-y-4  md:space-y-2.5 pl-0 md:pt-2 ">
              <h2 className={`${monumentExtendedFont.className} missionStatement md:pb-4 md:pt-0 xlmd:pt-0`}>
                {writeUpsFromDb.missionStatement}
                <span className='missionStatementSub'>{writeUpsFromDb.missionSubStatement}</span>
              </h2>

              <div 
               className="bgimg relative w-[428px] h-[251px]  md:hidden lg:inline lg:w-[628px] lg:h-[351px] -top-4 left-20 xsm:-left-20 xsm:w-[400px]  lg:left-0  flex-shrink-0 " > </div>
          </div>
      </div> 

        <div className="inline md:flex lg:inline lg:ml-0 md:ml-2 bg-black" >
   
        <div  className="sticky flex  flex-col items-start space-y-4  md:space-y-2.5 lg:w-full md:pl-2 md:w-[70%] z-10 ">
            {accordionStatements.map((accordion,index)=>(
              <BasicAccordion  key={index}  title={accordion.title} summary={accordion.summary} logoTitle={accordion.logoTitle}/>
            ))}
        </div>
          <div className='hidden md:inline bgimg relative w-[60%] h-[351px]  top-52  bg-contain  '>
          {/* <div  className="bgimg   lg:inline w-[40%] h-[351px]  flex-shrink-0 "></div> */}
          </div>
       

        </div> 
  
  </div>
  )
}

export default MissionStatement
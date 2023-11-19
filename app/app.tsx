import Banner from '@/components/Banner'
import Header from '@/components/Header'

function App() {


 const titleFromDb = {
    TitleForLargeScreen:"The world's first platform for Tokenizing AI blockchain projects",
    TitleForMediumScreen:"Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.",
    paragraphForLargeScreen:"Hold the Creon Pass NFT and earn passive income from AI Tools",
    paragraphForMediumScreen:"Creon «Create On» confidential AI Tools for granting access through NFTs."
 }
  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
    {/* <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'> */}
    <Header/>


    <main className='relative pl-4  mix-blend-mode: soft-light flex-shrink: 0; '>
    <Banner title={titleFromDb} image='image urls'/>
    </main  >
    </div>

   
  )
}

export default App
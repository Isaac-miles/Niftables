import Banner from '@/components/Banner'
import Header from '@/components/Header'

function App() {
  

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
    {/* <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'> */}
    <Header/>


    <main className='relative pl-4  mix-blend-mode: soft-light flex-shrink: 0; '>
    <Banner title="The world's first platform for Tokenizing AI blockchain projects" image='image urls'/>
    </main  >
    </div>

   
  )
}

export default App
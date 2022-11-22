import Header from './pages/header/Header'
import TitleHead from './pages/contents/Titlehead'
import Cardhiddegems from './pages/contents/CardHiddeGems'
import TopCollections from './pages/contents/TopCollections'
import CreateNft from './pages/contents/CreateNft'
import DiscoverFooter from './pages/contents/DiscoverFooter'


function App() {

  return (
    <>
      <section className="max-w-[1440px]   h-auto m-auto img-ball">

        <Header />

        <main className='w-full h-auto '>
        
          <TitleHead />

          <Cardhiddegems />
        
          <TopCollections />

          <CreateNft />
        </main>

        <footer className="w-full h-[1400px] footer-gradient">
          <DiscoverFooter />
        </footer>
      </section>
    </>
  )
}

export default App

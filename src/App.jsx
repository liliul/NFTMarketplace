import Header from './pages/header/Header'
import TitleHead from './pages/contents/Titlehead'
import Cardhiddegems from './pages/contents/CardHiddeGems'
import TopCollections from './pages/contents/TopCollections'


function App() {

  return (
    <>
      <section className="max-w-[1440px]   h-auto m-auto img-ball">

        <Header />

        <main className='w-full h-auto '>
        
          <TitleHead />

          <Cardhiddegems />
        
          <TopCollections />
        </main>
      </section>
    </>
  )
}

export default App

import './App.css'
import NotFound from './components/NotFound'
import Navbar from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-950">
      <NotFound />
      </div>
      <Footer />
    </>
  )
}

export default App

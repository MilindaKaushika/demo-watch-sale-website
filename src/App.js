
import { useEffect } from 'react'
import Aos from 'aos'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Services from './components/Services/Services'
import './app.css'
import Advertisement from './components/Advertisement/Advertisement';
import Brands from './components/Brands/Brands'
import Footer from './components/Footer/Footer'
import Backtotop from './components/Backtotop/Top'

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Shop />
      <Services />
      <Advertisement />
      <Brands />
      <Backtotop />
      <Footer />

    </div>
  );
}

export default App;

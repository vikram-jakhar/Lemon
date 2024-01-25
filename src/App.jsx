import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import About from './pages/About'
import BackToTop from './components/BAckToTop'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contant' element={<Footer/>} />
        <Route path='/blog' element={<Blog/>} />

      </Routes>
      <BackToTop />
      <Footer />
    </>
  )
}

export default App

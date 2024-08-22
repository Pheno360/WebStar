import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMore from './Components/AboutMore'
import Home from './Components/Home'
import ServicesComponent from './Components/ServicesComponent'
import Contact from './Components/Contact'
import ScrollToTop from './Components/ScrolltoTop'

function App() {

  return (
    <>
    <div className=' md:overflow-x-visible overflow-x-hidden'>
    <ScrollToTop />

   <Routes>
    <Route path="/about" element={<AboutMore/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/:id" element={<ServicesComponent/>}></Route>
   </Routes>

   </div>
    </>
  )
}

export default App

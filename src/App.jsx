import React from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import About from './pages/About'
import Faqs from './pages/Faqs'
import ContactUs from './pages/ContactUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

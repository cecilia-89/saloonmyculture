import Landing from '../pages/landing/landing'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Servicesitem from './components/ServicesItem/servicesitem'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/services/:id' element={<Servicesitem/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

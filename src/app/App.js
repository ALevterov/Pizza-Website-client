import './App.css'
import Navbar from './components/common/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PizzaPage from './pages/pizzaPage'
import MainPage from './pages/mainPage'
import Basket from './components/basket/basket'
import { useState } from 'react'
import DrinksPage from './pages/drinksPage'
import DessertsPage from './pages/dessertsPage'
import Footer from './components/common/footer'
import Auth from './pages/Auth'

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <BrowserRouter>
        <div className='page__container relative'>
          <Basket active={modalActive} setActive={setModalActive} />
          <Navbar setActive={setModalActive} />
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/pizza' element={<PizzaPage />}></Route>
            <Route path='/drinks' element={<DrinksPage />}></Route>
            <Route path='/desserts' element={<DessertsPage />}></Route>
            <Route path='/login' element={<Auth />}></Route>
            <Route path='/registration' element={<Auth />}></Route>
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

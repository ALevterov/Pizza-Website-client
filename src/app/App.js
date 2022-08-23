import './App.css'
import Navbar from './components/common/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PizzaPage from './pages/pizzaPage'
import MainPage from './pages/mainPage'
import Basket from './components/basket/basket'
import { useState } from 'react'
import ProductPage from './pages/productPage'

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Basket active={modalActive} setActive={setModalActive} />
        <Navbar setActive={setModalActive} />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/pizza' element={<PizzaPage />}></Route>
          <Route path='/drinks' element={<ProductPage type='drinks' />}></Route>
          <Route
            path='/desserts'
            element={<ProductPage type='desserts' />}
          ></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

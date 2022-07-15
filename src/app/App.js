import './App.css'
import Navbar from './components/common/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PizzaPage from './pages/pizzaPage'
import DrinksPage from './pages/drinksPage'
import DessertPage from './pages/dessertPage'
import MainPage from './pages/mainPage'
import PizzaLoader from './components/hoc/pizzaLoader'
import Basket from './components/basket/basket'
import { useState } from 'react'

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Basket active={modalActive} setActive={setModalActive} />
        <Navbar setActive={setModalActive} />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route
            path='/pizza'
            element={
              <PizzaLoader>
                <PizzaPage />
              </PizzaLoader>
            }
          ></Route>
          <Route path='/drinks' element={<DrinksPage />}></Route>
          <Route path='/desserts' element={<DessertPage />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

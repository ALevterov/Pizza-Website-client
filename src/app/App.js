import './App.css'
import Navbar from './components/common/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PizzaPage from './pages/pizzaPage'
import DrinksPage from './pages/drinksPage'
import DessertPage from './pages/dessertPage'
import MainPage from './pages/mainPage'
import BasketPage from './pages/basketPage'
import PizzaLoader from './components/hoc/pizzaLoader'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
          <Route path='/basket' element={<BasketPage />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

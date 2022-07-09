import './App.css'
import Navbar from './components/common/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PizzaPage from './pages/pizzaPage'
import DrinksPage from './pages/drinksPage'
import DessertPage from './pages/dessertPage'
import MainPage from './pages/mainPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/pizza' element={<PizzaPage />}></Route>
          <Route path='/drinks' element={<DrinksPage />}></Route>
          <Route path='/desserts' element={<DessertPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/pizza'></Route>
          <Route path='/drinks'></Route>
          <Route path='/desserts'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          <img src={logo} alt='' width='30' height='24' />
          Супер пицца
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/pizza'>
                Пицца
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/drinks'>
                Напитки
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/desserts'>
                Десерты
              </NavLink>
            </li>
          </ul>
          <button className='btn btn-outline-primary' type='submit'>
            Войти
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

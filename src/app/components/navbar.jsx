import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-light'>
      <div class='container-fluid'>
        <Link class='navbar-brand' href='#'>
          <img src={logo} alt='' width='30' height='24' to='/' />
          Супер пицца
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <Link class='nav-link active' aria-current='page' to='/pizza'>
                Пицца
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/drinks'>
                Напитки
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link' to='/desserts'>
                Десерты
              </Link>
            </li>
          </ul>
          <button class='btn btn-outline-primary' type='submit'>
            Войти
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

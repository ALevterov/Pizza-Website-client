import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { getAllBasketProductsCount, getTotalPrice } from '../../store/basket'
import './navbar.css'
const Navbar = ({ setActive }) => {
  const totalProductsCount = useSelector(getAllBasketProductsCount())
  const totalPrice = useSelector(getTotalPrice())
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
          <div
            className='navbar__basket_btn'
            type='submit'
            onClick={() => setActive(true)}
          >
            <div>{`${totalPrice} ₽`}</div>
            <div className='navbar__svg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#fff'
                className='bi bi-cart2'
                viewBox='0 0 16 16'
              >
                <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
              </svg>
            </div>
            {totalProductsCount !== 0 && totalProductsCount}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

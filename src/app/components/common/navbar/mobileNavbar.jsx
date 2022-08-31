import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './mobileNavbar.css'
import './navbar.css'

const MobileNavbar = ({
  role,
  isAuth,
  totalPrice,
  totalProductsCount,
  activePage,
  setActive,
  setActivePage,
  logOut,
}) => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => {
    setMenuActive(prev => !prev)
  }
  const linkClickHandler = page => {
    setActivePage(page)
    setMenuActive(false)
  }
  const logOutHandler = () => {
    logOut()
    setMenuActive(false)
  }
  return (
    <div className='container mobile-container'>
      <nav className='navbar navbar-mobile relative'>
        <div className='navbar__brand'>
          {' '}
          <NavLink
            className='navbar__brand-link'
            to='/'
            onClick={() => linkClickHandler('main')}
          >
            Супер пицца
          </NavLink>
        </div>
        <div className='d-flex align-items-center'>
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
        <div className='burger-btn' onClick={() => toggleMenu()}>
          <span />
        </div>
        <main
          className={
            menuActive ? 'navbar__pages-mobile active' : 'navbar__pages-mobile'
          }
        >
          <ul className='navbar__pages_list'>
            <li className='navbar__pages_list-item'>
              <NavLink
                className={`navbar__pages_list-link ${
                  activePage === 'main' ? 'active' : ''
                }`}
                to='/'
                onClick={() => linkClickHandler('main')}
              >
                Главная
              </NavLink>
            </li>
            <li className='navbar__pages_list-item'>
              <NavLink
                className={`navbar__pages_list-link ${
                  activePage === 'pizza' ? 'active' : ''
                }`}
                to='/pizza'
                onClick={() => linkClickHandler('pizza')}
              >
                Пицца
              </NavLink>
            </li>
            <li className='navbar__pages_list-item'>
              <NavLink
                className={`navbar__pages_list-link ${
                  activePage === 'drinks' ? 'active' : ''
                }`}
                to='/drinks'
                onClick={() => linkClickHandler('drinks')}
              >
                Напитки
              </NavLink>
            </li>
            <li className='navbar__pages_list-item'>
              <NavLink
                className={`navbar__pages_list-link ${
                  activePage === 'desserts' ? 'active' : ''
                }`}
                to='/desserts'
                onClick={() => linkClickHandler('desserts')}
              >
                Десерты
              </NavLink>
            </li>
          </ul>
          <div className='navbar_btn-mobile'>
            {isAuth ? (
              role === 'ADMIN' ? (
                <>
                  <NavLink
                    className='navbar__sign-in_btn'
                    onClick={() => setMenuActive(false)}
                    to={'/admin'}
                  >
                    Админ панель
                  </NavLink>{' '}
                  |{' '}
                  <button
                    className='navbar__sign-in_btn'
                    onClick={() => logOutHandler()}
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='navbar__sign-in_btn'
                    onClick={() => logOutHandler()}
                  >
                    Выйти
                  </button>
                </>
              )
            ) : (
              <NavLink
                className='navbar__sign-in_btn'
                onClick={() => setMenuActive(false)}
                to={'/login'}
              >
                Войти
              </NavLink>
            )}
          </div>
        </main>
      </nav>
    </div>
  )
}

export default MobileNavbar

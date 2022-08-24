import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBasketProductsCount, getTotalPrice } from '../../store/basket'
import './navbar.css'
import { useRef, useState } from 'react'
import { clearUser, getUserAuthState, getUserRole } from '../../store/user'
const Navbar = ({ setActive }) => {
  const totalProductsCount = useSelector(getAllBasketProductsCount())
  const totalPrice = useSelector(getTotalPrice())
  const navbarRef = useRef(null)
  const [activePage, setActivePage] = useState(null)

  const isAuth = useSelector(getUserAuthState())
  const role = useSelector(getUserRole())
  window.addEventListener('scroll', () => {
    let ticking = false

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 150) {
          navbarRef.current?.classList.add('sticky')
          ticking = false
        } else {
          navbarRef.current?.classList.remove('sticky')
          ticking = false
        }
        ticking = true
      })
    }
  })
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(clearUser())
    localStorage.removeItem('access_token')
  }
  return (
    <div
      className='container-fluid navbar-shadow navbar__container'
      ref={navbarRef}
    >
      <div className='container'>
        <nav className='navbar d-flex justify-content-between flex-row align-items-center'>
          <div className='navbar__brand'>
            {' '}
            <NavLink
              className='navbar__brand-link'
              to='/'
              onClick={() => setActivePage('main')}
            >
              Супер пицца
            </NavLink>
          </div>
          <div className='navbar__pages'>
            <ul className='navbar__pages_list d-flex align-items-center'>
              <li className='navbar__pages_list-item'>
                <NavLink
                  className={`navbar__pages_list-link ${
                    activePage === 'main' ? 'active' : ''
                  }`}
                  to='/'
                  onClick={() => setActivePage('main')}
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
                  onClick={() => setActivePage('pizza')}
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
                  onClick={() => setActivePage('drinks')}
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
                  onClick={() => setActivePage('desserts')}
                >
                  Десерты
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='d-flex align-items-center'>
            {isAuth ? (
              role === 'ADMIN' ? (
                <>
                  <NavLink className='navbar__sign-in_btn' to={'/admin'}>
                    Админ панель
                  </NavLink>{' '}
                  |{' '}
                  <button
                    className='navbar__sign-in_btn'
                    onClick={() => logOut()}
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  <NavLink className='navbar__sign-in_btn' to={'/profile'}>
                    Профиль
                  </NavLink>{' '}
                  |{' '}
                  <button
                    className='navbar__sign-in_btn'
                    onClick={() => logOut()}
                  >
                    Выйти
                  </button>
                </>
              )
            ) : (
              <NavLink className='navbar__sign-in_btn' to={'/login'}>
                Войти
              </NavLink>
            )}
            <div
              className='navbar__basket_btn ms-3'
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
        </nav>
      </div>
    </div>
  )
}

export default Navbar

import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import basket from '../../assets/basket.svg'
import { useSelector } from 'react-redux'
import {
  getProductsCountFromBasket,
  getProductsFromBasket,
} from '../../store/basket'
import { getAllPizza, getPizzaById } from '../../store/pizza'
const Navbar = () => {
  // const countOfProducts = useSelector(getProductsCountFromBasket())
  // const products = useSelector(getProductsFromBasket())
  // const allPizza = useSelector(getAllPizza())
  // const pizzaInBasket = allPizza.filter(p => products.contain(p._id))
  // console.log(pizzaInBasket)
  // const getTotalPrice = () => {
  //   return pizzaInBasket.reduce((totalPrice, p)=> {
  // 		p
  // 	})
  // }
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
          <button
            className='navbar__basket-button'
            type='submit'
            style={{ backgroundColor: 'orange' }}
          >
            <div>{'1239 ₽'}</div>
            <div className='navbar__svg'>
              <svg
                version='1.1'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='#fff' data-name='1'>
                  <path d='M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z' />
                  <path d='M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z' />
                  <path d='m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1-57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0-27.48-27.47z' />
                  <path d='M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z' />
                </g>
              </svg>{' '}
              {' 5'}
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

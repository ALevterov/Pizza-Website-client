import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  getAllBasketProductsCount,
  getProductsFromBasket,
  getTotalPrice,
} from '../../store/basket'
import './basket.css'
import emptyBasket from '../../assets/empty-basket.svg'
import BasketItem from './basketItem'

const EmptyBasket = () => {
  return (
    <div className='modal__basket_empty h-100'>
      <div className='p-4 d-flex justify-content-center align-items-center flex-column text-center h-100'>
        <img
          src={emptyBasket}
          alt='empty basket'
          style={{ width: '308px', height: 'auto' }}
        />
        <h4 className='mt-4'>Корзина пустая!</h4>
        <div className='modal__basket_empty_text m-2 px-3'>
          Ваша корзина пуста, выберите понравившийся товар и добавьте в корзину.
          Мы доставим ваш заказ бесплатно от 700 ₽.
        </div>
        <button className='navbar__basket_btn mt-1'>Вернуться в меню</button>
      </div>
    </div>
  )
}

const Basket = ({ active, setActive }) => {
  const productCount = useSelector(getAllBasketProductsCount())
  const totalPrice = useSelector(getTotalPrice())
  const products = useSelector(getProductsFromBasket())
  useEffect(() => {
    if (!active) {
      document.body.style.overflow = 'auto'
      shadeRef.current.classList.remove('active')
      basketRef.current.classList.remove('active')
      setTimeout(() => {
        shadeRef.current.classList.add('none')
        basketRef.current.classList.add('none')
      }, 300)
    } else {
      document.body.style.overflow = 'hidden'
      shadeRef.current.classList.remove('none')
      basketRef.current.classList.remove('none')
      setTimeout(() => {
        shadeRef.current.classList.add('active')
        basketRef.current.classList.add('active')
      }, 0)
    }
  }, [active])
  const shadeRef = useRef()
  const basketRef = useRef()

  const transformTitle = num => {
    if (num === 1) {
      return num + ' товар'
    }
    if (num > 1 && num < 5) {
      return num + ' товара'
    }
    return num + ' товаров'
  }
  return (
    <div className='modal__window'>
      <div
        ref={shadeRef}
        className='modal__shade'
        onClick={() => setActive(false)}
      ></div>
      <div ref={basketRef} className='modal__basket'>
        {+productCount !== 0 ? (
          <div>
            <section className='section'>
              <h3 className='basket__title'>
                {transformTitle(productCount) + ` на ${totalPrice} ₽`}
              </h3>
            </section>
            <section className='basket__products'>
              {Object.keys(products).map(id => {
                const array = products[id]
                return array.map((prod, i) => {
                  return (
                    <BasketItem
                      key={prod._id + '_' + i}
                      basketId={prod._basketId}
                      prodId={prod._id}
                    />
                  )
                })
              })}
            </section>
          </div>
        ) : (
          <EmptyBasket />
        )}
      </div>
    </div>
  )
}

export default Basket

import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  getAllBasketProductsCount,
  getProductsFromBasket,
  getTotalPrice,
} from '../../store/basket'
import './basket.css'
import BasketItem from './basketItem'
import BasketFooter from './basketFooter'
import EmptyBasket from './emptyBasket'
import transformTitle from '../../utils/transformTitle'

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

  return (
    <div
      className='modal__window'
      style={{
        zIndex: 10000,
      }}
    >
      <div
        ref={shadeRef}
        className='modal__shade'
        onClick={() => setActive(false)}
      >
        {' '}
        <button className='btn_close'>
          <svg width='25' height='25' viewBox='0 0 25 25' fill='#fff'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
              fill='#fff'
            ></path>
          </svg>
        </button>
      </div>
      <div ref={basketRef} className='modal__basket'>
        {+productCount !== 0 ? (
          <>
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
            <BasketFooter productCount={productCount} totalPrice={totalPrice} />
          </>
        ) : (
          <EmptyBasket setActive={setActive} />
        )}
      </div>
    </div>
  )
}

export default Basket

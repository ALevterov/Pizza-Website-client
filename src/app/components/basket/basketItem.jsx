import {
  DOUGH_THICK,
  DOUGH_THIN,
  PIZZA_LARGE_SIZE,
  PIZZA_MEDIUM_SIZE,
  PIZZA_SMALL_SIZE,
  PRODUCT_PIZZA,
} from '../../utils/consts'
import { useSelector, useDispatch } from 'react-redux'
import {
  addProductToBasket,
  deleteProductFromBasket,
  getProductByTwoId,
} from '../../store/basket'
const getPizzaDescription = ({ size, dough }) => {
  let result = ''
  if (size === PIZZA_LARGE_SIZE) {
    result = 'Большая 35 см,'
  }
  if (size === PIZZA_MEDIUM_SIZE) {
    result = 'Средняя 30 см,'
  }
  if (size === PIZZA_SMALL_SIZE) {
    result = 'Маленькая 25 см,'
  }
  if (dough === DOUGH_THICK) {
    result += ' традиционное тесто'
  }
  if (dough === DOUGH_THIN) {
    result += ' тонкое тесто'
  }
  return result
}

const BasketItem = ({ basketId, prodId }) => {
  const { title, count, image, selected, type, sizes } = useSelector(
    getProductByTwoId(prodId, basketId)
  )
  const price = +sizes[selected.size].price * +count

  const dispatch = useDispatch()

  const addOne = () => {
    dispatch(addProductToBasket({ type, selected, _id: prodId }))
  }

  const deleteOne = (remove = false) => {
    dispatch(deleteProductFromBasket({ type, selected, _id: prodId, remove }))
  }

  return (
    <div className='basket__item'>
      <div className='basket__item_top d-flex'>
        <div className='basket__item_image'>
          <img
            src={image}
            alt='pizza'
            style={{ width: '60px', height: '60px' }}
          />
        </div>
        <div className='basket__item_description flex-grow-1 ms-2'>
          <div className='basket__item_description_title d-flex justify-content-between align-items-center'>
            <h4 className='basket__item_description_title_text m-0'>{title}</h4>{' '}
            <button
              className='basket__btn_close d-flex align-items-center justify-content-center'
              onClick={() => deleteOne(true)}
            >
              <svg fill='#fff' viewBox='0 0 24 24'>
                <path
                  d='M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z'
                  fill='#000'
                ></path>
              </svg>
            </button>
          </div>
          <span className='basket__item_description_text'>
            {type === PRODUCT_PIZZA ? getPizzaDescription(selected) : 'другое'}
          </span>
        </div>
      </div>
      <div className='basket__item_bottom d-flex justify-content-between align-items-center'>
        <div className='basket__item_bottom_total-price'>{`${price} ₽`}</div>
        <div className='basket__item_bottom_btn_section d-flex justify-content-center align-items-center'>
          <button onClick={() => deleteOne()}>
            <svg width='10' height='10' viewBox='0 0 10 10' className='icon'>
              <rect fill='#5c6370' y='4' width='10' height='2' rx='1'></rect>
            </svg>
          </button>
          <div style={{ marginBottom: '-3px' }}>{count}</div>
          <button onClick={() => addOne()}>
            <svg width='10' height='10' viewBox='0 0 10 10' className='icon'>
              <g fill='#5c6370'>
                <rect x='4' width='2' height='10' ry='1'></rect>
                <rect y='4' width='10' height='2' rx='1'></rect>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BasketItem

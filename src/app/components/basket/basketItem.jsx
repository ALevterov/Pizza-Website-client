import {
  DOUGH_THICK,
  DOUGH_THIN,
  PIZZA_LARGE_SIZE,
  PIZZA_MEDIUM_SIZE,
  PIZZA_SMALL_SIZE,
  PRODUCT_PIZZA,
} from '../../utils/consts'

const BasketItem = ({ title, count, image, selected, type }) => {
  console.log({ title, count, image, selected, type })
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
  return (
    <div className='basket__item d-flex'>
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
          <button className='basket__btn_close d-flex align-items-center justify-content-center'>
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
  )
}

export default BasketItem

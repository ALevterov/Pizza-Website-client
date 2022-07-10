import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket, getTotalProductCount } from '../../store/basket'
import { getPizzaById } from '../../store/pizza'
import PizzaOptionsBlock from './pizzaOptionsBlock'

const PizzaCard = ({
  title,
  description,
  image,
  sizes,
  dough,
  _id,
  selected,
}) => {
  const dispatch = useDispatch()
  const pizza = useSelector(getPizzaById(_id))
  const [count, setCount] = useState(useSelector(getTotalProductCount()))

  const handleAdd = () => {
    dispatch(addProductToBasket({ ...pizza, count: 1 }))
    setCount(count + 1)
  }

  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card border-0' style={{ width: '90%', height: '100%' }}>
        <img src={image} className='card-img-top' alt='img' />
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            {' '}
            <h5 className='card-title fs-5 roboto-sb'>{title}</h5>
            <p className='card-text roboto-l fs-09'>{description}</p>
          </div>
          <div>
            <PizzaOptionsBlock
              sizes={sizes}
              dough={dough}
              _id={_id}
              selected={selected}
            />
            <div className='d-flex justify-content-between mt-3 align-items-center'>
              <div
                className='pizza-card__price price'
                style={{ color: 'black' }}
              >
                {sizes[selected.size].price + ' ₽'}
              </div>
              <div className='pizza-card__basket-button '>
                <button className='add__product-btn' onClick={handleAdd}>
                  <b>+</b>Добавить{count !== 0 && <span>{count}</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard

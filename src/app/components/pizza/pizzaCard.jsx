import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket, getProductCount } from '../../store/basket'
import { getPizzaById } from '../../store/pizza'
import PizzaOptionsBlock from './pizzaOptionsBlock'
import { bufferToImage } from '../../utils/bufferToImage'
import './pizzaCard.css'
import { getUserRole } from '../../store/user'
import { ADMIN } from '../../utils/consts'
import EditItem from '../admin/editItem'
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
  const count = useSelector(getProductCount(_id))

  const handleAdd = () => {
    dispatch(addProductToBasket({ ...pizza, count: 1 }))
  }
  const role = useSelector(getUserRole())

  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div
        className='card border-0 position-relative'
        style={{ width: '90%', height: '100%' }}
      >
        {role === ADMIN && <EditItem id={_id} />}
        <img
          src={bufferToImage(image)}
          className='card-img-top product-img'
          alt='img'
        />
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
                className='pizza__card_price price'
                style={{ color: 'black' }}
              >
                {sizes[selected.size].price + ' ₽'}
              </div>
              <div className='pizza__card_basket_btn '>
                <button className='product__btn_add' onClick={handleAdd}>
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

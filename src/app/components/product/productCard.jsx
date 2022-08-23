import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket, getProductCount } from '../../store/basket'
import { getProductById } from '../../store/product'
import { bufferToImage } from '../../utils/bufferToImage'

const ProductCard = ({ title, description, image, price, _id, type }) => {
  const product = useSelector(getProductById({ _id, type }))
  const count = useSelector(getProductCount(_id))
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(addProductToBasket({ ...product, count: 1 }))
  }
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card border-0' style={{ width: '90%', height: '100%' }}>
        <img src={bufferToImage(image)} className='card-img-top' alt='img' />
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            {' '}
            <h5 className='card-title fs-5 roboto-sb'>{title}</h5>
            <p className='card-text roboto-l fs-09'>{description}</p>
          </div>
          <div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
              <div
                className='pizza__card_price price'
                style={{ color: 'black' }}
              >
                {price + ' ₽'}
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

export default ProductCard

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePizzaData, createPizza } from '../../http/pizzaApi'
import { changeProductData, createProduct } from '../../http/productApi'
import { changePizza } from '../../store/pizza'
import { getUserRole } from '../../store/user'
import {
  ADMIN,
  DOUGH_THICK,
  DOUGH_THIN,
  PIZZA_MEDIUM_SIZE,
  PRODUCT_PIZZA,
} from '../../utils/consts'
import EditPizzaForm from './EditPizzaForm'
import EditProductForm from './EditProductForm'

const AdminPage = () => {
  const [itemType, setItemType] = useState(null)
  const [url, setUrl] = useState(null)
  const [productType, setproductType] = useState(null)
  const role = useSelector(getUserRole())
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const pizzaInitialState = {
    sizes: {
      small: {
        diametr: 'diametr',
        price: 'price',
      },
      medium: {
        diametr: 'diametr',
        price: 'price',
      },
      large: {
        diametr: 'diametr',
        price: 'price',
      },
    },
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_MEDIUM_SIZE,
      dough: DOUGH_THIN,
    },
    features: [],
  }
  const [pizzaItem, setPizzaItem] = useState(pizzaInitialState)
  const [productItem, setProductItem] = useState({})
  useEffect(() => {
    if (role !== ADMIN) {
      navigate(`/`)
    }
  }, [])
  const onInputChange = ({ target }) => {
    const { name, value } = target
    const size = name.split('_')[0]
    const selector = name.split('_')[1]
    console.log(size, selector)
    if (itemType === PRODUCT_PIZZA) {
      if (name === 'features') {
        return setPizzaItem(prevState => ({
          ...prevState,
          [name]: value.split(' '),
        }))
      }
      if (size === 'small' || size === 'medium' || size === 'large') {
        return setPizzaItem(prevState => ({
          ...prevState,
          sizes: {
            ...prevState.sizes,
            [size]: { ...prevState.sizes[size], [selector]: value },
          },
        }))
      }
      if (name === 'image') {
        const file = target.files[0]
        setPizzaItem(prevState => ({ ...prevState, [name]: file }))
        return setUrl(URL.createObjectURL(file))
      }
      setPizzaItem(prevState => ({ ...prevState, [name]: value }))
    } else {
      if (name === 'image') {
        const file = target.files[0]
        setProductItem(prevState => ({ ...prevState, [name]: file }))
        return setUrl(URL.createObjectURL(file))
      }
      setProductItem(prevState => ({ ...prevState, [name]: value }))
    }
  }

  const onSave = async ({ productType }) => {
    try {
      if (productType === PRODUCT_PIZZA) {
        const { data } = await createPizza({
          data: { ...pizzaItem, image: url ? pizzaItem.image : null },
        })
        dispatch(changePizza(data))
      } else {
        await createProduct({
          data: { ...productItem, image: url ? productItem.image : null },
          type: productItem.type,
        })
      }
      alert('Продукт успешно создан')
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <div
          className='card mt-5 p-3 px-4 mb-5'
          style={{
            width: '600px',
          }}
        >
          <div className='d-flex justify-content-between mt-3 mb-3'>
            <button
              className='product__btn_add'
              style={{
                padding: '10px 20px',
                fontSize: '16px',
              }}
              onClick={() => setItemType('pizza')}
            >
              Добавить Пиццу
            </button>
            <button
              className='btn_cancel'
              onClick={() => setItemType('product')}
            >
              Добавить Продукт
            </button>
          </div>
          {itemType && (
            <>
              {itemType === PRODUCT_PIZZA ? (
                pizzaItem && (
                  <EditPizzaForm
                    onSave={onSave}
                    onInputChange={onInputChange}
                    url={url}
                    item={pizzaItem}
                    type={'pizza'}
                  />
                )
              ) : (
                <EditProductForm
                  onSave={onSave}
                  onInputChange={onInputChange}
                  url={url}
                  item={productItem}
                  type={productType}
                >
                  <select
                    className='form-select'
                    onChange={e => onInputChange(e)}
                    name='type'
                  >
                    <option name='type' value='drinks'>
                      Напитки
                    </option>
                    <option name='type' value='desserts'>
                      Десерты
                    </option>
                  </select>
                </EditProductForm>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPage

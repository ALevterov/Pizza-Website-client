import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { changePizzaData, removePizza } from '../../http/pizzaApi'
import { changeProductData, removeProduct } from '../../http/productApi'
import { changePizza, getPizzaById } from '../../store/pizza'
import { getProductById } from '../../store/product'
import { getUserRole } from '../../store/user'
import { bufferToImage } from '../../utils/bufferToImage'
import { ADMIN, PRODUCT_PIZZA } from '../../utils/consts'
import EditPizzaForm from './EditPizzaForm'
import EditProductForm from './EditProductForm'

const EditItemPage = ({ type }) => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const role = useSelector(getUserRole())

  let { id } = params
  let pizza = useSelector(getPizzaById(id))
  let product = useSelector(getProductById({ type, _id: id }))

  useEffect(() => {
    if (role !== ADMIN) {
      navigate(`/${type}`)
    }
  }, [])

  const [item, setItem] = useState(pizza || product)
  const [url, setUrl] = useState(null)
  const onInputChange = ({ target }) => {
    const { name, value } = target
    const size = name.split('_')[0]
    const selector = name.split('_')[1]

    if (type === PRODUCT_PIZZA) {
      if (name === 'features') {
        return setItem(prevState => ({
          ...prevState,
          [name]: value.split(' '),
        }))
      }
      if (size === 'small' || size === 'medium' || size === 'large') {
        return setItem(prevState => ({
          ...prevState,
          sizes: {
            ...prevState.sizes,
            [size]: { ...prevState.sizes[size], [selector]: value },
          },
        }))
      }
      if (name === 'image') {
        const file = target.files[0]
        setItem(prevState => ({ ...prevState, [name]: file }))
        return setUrl(URL.createObjectURL(file))
      }
      setItem(prevState => ({ ...prevState, [name]: value }))
    } else {
      if (name === 'image') {
        const file = target.files[0]
        setItem(prevState => ({ ...prevState, [name]: file }))
        return setUrl(URL.createObjectURL(file))
      }
      setItem(prevState => ({ ...prevState, [name]: value }))
    }
  }

  const onSave = async () => {
    try {
      if (type === PRODUCT_PIZZA) {
        const { data } = await changePizzaData({
          data: { ...item, image: url ? item.image : null },
        })
        dispatch(changePizza(data))
      } else {
        const { data } = await changeProductData({
          data: { ...item, image: url ? item.image : null },
          type,
        })
      }
      alert('Продукт успешно изменен')
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  const onDelete = async () => {
    try {
      if (type === PRODUCT_PIZZA) {
        await removePizza({ id })
        navigate(`/${type}`)
      } else {
        await removeProduct({ id, type })
        navigate(`/${type}`)
      }
    } catch (error) {
      alert(error.message)
      console.log(error)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div
        className='card mt-5 p-3 px-4 mb-5'
        style={{
          width: '600px',
        }}
      >
        {type === PRODUCT_PIZZA && item ? (
          <EditPizzaForm
            onSave={onSave}
            onInputChange={onInputChange}
            item={item}
            url={url}
            type={type}
            onDelete={onDelete}
          />
        ) : (
          item && (
            <EditProductForm
              onSave={onSave}
              onInputChange={onInputChange}
              item={item}
              url={url}
              type={type}
              onDelete={onDelete}
            />
          )
        )}
      </div>
    </div>
  )
}

export default EditItemPage

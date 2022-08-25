import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { changePizzaData } from '../../http/pizzaApi'
import { changePizza, getPizzaById } from '../../store/pizza'
import { getProductById } from '../../store/product'
import { getUserRole } from '../../store/user'
import { bufferToImage } from '../../utils/bufferToImage'
import { ADMIN } from '../../utils/consts'

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
  console.log(id, pizza)
  const [url, setUrl] = useState(null)
  const onInputChange = ({ target }) => {
    const { name, value } = target
    if (name === 'features') {
      return setItem(prevState => ({ ...prevState, [name]: value.split(' ') }))
    }
    if (name === 'small' || name === 'medium' || name === 'large') {
      return setItem(prevState => ({
        ...prevState,
        sizes: {
          ...prevState.sizes,
          [name]: { diametr: value.split(' ')[0], price: value.split(' ')[1] },
        },
      }))
    }
    if (name === 'image') {
      const file = target.files[0]
      setItem(prevState => ({ ...prevState, [name]: file }))
      return setUrl(URL.createObjectURL(file))
    }
    setItem(prevState => ({ ...prevState, [name]: value }))
  }
  const onSave = async () => {
    try {
      const { data } = await changePizzaData({
        data: { ...item, image: url ? item.image : null },
        id,
      })
      dispatch(changePizza(data))
      alert('Продукт успешно изменен')
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  const EditPizzaForm = () => {
    return (
      <form className='d-flex flex-column' onSubmit={e => e.preventDefault()}>
        <h2 className='mt-1 text-center'>Редактировать товар</h2>
        <label for='description' className='form-label mt-3'>
          Описание
        </label>
        <input
          className='form-control'
          type='text'
          name='description'
          id='description'
          value={item.description}
          onChange={e => onInputChange(e)}
          key={1}
        />
        <label for='features' className='form-label mt-3'>
          Особенности
        </label>

        <input
          className='form-control'
          type='text'
          name='features'
          id='features'
          value={item.features.join(' ')}
          onChange={e => onInputChange(e)}
          key={2}
        />
        <label for='image' className='form-label mt-3'>
          Изображение
        </label>

        <input
          type='file'
          className='form-control'
          onChange={e => onInputChange(e)}
          name='image'
          id='image'
        />
        {url ? (
          <img className='mt-3' src={url} alt='картинка' />
        ) : (
          <img
            className='mt-3'
            src={bufferToImage(item.image)}
            alt='картинка'
          />
        )}
        <label for='small' className='form-label mt-3'>
          Маленький размер
        </label>

        <input
          className='form-control'
          type='text'
          name='small'
          id='small'
          value={item.sizes.small.diametr + ' ' + item.sizes.small.price}
          onChange={e => onInputChange(e)}
          key={3}
        />
        <label for='medium' className='form-label mt-3'>
          Средний размер
        </label>

        <input
          className='form-control'
          type='text'
          name='medium'
          id='medium'
          value={item.sizes.medium.diametr + ' ' + item.sizes.medium.price}
          onChange={e => onInputChange(e)}
          key={4}
        />
        <label for='large' className='form-label mt-3'>
          Большой размер
        </label>

        <input
          className='form-control'
          type='text'
          name='large'
          id='large'
          value={item.sizes.large.diametr + ' ' + item.sizes.large.price}
          onChange={e => onInputChange(e)}
          key={5}
        />
        <label for='title' className='form-label mt-3'>
          Заголовок
        </label>

        <input
          className='form-control'
          type='text'
          name='title'
          id='title'
          value={item.title}
          onChange={e => onInputChange(e)}
          key={6}
        />
        <div className='d-flex justify-content-between mt-3'>
          <button
            className='product__btn_add'
            style={{
              padding: '10px 20px',
              fontSize: '16px',
            }}
            onClick={() => onSave()}
          >
            Сохранить
          </button>
          <button className='btn_cancel' onClick={() => navigate(`/${type}`)}>
            Отменить
          </button>
        </div>
      </form>
    )
  }
  const EditProductForm = () => {
    return (
      <form className='d-flex flex-column' onSubmit={e => e.preventDefault()}>
        <h2 className='mt-1 text-center'>Редактировать товар</h2>

        <input
          className='form-control mt-3'
          type='text'
          name='description'
          value={item.description}
          onChange={e => onInputChange(e)}
          key={1}
        />
        <input
          className='form-control mt-3'
          type='text'
          name='features'
          value={item.features.join(' ')}
          onChange={e => onInputChange(e)}
          key={2}
        />
        <input
          type='file'
          className='form-control mt-3'
          onChange={e => onInputChange(e)}
          name='image'
        />
        {url ? (
          <img className='mt-3' src={url} alt='картинка' />
        ) : (
          <img
            className='mt-3'
            src={bufferToImage(item.image)}
            alt='картинка'
          />
        )}
        <input
          className='form-control mt-3'
          type='text'
          name='small'
          value={item.sizes.small.diametr + ' ' + item.sizes.small.price}
          onChange={e => onInputChange(e)}
          key={3}
        />
        <input
          className='form-control mt-3'
          type='text'
          name='medium'
          value={item.sizes.medium.diametr + ' ' + item.sizes.medium.price}
          onChange={e => onInputChange(e)}
          key={4}
        />
        <input
          className='form-control mt-3'
          type='text'
          name='large'
          value={item.sizes.large.diametr + ' ' + item.sizes.large.price}
          onChange={e => onInputChange(e)}
          key={5}
        />
        <input
          className='form-control mt-3'
          type='text'
          name='title'
          value={item.title}
          onChange={e => onInputChange(e)}
          key={6}
        />
        <div className='d-flex justify-content-between mt-3'>
          <button
            className='product__btn_add'
            style={{
              padding: '10px 20px',
              fontSize: '16px',
            }}
            onClick={() => onSave()}
          >
            Сохранить
          </button>
          <button className='btn_cancel' onClick={() => navigate(`/${type}`)}>
            Отменить
          </button>
        </div>
      </form>
    )
  }
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div
        className='card mt-5 p-3 px-4 mb-5'
        style={{
          width: '600px',
        }}
      >
        {type === 'pizza' && item ? EditPizzaForm() : ''}
      </div>
    </div>
  )
}

export default EditItemPage

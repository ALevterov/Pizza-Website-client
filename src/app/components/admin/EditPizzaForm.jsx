import { useNavigate } from 'react-router-dom'
import { bufferToImage } from '../../utils/bufferToImage'

const EditPizzaForm = ({
  onSave,
  onInputChange,
  item,
  url,
  type,
  onDelete,
}) => {
  const navigate = useNavigate()
  return (
    <form className='d-flex flex-column' onSubmit={e => e.preventDefault()}>
      <h2 className='mt-1 text-center'>Редактировать товар</h2>
      <label htmlFor='title' className='form-label mt-3'>
        Заголовок
      </label>

      <input
        className='form-control'
        type='text'
        name='title'
        id='title'
        value={item?.title || ''}
        onChange={e => onInputChange(e)}
        key={0}
      />
      <label htmlFor='description' className='form-label mt-3'>
        Описание
      </label>
      <input
        className='form-control'
        type='text'
        name='description'
        id='description'
        value={item?.description || ''}
        onChange={e => onInputChange(e)}
        key={1}
      />
      <label htmlFor='features' className='form-label mt-3'>
        Особенности
      </label>

      <input
        className='form-control'
        type='text'
        name='features'
        id='features'
        value={item?.features?.join(' ') || ''}
        onChange={e => onInputChange(e)}
        key={2}
      />
      <label htmlFor='image' className='form-label mt-3'>
        Изображение
      </label>

      <input
        type='file'
        className='form-control'
        onChange={e => onInputChange(e)}
        name='image'
        id='image'
        accept='image/*'
      />
      {url ? (
        <img className='mt-3' src={url} alt='картинка' />
      ) : (
        item?.image && (
          <img
            className='mt-3'
            src={bufferToImage(item.image)}
            alt='картинка'
          />
        )
      )}
      <label htmlFor='small_diametr' className='form-label mt-3'>
        Маленький размер - Диаметр
      </label>

      <input
        className='form-control'
        type='text'
        name='small_diametr'
        id='small_diametr'
        value={item.sizes.small.diametr}
        onChange={e => onInputChange(e)}
        key={3}
      />
      <label htmlFor='small_price' className='form-label mt-3'>
        Маленький размер - Цена
      </label>
      <input
        className='form-control'
        type='text'
        name='small_price'
        id='small_price'
        value={item.sizes.small.price}
        onChange={e => onInputChange(e)}
        key={4}
      />
      <label htmlFor='medium_diametr' className='form-label mt-5'>
        Средний размер - Диаметр
      </label>

      <input
        className='form-control'
        type='text'
        name='medium_diametr'
        id='medium_diametr'
        value={item.sizes.medium.diametr}
        onChange={e => onInputChange(e)}
        key={5}
      />
      <label htmlFor='medium_price' className='form-label mt-3'>
        Средний размер - Цена
      </label>
      <input
        className='form-control'
        type='text'
        name='medium_price'
        id='medium_price'
        value={item.sizes.medium.price}
        onChange={e => onInputChange(e)}
        key={6}
      />
      <label htmlFor='large_diametr' className='form-label mt-5'>
        Большой размер - Диаметр
      </label>

      <input
        className='form-control'
        type='text'
        name='large_diametr'
        id='large_diametr'
        value={item.sizes.large.diametr}
        onChange={e => onInputChange(e)}
        key={7}
      />
      <label htmlFor='large_price' className='form-label mt-3'>
        Большой размер - Цена
      </label>
      <input
        className='form-control'
        type='text'
        name='large_price'
        id='large_price'
        value={item.sizes.large.price}
        onChange={e => onInputChange(e)}
        key={8}
      />
      <div className='d-flex justify-content-between mt-3'>
        <button
          className='product__btn_add'
          style={{
            padding: '10px 20px',
            fontSize: '16px',
          }}
          onClick={() => onSave({ productType: type })}
        >
          Сохранить
        </button>
        {onDelete && (
          <button className='btn_delete' onClick={() => onDelete()}>
            Удалить
          </button>
        )}
        <button className='btn_cancel' onClick={() => navigate(`/${type}`)}>
          Назад
        </button>
      </div>
    </form>
  )
}

export default EditPizzaForm

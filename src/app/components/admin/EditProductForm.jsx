import { useNavigate } from 'react-router-dom'
import { bufferToImage } from '../../utils/bufferToImage'

const EditProductForm = ({
  onSave,
  onInputChange,
  item,
  url,
  type,
  children,
  onDelete,
}) => {
  const navigate = useNavigate()
  return (
    <form className='d-flex flex-column' onSubmit={e => e.preventDefault()}>
      <h2 className='mt-1 text-center'>Редактировать товар</h2>
      {children}
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
        key={11}
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
        key={12}
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
      <label htmlFor='price' className='form-label mt-3'>
        Цена
      </label>
      <input
        className='form-control'
        type='text'
        name='price'
        id='price'
        value={item?.price || ''}
        onChange={e => onInputChange(e)}
        key={13}
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

export default EditProductForm

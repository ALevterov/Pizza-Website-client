import emptyBasket from '../../assets/emptyBasket.svg'
const EmptyBasket = ({ setActive }) => {
  return (
    <div className='modal__basket_empty h-100'>
      <div className='p-4 d-flex justify-content-center align-items-center flex-column text-center h-100'>
        <img src={emptyBasket} alt='empty basket' className='empty_image' />
        <h4 className='mt-4'>Корзина пустая!</h4>
        <div className='modal__basket_empty_text m-2 px-3'>
          Ваша корзина пуста, выберите понравившийся товар и добавьте в корзину.
          Мы доставим ваш заказ бесплатно от 700 ₽.
        </div>
        <button
          className='navbar__basket_btn mt-1'
          onClick={() => setActive(false)}
        >
          Вернуться в меню
        </button>
      </div>
    </div>
  )
}

export default EmptyBasket

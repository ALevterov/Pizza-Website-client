const BasketFooter = ({ productCount, totalPrice }) => {
  return (
    <section className='basket__footer d-flex flex-column'>
      <div className='basket__footer_total flex-column'>
        <div className='basket__footer_total_block d-flex justify-content-between'>
          <div className='basket__footer_total_block_left'>
            {`${productCount} товар`}
          </div>
          <div className='basket__footer_total_block_right'>
            {`${totalPrice} ₽`}
          </div>
        </div>
        <div className='basket__footer_block_delivery d-flex justify-content-between'>
          <div className='basket__footer_total_block_left'>Доставка</div>
          <div className='basket__footer_total_block_right'>
            {+totalPrice >= 700 ? 'бесплатно' : '150 ₽'}
          </div>
        </div>
      </div>
      <div className='basket__footer_sum '>
        <div className='basket__footer_sum_block'>
          <div className='basket__footer_sum_block_left'>Сумма заказа</div>
          <div className='basket__footer_sum_block_right'>
            {`${totalPrice >= 700 ? totalPrice : totalPrice + 150} ₽`}
          </div>
        </div>
      </div>
      <button className='btn_accent position-relative'>
        К оформлению заказа
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='button-arrow'
        >
          <path
            d='M10 18l6-6-6-6'
            stroke='#fff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </button>
    </section>
  )
}

export default BasketFooter

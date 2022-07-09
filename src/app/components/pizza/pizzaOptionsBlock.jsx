import ProductButton from '../productButton'

const PizzaOptionsBlock = () => {
  return (
    <div
      className='d-flex flex-column p-04'
      style={{ backgroundColor: '#F3F3F3', borderRadius: '10px' }}
    >
      <div className='d-flex justify-content-between mb-1'>
        <ProductButton text='тонкое' selected={true} />
        <ProductButton text='традиционное' />
      </div>
      <div className='d-flex justify-content-between'>
        <ProductButton text='25 см.' selected={true} />
        <ProductButton text='30 см.' />
        <ProductButton text='35 см.' />
      </div>
    </div>
  )
}

export default PizzaOptionsBlock

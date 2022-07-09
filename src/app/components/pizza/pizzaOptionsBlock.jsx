import ProductButton from '../productButton'

const PizzaOptionsBlock = ({ dough, sizes, _id }) => {
  console.log({ dough, sizes, _id })
  return (
    <div
      className='d-flex flex-column mt-3'
      style={{
        backgroundColor: '#F3F3F3',
        borderRadius: '10px',
        padding: '0.4rem 0.4rem 0.4rem 0',
      }}
    >
      <div className='d-flex justify-content-between mb-1'>
        <ProductButton text='тонкое' dough={dough} type={dough.thin} />
        <ProductButton text='традиционное' dough={dough} type={dough.thick} />
      </div>
      <div className='d-flex justify-content-between'>
        <ProductButton text='25 см.' sizes={sizes} size='small' id={_id} />
        <ProductButton text='30 см.' ssizes={sizes} size='medium' id={_id} />
        <ProductButton text='35 см.' sizes={sizes} size='large' id={_id} />
      </div>
    </div>
  )
}

export default PizzaOptionsBlock

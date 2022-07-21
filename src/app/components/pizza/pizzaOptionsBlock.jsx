import {
  DOUGH_THIN,
  DOUGH_THICK,
  PIZZA_LARGE_SIZE,
  PIZZA_MEDIUM_SIZE,
  PIZZA_SMALL_SIZE,
} from '../../utils/consts'
import ProductButton from '../buttons/productBtn'

const PizzaOptionsBlock = ({ dough, sizes, _id, selected }) => {
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
        <ProductButton
          text='тонкое'
          dough={dough}
          type={DOUGH_THIN}
          selected={selected}
          _id={_id}
        />
        <ProductButton
          text='традиционное'
          dough={dough}
          type={DOUGH_THICK}
          selected={selected}
          _id={_id}
        />
      </div>
      <div className='d-flex justify-content-between'>
        <ProductButton
          text='25 см.'
          sizes={sizes}
          size={PIZZA_SMALL_SIZE}
          id={_id}
          selected={selected}
          _id={_id}
        />
        <ProductButton
          text='30 см.'
          sizes={sizes}
          size={PIZZA_MEDIUM_SIZE}
          id={_id}
          selected={selected}
          _id={_id}
        />
        <ProductButton
          text='35 см.'
          sizes={sizes}
          size={PIZZA_LARGE_SIZE}
          id={_id}
          selected={selected}
          _id={_id}
        />
      </div>
    </div>
  )
}

export default PizzaOptionsBlock

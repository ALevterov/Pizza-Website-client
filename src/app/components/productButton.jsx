import { useDispatch } from 'react-redux'
import { updatePizza } from '../store/pizza'

const ProductButton = ({
  text,
  dough = null,
  type = null,
  sizes = null,
  size = null,
  selected,
  _id,
}) => {
  // console.log({ text, dough, type, sizes, size, selected })
  // console.log('ID!!!: ', _id)
  const classes = ['flex-grow-1', 'product-btn']
  const dispatch = useDispatch()

  const handleClick = () => {
    const newSelected = {
      size: size || selected.size,
      dough: type || selected.dough,
    }
    dispatch(updatePizza({ selected: newSelected, _id }))
  }

  if (dough) {
    if (type === selected.dough) {
      classes.push('active')
    }
  }
  if (sizes) {
    if (size === selected.size) {
      classes.push('active')
    }
  }
  return (
    <button className={classes.join(' ')} onClick={handleClick}>
      {text}
    </button>
  )
}

export default ProductButton

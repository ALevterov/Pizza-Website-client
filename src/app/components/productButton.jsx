import { useDispatch } from 'react-redux'
import { selectPizza } from '../store/pizza'

const ProductButton = ({
  text,
  dough = null,
  type = null,
  sizes = null,
  size = null,
  selected,
  _id,
}) => {
  const classes = ['flex-grow-1', 'product-btn']
  const dispatch = useDispatch()

  const handleClick = () => {
    const newSelected = {
      size: size || selected.size,
      dough: type || selected.dough,
    }
    dispatch(selectPizza({ selected: newSelected, _id }))
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

const ProductButton = ({ text, dough, type, sizes, size }) => {
  console.log({ text, dough, type, sizes, size })
  const classes = ['flex-grow-1', 'product-btn']

  if (dough) {
    if (type.selected) {
      classes.push('active')
    }
  }
  if (sizes) {
    if (sizes[size]) {
      classes.push('active')
    }
  }
  return <button className={classes.join(' ')}>{text}</button>
}

export default ProductButton

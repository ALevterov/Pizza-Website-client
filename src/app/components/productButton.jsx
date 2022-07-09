const ProductButton = ({ text, selected }) => {
  const classes = ['flex-grow-1 product-btn']
  if (selected) {
    classes.push('active')
  }
  return <button className={classes.join(' ')}>{text}</button>
}

export default ProductButton

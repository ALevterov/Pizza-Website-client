import ProductItemPreloader from './productItemPreloader'

const ProductPreloader = ({ count, image }) => {
  const items = new Array(count).fill('')
  return items.map((_, i) => {
    return <ProductItemPreloader image={image} key={i} />
  })
}

export default ProductPreloader

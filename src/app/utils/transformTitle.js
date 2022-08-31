const transformTitle = num => {
  if (num === 1) {
    return num + ' товар'
  }
  if (num > 1 && num < 5) {
    return num + ' товара'
  }
  return num + ' товаров'
}
export default transformTitle

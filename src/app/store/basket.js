import { createSlice } from '@reduxjs/toolkit'
import { PRODUCT_PIZZA } from '../utils/consts'
const initialState = {
  enteties: {
    products: {},
  },
}

const busketSlice = createSlice({
  name: 'busket',
  initialState,
  reducers: {
    productAddedToBasket: (state, action) => {
      const products = state.enteties.products
      const payload = action.payload
      const keys = Object.keys(products)
      if (keys.length === 0) {
        state.enteties.products[payload._id] = [{ ...payload }]
        return
      }
      if (!keys.includes(payload._id)) {
        state.enteties.products[payload._id] = [{ ...payload }]
      } else {
        let flag = true
        const newArrayOfProductsWithSameId = products[payload._id].map(prod => {
          if (prod.type === PRODUCT_PIZZA) {
            if (
              JSON.stringify(prod.selected) === JSON.stringify(payload.selected)
            ) {
              flag = false
              return { ...prod, count: prod.count + 1 }
            } else {
              return prod
            }
          }
        })
        if (flag) {
          newArrayOfProductsWithSameId.push({ ...payload })
        }
        state.enteties.products[payload._id] = newArrayOfProductsWithSameId
      }
    },
  },
})

const { reducer: basketReducer, actions } = busketSlice
const { productAddedToBasket } = actions

export const addProductToBasket = payload => dispatch => {
  dispatch(productAddedToBasket(payload))
}
export const getProductsFromBasket = () => state =>
  state.basket.enteties.products

export const getProductCount = prodId => state => {
  if (!state.basket.enteties.products[prodId]) return 0

  return state.basket.enteties.products[prodId].reduce((totalCount, prod) => {
    return +totalCount + +prod.count
  }, 0)
}
export const getTotalPrice = () => state => {
  const products = state.basket.enteties.products
  if (products === {}) return 0

  let totalPrice = 0
  for (const prodId of Object.keys(products)) {
    const product = products[prodId]
    totalPrice += product.reduce((count, prod) => {
      const price = +prod.sizes[prod.selected.size].price
      return count + price * +prod.count
    }, 0)
  }
  return totalPrice
}
export const getAllBasketProductsCount = () => state => {
  const products = state.basket.enteties.products
  if (products === {}) return 0
  let totalCount = 0
  for (const prodId of Object.keys(products)) {
    const product = products[prodId]
    totalCount += product.reduce((count, prod) => {
      return count + prod.count
    }, 0)
  }
  return totalCount
}

export const getProductById = prodId => state => {
  if (!state.busket.enteties.products === {}) {
    return null
  }
  return state.busket.enteties.products[prodId]
}
export default basketReducer

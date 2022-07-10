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

export const getTotalProductCount = prodId => state => {
  if (!state.basket.enteties.products[prodId]) {
    return 0
  }
  return state.basket.enteties.products[prodId].reduce((totalCount, prod) => {
    return +totalCount + +prod.count
  }, 0)
}
// export const getTotalPrice = () => state => {
//   return state.basket.enteties.products.reduce((totalPrice, product) => {
//     if (product.sizes) {
//       const price = +product.sizes[product.selected.size].price * +product.count
//       return totalPrice + price
//     }
//   }, 0)
// }
// export const getProductsCountFromBasket = () => state =>
//   state.basket.enteties.products.length

export const getProductById = prodId => state => {
  if (!state.busket.enteties.products === {}) {
    return null
  }
  return state.busket.enteties.products[prodId]
}
export default basketReducer

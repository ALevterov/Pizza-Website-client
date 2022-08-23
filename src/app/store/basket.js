import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { PRODUCT_PIZZA } from '../utils/consts'
const initialState = {
  enteties: {
    products: {},
  },
}
const appendPizza = ({ payload, products }) => {}
const busketSlice = createSlice({
  name: 'busket',
  initialState,
  reducers: {
    productAddedToBasket: (state, action) => {
      const products = state.enteties.products
      const payload = action.payload
      const keys = Object.keys(products)
      if (keys.length === 0) {
        state.enteties.products[payload._id] = [
          { ...payload, _basketId: nanoid() },
        ]
        return
      }
      if (!keys.includes(payload._id)) {
        state.enteties.products[payload._id] = [
          { ...payload, _basketId: nanoid() },
        ]
      } else {
        if (payload.type === PRODUCT_PIZZA) {
          let flag = true
          const newArrayOfProductsWithSameId = products[payload._id].map(
            prod => {
              if (prod.type === PRODUCT_PIZZA) {
                if (
                  JSON.stringify(prod.selected) ===
                  JSON.stringify(payload.selected)
                ) {
                  flag = false
                  return { ...prod, count: prod.count + 1 }
                } else {
                  return prod
                }
              }
            }
          )
          if (flag) {
            newArrayOfProductsWithSameId.push({
              ...payload,
              _basketId: nanoid(),
            })
          }
          state.enteties.products[payload._id] = newArrayOfProductsWithSameId
        } else {
          state.enteties.products[payload._id][0].count =
            products[payload._id][0].count + 1
        }
      }
    },
    productDeletedFromBasket: (state, action) => {
      const products = state.enteties.products
      const payload = action.payload
      if (payload.type === PRODUCT_PIZZA) {
        let flag = null
        const newArrayOfProductsWithSameId = products[payload._id].map(
          (prod, i) => {
            if (prod.type === PRODUCT_PIZZA) {
              if (
                JSON.stringify(prod.selected) ===
                JSON.stringify(payload.selected)
              ) {
                if (payload.remove) {
                  flag = i
                  return { ...prod, count: prod.count }
                } else {
                  if (+prod.count === 1) {
                    flag = i
                  }
                  return { ...prod, count: prod.count - 1 }
                }
              } else {
                return prod
              }
            }
          }
        )

        if (flag !== null) {
          newArrayOfProductsWithSameId.splice(flag, 1)
        }

        if (newArrayOfProductsWithSameId.length === 0) {
          delete state.enteties.products[payload._id]
        } else {
          state.enteties.products[payload._id] = newArrayOfProductsWithSameId
        }
      } else {
        if (
          state.enteties.products[payload._id][0].count === 1 ||
          payload.remove
        ) {
          delete state.enteties.products[payload._id]
        } else {
          state.enteties.products[payload._id][0].count =
            products[payload._id][0].count - 1
        }
      }
    },
  },
})

const { reducer: basketReducer, actions } = busketSlice
const { productAddedToBasket, productDeletedFromBasket } = actions

export const addProductToBasket = payload => dispatch => {
  dispatch(productAddedToBasket(payload))
}
export const deleteProductFromBasket = payload => dispatch => {
  dispatch(productDeletedFromBasket(payload))
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
      let price
      if (prod.type === 'pizza') {
        price = +prod.sizes[prod.selected.size].price
      } else {
        price = +prod.price
      }
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

export const getProductByTwoId = (prodId, basketId) => state =>
  state.basket.enteties.products[prodId].find(
    prod => prod._basketId === basketId
  )

export const getProductById = prodId => state => {
  if (!state.busket.enteties.products === {}) {
    return null
  }
  return state.busket.enteties.products[prodId]
}
export default basketReducer

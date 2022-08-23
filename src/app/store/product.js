import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../http/productApi'
const initialState = {
  enteties: {
    desserts: [],
    drinks: [],
  },
  count: {
    desserts: 0,
    drinks: 0,
  },
  isLoading: {
    desserts: true,
    drinks: true,
  },
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productRequested: (state, action) => {
      state.isLoading[action.payload.type] = true
    },
    productNextUploaded: (state, action) => {
      state.enteties[action.payload.type] = action.payload.chunk
      state.count[action.payload.type] = action.payload.count // при переходе на новую страницу каждый раз будем обращаться к серверу и получать нужные продукты
      state.isLoading[action.payload.type] = false
    },
    productRequestFailed: (state, action) => {
      state.error[action.payload.type] = action.payload
      state.isLoading[action.payload.type] = false
    },
    productCountChanged: (state, action) => {
      state.enteties[action.payload.type] = state.enteties.map(p => {
        if (p._id === action.payload._id) {
          return { ...p, count: action.payload.count }
        } else {
          return p
        }
      })
    },
  },
})

const { reducer: productReducer, actions } = productSlice
const {
  productRequested,
  productNextUploaded,
  productRequestFailed,
  productCountChanged,
} = actions

export const uploadProducts =
  ({ currentPage, limit, sortingProps, type }) =>
  async dispatch => {
    dispatch(productRequested({ type }))
    try {
      const { data } = await fetchProducts({
        limit: limit.toString(),
        page: currentPage.toString(),
        sortingProps: JSON.stringify(sortingProps),
        type,
      })
      const { chunk, count } = data
      dispatch(productNextUploaded({ chunk, count, type }))
    } catch (error) {
      productRequestFailed(error.message)
      console.log(error)
    }
  }

export const getProductsLoadingState =
  ({ type }) =>
  state =>
    state.products.isLoading[type]

export const getAllProducts =
  ({ type }) =>
  state =>
    state.products.enteties[type]

export const changeProductCount = payload => dispatch =>
  dispatch(productCountChanged(payload))

export const getProductById =
  ({ type, _id }) =>
  state =>
    state.products.enteties[type].find(p => p._id === _id)

export const getProductsCount =
  ({ type }) =>
  state =>
    state.products.count[type]

export default productReducer

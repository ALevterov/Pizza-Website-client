import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../http/productApi'
import { fetchStocks } from '../http/stockApi'
const initialState = {
  enteties: [],
  count: 0,
  error: null,
  isLoading: true,
}
const productSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    stocksRequested: (state, action) => {
      state.isLoading = true
    },
    stocksUploaded: (state, action) => {
      state.enteties = action.payload
      state.isLoading = false
    },
    stocksRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: stockReducer, actions } = productSlice
const { stocksRequested, stocksRequestFailed, stocksUploaded } = actions

export const uploadStocks = () => async dispatch => {
  dispatch(stocksRequested())
  try {
    const { data } = await fetchStocks()
    dispatch(stocksUploaded(data))
  } catch (error) {
    stocksRequestFailed(error.message)
    console.log(error.message)
  }
}
export const getAllStocks = () => state => state.stocks.enteties
export const getStocksLoadingState = () => state => state.stocks.isLoading

export default stockReducer

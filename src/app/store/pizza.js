import { createSlice } from '@reduxjs/toolkit'
import pizzaApi from '../../mockData/pizza'
import { fetchPizza } from '../http/pizzaApi'
const initialState = {
  enteties: [],
  count: 0,
  isLoading: true,
  dataLoaded: false,
}
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    pizzaRequested: state => {
      state.isLoading = true
    },
    pizzaNextUploaded: (state, action) => {
      // state.enteties = [...state.enteties, ...action.payload] // если пытаемся закидывать по подгружаемому кусочку в стейт (проблемы со страницами при непоследовательном переходе по ним)
      state.enteties = action.payload.chunk
      state.count = action.payload.count // при переходе на новую страницу каждый раз будем обращаться к серверу и получать нужные продукты
      state.isLoading = false
    },
    pizzaRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    pizzaSelected: (state, action) => {
      state.enteties = state.enteties.map(p => {
        if (p._id === action.payload._id) {
          return { ...p, selected: action.payload.selected }
        } else {
          return p
        }
      })
    },
    pizzaCountChanged: (state, action) => {
      state.enteties = state.enteties.map(p => {
        if (p._id === action.payload._id) {
          return { ...p, count: action.payload.count }
        } else {
          return p
        }
      })
    },
  },
})

const { reducer: pizzaReducer, actions } = pizzaSlice
const {
  pizzaRequested,
  pizzaRecieved,
  pizzaRequestFailed,
  pizzaSelected,
  pizzaCountChanged,
  pizzaNextUploaded,
} = actions
export const fetchAllPizza = () => async dispatch => {
  dispatch(pizzaRequested())
  try {
    const data = await pizzaApi.fetchAll()
    dispatch(pizzaRecieved(data))
  } catch (error) {
    console.log(error)
    dispatch(pizzaRequestFailed(error.message))
  }
}
export const uploadPizza =
  ({ currentPage, limit, pizzaFeature, sortingProps }) =>
  async dispatch => {
    dispatch(pizzaRequested())
    try {
      const { data } = await fetchPizza({
        limit: limit.toString(),
        page: currentPage.toString(),
        sortingProps: JSON.stringify(sortingProps),
        pizzaFeature: JSON.stringify(pizzaFeature),
      })
      const { chunk, count } = data
      dispatch(pizzaNextUploaded({ chunk, count }))
    } catch (error) {
      console.log(error)
    }
  }

export const getPizzaLoadingState = () => state => state.pizza.isLoading

export const getAllPizza = () => state => state.pizza.enteties

export const selectPizza = payload => async dispatch =>
  dispatch(pizzaSelected(payload))

export const changePizzaCount = payload => dispatch =>
  dispatch(pizzaCountChanged(payload))

export const getPizzaById = id => state =>
  state.pizza.enteties.find(p => p._id === id)

export const getPizzaCount = () => state => state.pizza.count
export default pizzaReducer

import { createSlice } from '@reduxjs/toolkit'
import pizzaApi from '../../mockData/pizza'
const initialState = {
  enteties: [],
  isLoading: true,
}
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    pizzaRequested: state => {
      state.isLoading = true
    },
    pizzaRecieved: (state, action) => {
      state.enteties = action.payload
      state.isLoading = false
    },
    pizzaRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    pizzaUpdated: (state, action) => {
      console.log(action.payload)
      state.enteties = state.enteties.map(p => {
        if (p._id === action.payload._id) {
          return { ...p, selected: action.payload.selected }
        } else {
          return p
        }
      })
      state.isLoading = false
    },
  },
})

const { reducer: pizzaReducer, actions } = pizzaSlice
const { pizzaRequested, pizzaRecieved, pizzaRequestFailed, pizzaUpdated } =
  actions
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
export const getPizzaLoadingState = () => state => state.pizza.isLoading
export const getAllPizza = () => state => state.pizza.enteties

export const updatePizza = payload => async dispatch => {
  dispatch(pizzaRequested())
  try {
    dispatch(pizzaUpdated(payload))
  } catch (error) {
    dispatch(pizzaRequestFailed(error.message))
    console.log(error.message)
  }
}
export default pizzaReducer

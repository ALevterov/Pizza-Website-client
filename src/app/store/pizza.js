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
export const getPizzaLoadingState = () => state => state.pizza.isLoading
export const getAllPizza = () => state => state.pizza.enteties

export const selectPizza = payload => async dispatch =>
  dispatch(pizzaSelected(payload))

export const changePizzaCount = payload => dispatch =>
  dispatch(pizzaCountChanged(payload))

export const getPizzaById = id => state =>
  state.pizza.enteties.find(p => p._id === id)
export default pizzaReducer

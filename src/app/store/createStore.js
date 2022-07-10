import { configureStore, combineReducers } from '@reduxjs/toolkit'
import basketReducer from './basket'
import pizzaReducer from './pizza'

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

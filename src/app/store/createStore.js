import { configureStore, combineReducers } from '@reduxjs/toolkit'
import basketReducer from './basket'
import pizzaReducer from './pizza'
import productReducer from './product'

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
  products: productReducer,
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

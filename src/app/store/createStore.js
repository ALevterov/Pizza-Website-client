import { configureStore, combineReducers } from '@reduxjs/toolkit'
import basketReducer from './basket'
import introCardReducer from './introCard'
import pizzaReducer from './pizza'
import productReducer from './product'
import stockReducer from './stock'
import userReducer from './user'

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
  products: productReducer,
  stocks: stockReducer,
  introCard: introCardReducer,
  user: userReducer,
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

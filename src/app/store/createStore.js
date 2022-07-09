import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pizzaReducer from './pizza'

const rootReducer = combineReducers({
  pizza: pizzaReducer,
})

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

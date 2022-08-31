import {
  DOUGH_THICK,
  DOUGH_THIN,
  PIZZA_LARGE_SIZE,
  PIZZA_MEDIUM_SIZE,
  PIZZA_SMALL_SIZE,
} from './consts'

const getPizzaDescription = ({ size, dough }) => {
  let result = ''
  if (size === PIZZA_LARGE_SIZE) {
    result = 'Большая 35 см,'
  }
  if (size === PIZZA_MEDIUM_SIZE) {
    result = 'Средняя 30 см,'
  }
  if (size === PIZZA_SMALL_SIZE) {
    result = 'Маленькая 25 см,'
  }
  if (dough === DOUGH_THICK) {
    result += ' традиционное тесто'
  }
  if (dough === DOUGH_THIN) {
    result += ' тонкое тесто'
  }
  return result
}
export default getPizzaDescription

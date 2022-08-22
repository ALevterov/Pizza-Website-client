import { $authHost, $host } from '.'
import jwt_decode from 'jwt-decode'

export const createPizza = async data => {
  // const response = await $authHost.post('api/pizza', {...data})
  // return response
}
export const fetchPizza = async ({
  page,
  limit,
  pizzaFeature,
  sortingProps,
}) => {
  const response = await $host.get('api/pizza', {
    params: {
      pizzaFeature: pizzaFeature,
      sortingProps: sortingProps,
      limit,
      page,
    },
  })
  return response
}
export const removePizza = async ({ id }) => {
  const response = await $authHost.post('api/pizza/', { id })
  return response
}

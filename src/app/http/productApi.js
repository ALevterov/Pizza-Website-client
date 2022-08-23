import { $authHost, $host } from '.'
import jwt_decode from 'jwt-decode'

export const createProduct = async data => {
  // const response = await $authHost.post('api/pizza', {...data})
  // return response
}
export const fetchProducts = async ({ page, limit, sortingProps, type }) => {
  const response = await $host.get(`api/${type}`, {
    params: {
      page,
      limit,
      sortingProps: sortingProps,
      type,
    },
  })
  return response
}
export const removeProduct = async ({ id, type }) => {
  const response = await $authHost.post(`api/${type}/`, { id })
  return response
}

import { $authHost, $host } from '.'
import jwt_decode from 'jwt-decode'

export const createIntroCard = async data => {
  // const response = await $authHost.post('api/pizza', {...data})
  // return response
}
export const fetchIntroCard = async () => {
  const response = await $host.get(`api/introCards`)
  return response
}
export const removeIntroCard = async ({ id }) => {
  const response = await $authHost.post(`api/introCards/`, { id })
  return response
}

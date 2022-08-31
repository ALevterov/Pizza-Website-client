import { $authHost, $host } from '.'

export const createStock = async data => {
  // const response = await $authHost.post('api/pizza', {...data})
  // return response
}
export const fetchStocks = async () => {
  const response = await $host.get(`api/stocks`)
  return response
}
export const removeStock = async ({ id }) => {
  const response = await $authHost.post(`api/stocks/`, { id })
  return response
}

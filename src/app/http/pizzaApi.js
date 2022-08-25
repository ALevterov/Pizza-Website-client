import { $authHost, $host } from '.'
import jwt_decode from 'jwt-decode'

export const createPizza = async data => {
  // const response = await $authHost.post('api/pizza', {...data})
  // return response
}
export const changePizzaData = async ({ data, id }) => {
  try {
    const formData = new FormData()
    Object.keys(data).forEach((key, i) => {
      let item = data[key]
      if (typeof data[key] === 'object' && key !== 'image') {
        item = JSON.stringify(item)
      }
      formData.append(key, item)
    })
    const response = await $authHost.put('api/pizza', formData)
    return response
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
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

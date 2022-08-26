import { $authHost, $host } from '.'
import jwt_decode from 'jwt-decode'

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
export const createProduct = async ({ data, type }) => {
  try {
    console.log(type)
    const formData = new FormData()
    Object.keys(data).forEach((key, i) => {
      let item = data[key]
      if (typeof data[key] === 'object' && key !== 'image') {
        item = JSON.stringify(item)
      }
      formData.append(key, item)
    })
    const response = await $authHost.post(`api/${type}`, formData)
    return response
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
}
export const changeProductData = async ({ data, type }) => {
  try {
    const formData = new FormData()
    Object.keys(data).forEach((key, i) => {
      let item = data[key]
      if (typeof data[key] === 'object' && key !== 'image') {
        item = JSON.stringify(item)
      }
      formData.append(key, item)
    })
    const response = await $authHost.put(`api/${type}`, formData)
    return response
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
}
export const removeProduct = async ({ id, type }) => {
  const response = await $authHost.delete(`api/${type}/`, {
    data: { id },
  })
  return response
}

import axios from 'axios'
import { ACCESS_TOKEN } from '../utils/consts'

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }

import { $authHost, $host } from '.'

// export const createIntroCard = async data => {

// }
export const fetchIntroCard = async () => {
  const response = await $host.get(`api/introCards`)
  return response
}
// export const removeIntroCard = async ({ id }) => {
//   const response = await $authHost.post(`api/introCards/`, { id })
//   return response
// }

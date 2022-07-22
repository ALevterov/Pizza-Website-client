import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPizza, getPizzaLoadedStatus } from '../../store/pizza'

const PizzaLoader = ({ children }) => {
  const dataStatus = useSelector(getPizzaLoadedStatus())
  const dispatch = useDispatch()
  useEffect(() => {
    if (!dataStatus) {
      dispatch(fetchAllPizza())
    }
  }, [])
  if (!dataStatus) return 'loading pizza...'
  return children
}

export default PizzaLoader

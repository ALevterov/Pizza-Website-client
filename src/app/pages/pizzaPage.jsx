import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pizzaApi from '../../mockData/pizza'
import PizzaCard from '../components/pizza/pizzaCard'
import {
  fetchAllPizza,
  getAllPizza,
  getPizzaLoadingState,
} from '../store/pizza'
const PizzaPage = () => {
  const isLoadingPizza = useSelector(getPizzaLoadingState())
  const pizza = useSelector(getAllPizza())
  console.log(isLoadingPizza)
  console.log(pizza)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPizza())
  }, [])
  return (
    <>
      <h1>Пицца</h1>
      <div className='container'>
        <div className='card-group align-items-stretch'>
          {!isLoadingPizza
            ? pizza.map(p => {
                return <PizzaCard key={p._id} {...p} />
              })
            : 'loading pizza...'}
        </div>
      </div>
    </>
  )
}

export default PizzaPage

import { useEffect, useState } from 'react'
import pizzaApi from '../../mockData/pizza'
import PizzaCard from '../components/pizza/pizzaCard'
const PizzaPage = () => {
  const [pizza, setPizza] = useState()
  const [isLoadingPizza, setisLoadingPizza] = useState(true)
  useEffect(() => {
    async function fetchAllPizza() {
      const data = await pizzaApi.fetchAll()
      setPizza(data)
      setisLoadingPizza(false)
    }
    fetchAllPizza()
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

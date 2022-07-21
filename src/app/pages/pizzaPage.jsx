import { useSelector } from 'react-redux'
import PizzaCard from '../components/pizza/pizzaCard'
import { getAllPizza, getPizzaLoadingState } from '../store/pizza'
const PizzaPage = () => {
  const isLoadingPizza = useSelector(getPizzaLoadingState())
  const pizza = useSelector(getAllPizza())
  return (
    <>
      <div className='container'>
        <div className='card-group align-items-stretch'>
          {!isLoadingPizza
            ? pizza.map(p => {
                return <PizzaCard key={p._id} {...p} />
              })
            : 'loading...'}
        </div>
      </div>
    </>
  )
}

export default PizzaPage

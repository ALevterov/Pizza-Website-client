import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PizzaCard from '../components/pizza/pizzaCard'
import {
  getAllPizza,
  getPizzaLoadedStatus,
  getPizzaLoadingState,
  uploadPizza,
  uploadPizzaFirstTime,
} from '../store/pizza'
import './pizzaPage.css'
const PizzaPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const isLoadingPizza = useSelector(getPizzaLoadingState())
  const pizza = useSelector(getAllPizza())
  const pizzaLoadedStatus = useSelector(getPizzaLoadedStatus())

  const count = 8
  const limit = 2
  const offset = limit * currentPage - limit

  const pagesCount = Math.ceil(count / limit)

  const pages = new Array(pagesCount).fill('')

  const dispatch = useDispatch()

  const nextPage = () => {
    setCurrentPage(prevState => prevState + 1)
  }
  const prevPage = () => {
    setCurrentPage(prevState => prevState - 1)
  }

  useEffect(() => {
    if (currentPage === 1) {
      // if (pizzaLoadedStatus) return

      dispatch(uploadPizzaFirstTime(limit)) // получаем первую страницу пицц
    } else {
      dispatch(uploadPizza(currentPage, limit, count)) // получаем следующую страницу пицц
    }
  }, [currentPage])

  // const pizzaSlice = pizza.slice(offset, limit * currentPage)
  const pizzaSlice = pizza

  console.log(pizzaSlice)
  return (
    <>
      <div className='container mt-4'>
        <div className='card-group align-items-stretch'>
          {!isLoadingPizza
            ? pizzaSlice.map(p => {
                return <PizzaCard key={p._id} {...p} />
              })
            : 'loading...'}
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row d-flex justify-content-center'>
          {!isLoadingPizza && pages.length !== 1 && (
            <nav aria-label='Page navigation example' style={{ width: 'auto' }}>
              <ul className='pagination'>
                <button className='page-item' disabled={currentPage === 1}>
                  <a className='page-link' onClick={() => prevPage()}>
                    Previous
                  </a>
                </button>
                {pages.map((_, i) => {
                  return (
                    <button
                      className={
                        currentPage === i + 1 ? 'page-item active' : 'page-item'
                      }
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      <a className='page-link'>{i + 1}</a>
                    </button>
                  )
                })}
                <button
                  className='page-item'
                  onClick={() => nextPage()}
                  disabled={currentPage === pages.length}
                >
                  <a className='page-link'>Next</a>
                </button>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  )
}

export default PizzaPage

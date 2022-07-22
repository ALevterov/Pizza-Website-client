import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PizzaCard from '../components/pizza/pizzaCard'
import ProductPreloader from '../components/preloader/productPreloader'
import {
  getAllPizza,
  getPizzaCount,
  getPizzaLoadingState,
  uploadPizza,
} from '../store/pizza'
import './pizzaPage.css'
import preloadPizzaImage from '../assets/preloadPizza.svg'
import arrow from '../assets/arrowUp.svg'
import {
  PIZZA_CLOSED,
  PIZZA_GRILL,
  PIZZA_MEAT,
  PIZZA_SPICY,
  PIZZA_VEGAN,
} from '../utils/consts'
import SortingBar from '../components/sortingBar'
const PizzaPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pizzaFeature, setPizzaFeature] = useState(null)
  const [sortingProps, setSortingProps] = useState({
    direction: true, // true = asc false = desc
    prop: null,
  })

  const isLoadingPizza = useSelector(getPizzaLoadingState())
  const pizza = useSelector(getAllPizza())
  const dispatch = useDispatch()

  const filterCases = [
    { title: 'Все', value: null },
    { title: 'Мясные', value: PIZZA_MEAT },
    { title: 'Вегетарианские', value: PIZZA_VEGAN },
    { title: 'Гриль', value: PIZZA_GRILL },
    { title: 'Острые', value: PIZZA_SPICY },
    { title: 'Закрытые', value: PIZZA_CLOSED },
  ]

  const count = useSelector(getPizzaCount())
  const limit = 4
  // const offset = limit * currentPage - limit

  const pagesCount = Math.ceil(count / limit)
  const pages = new Array(pagesCount).fill('')

  const nextPage = () => {
    setCurrentPage(prevState => prevState + 1)
  }
  const prevPage = () => {
    setCurrentPage(prevState => prevState - 1)
  }

  useEffect(() => {
    dispatch(uploadPizza({ currentPage, limit, pizzaFeature }))
  }, [currentPage, pizzaFeature])
  useEffect(() => {
    setCurrentPage(1)
  }, [pizzaFeature])
  const PizzaFilter = ({ onChangepizzaFeature, pizzaFeature }) => {
    return (
      <div className='container mt-4'>
        <div className='row d-flex justify-content-between'>
          <div className='d-flex justify-content-around flex-row'>
            {filterCases.map(item => {
              return (
                <div
                  className={
                    item.value === pizzaFeature
                      ? 'pizza__filter_item active'
                      : 'pizza__filter_item'
                  }
                  key={item.value}
                  onClick={() => onChangepizzaFeature(item.value)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='d-flex align-items-center'>
            <SortingBar
              selected={sortingProps}
              setSortingProps={setSortingProps}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <PizzaFilter
        onChangepizzaFeature={setPizzaFeature}
        pizzaFeature={pizzaFeature}
      />
      <div className='container mt-4'>
        <div className='my-4'>
          <h2 style={{ fontSize: '32px' }}>
            {filterCases.find(c => c.value === pizzaFeature).title}
          </h2>
        </div>
        <div className='card-group align-items-stretch'>
          {!isLoadingPizza ? (
            pizza.map(p => {
              return <PizzaCard key={p._id} {...p} />
            })
          ) : (
            <ProductPreloader count={limit} image={preloadPizzaImage} />
          )}
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row d-flex justify-content-center align-items-center'>
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

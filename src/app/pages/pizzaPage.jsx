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
import {
  PIZZA_CLOSED,
  PIZZA_GRILL,
  PIZZA_MEAT,
  PIZZA_SPICY,
  PIZZA_VEGAN,
} from '../utils/consts'
import SortingBar from '../components/sortingBar'
import PaginationBar from '../components/paginationBar'
import { fetchPizza } from '../http/pizzaApi'
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

  const sortCases = [
    { title: 'цене', value: 'price' },
    { title: 'алфавиту', value: 'alphabet' },
    { title: 'популярности', value: 'popular' },
  ]

  const count = useSelector(getPizzaCount())
  const limit = 4
  // const offset = limit * currentPage - limit

  const pagesCount = Math.ceil(count / limit)
  const pages = new Array(pagesCount).fill('')

  useEffect(() => {
    dispatch(uploadPizza({ currentPage, limit, pizzaFeature, sortingProps }))
  }, [currentPage, pizzaFeature, sortingProps])
  useEffect(() => {
    setCurrentPage(1)
  }, [pizzaFeature, sortingProps])

  const sortedPizza = Object.assign([], pizza)

  const PizzaFilter = ({ onChangepizzaFeature, pizzaFeature }) => {
    return (
      <div className='container mt-4'>
        <div className='row d-flex justify-content-between'>
          <div className='d-flex justify-content-around flex-row w-auto'>
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
          <div className='d-flex align-items-center w-auto'>
            <SortingBar
              selected={sortingProps}
              setSortingProps={setSortingProps}
              sortCases={sortCases}
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
            sortedPizza.map(p => {
              return <PizzaCard key={p._id} {...p} />
            })
          ) : (
            <ProductPreloader count={limit} image={preloadPizzaImage} />
          )}
        </div>
      </div>
      {pages.length > 1 && (
        <PaginationBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
        />
      )}
    </>
  )
}

export default PizzaPage

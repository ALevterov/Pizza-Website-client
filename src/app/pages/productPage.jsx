import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPreloader from '../components/preloader/productPreloader'
import {
  getAllProducts,
  getProductsCount,
  uploadProducts,
  getProductsLoadingState,
} from '../store/product'
import './pizzaPage.css'
import preloadPizzaImage from '../assets/preloadPizza.svg'
import SortingBar from '../components/sortingBar'
import PaginationBar from '../components/paginationBar'
import ProductCard from '../components/product/productCard'
import { useMemo } from 'react'
const ProductPage = ({ type }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortingProps, setSortingProps] = useState({
    direction: true, // true = asc false = desc
    prop: null,
  })

  const isLoadingProducts = useSelector(getProductsLoadingState({ type }))
  const products = useSelector(getAllProducts({ type }))
  const dispatch = useDispatch()
  const sortCases = useMemo(
    () => [
      { title: 'цене', value: 'price' },
      { title: 'алфавиту', value: 'alphabet' },
      { title: 'популярности', value: 'popular' },
    ],
    []
  )

  const count = useSelector(getProductsCount({ type }))

  const limit = 4
  // const offset = limit * currentPage - limit

  const pagesCount = Math.ceil(count / limit)

  const pages = new Array(pagesCount).fill('')

  useEffect(() => {
    dispatch(uploadProducts({ currentPage, limit, sortingProps, type }))
  }, [currentPage, sortingProps, type])

  useEffect(() => {
    setCurrentPage(1)
  }, [sortingProps])

  const sortedProducts = useMemo(() => Object.assign([], products), [products])

  return (
    <>
      <div className='container mt-4'>
        <div className='d-flex align-items-center w-auto justify-content-end mt-4'>
          <SortingBar
            selected={sortingProps}
            setSortingProps={setSortingProps}
            sortCases={sortCases}
            css='mt-2'
            sortStyle={{ paddingTop: '1px' }}
          />
        </div>
        <div className='card-group align-items-stretch mt-4'>
          {!isLoadingProducts ? (
            sortedProducts.map(p => {
              return <ProductCard key={p._id} {...p} />
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

export default ProductPage

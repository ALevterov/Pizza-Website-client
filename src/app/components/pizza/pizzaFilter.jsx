import { useState } from 'react'
import SortingBar from '../../components/sortingBar'
import './pizzaFilter.css'
const PizzaFilter = ({
  onChangepizzaFeature,
  pizzaFeature,
  filterCases,
  sortingProps,
  sortCases,
  setSortingProps,
}) => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(prev => !prev)
  }
  const itemClick = value => {
    onChangepizzaFeature(value)
    setMenuActive(false)
  }
  return (
    <div className='container mt-4'>
      <div className='row d-flex justify-content-between'>
        <div className='product-features d-flex justify-content-around flex-row w-auto'>
          {window.screen.width > 780 ? (
            filterCases.map(item => {
              return (
                <div
                  className={
                    item.value === pizzaFeature
                      ? 'pizza__filter_item active'
                      : 'pizza__filter_item'
                  }
                  key={item.value}
                  onClick={() => itemClick(item.value)}
                >
                  {item.title}
                </div>
              )
            })
          ) : (
            <div className='position-relative'>
              <div className='burger-btn' onClick={() => toggleMenu()}>
                <span />
              </div>
              <div
                className={
                  menuActive
                    ? 'filtered_items-burger active'
                    : 'filtered_items-burger'
                }
              >
                {filterCases.map(item => {
                  return (
                    <div
                      className={
                        item.value === pizzaFeature
                          ? 'pizza__filter_item active'
                          : 'pizza__filter_item'
                      }
                      key={item.value}
                      onClick={() => itemClick(item.value)}
                    >
                      {item.title}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
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
export default PizzaFilter

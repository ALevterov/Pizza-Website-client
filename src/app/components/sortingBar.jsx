import { useState } from 'react'
import './sortingBar.css'
const SortingBar = ({
  setSortingProps,
  selected,
  sortCases,
  css,
  sortStyle,
}) => {
  const [show, setShow] = useState(false)
  const dropDownClick = value => {
    setShow(false)
    setSortingProps(prevState => ({ ...prevState, prop: value }))
  }
  return (
    <div className={'sorting__bar d-flex align-items-center ' + css}>
      <span
        className={selected.direction ? 'arrow arrow-up' : 'arrow arrow-down'}
        onClick={() =>
          setSortingProps(prevState => ({
            ...prevState,
            direction: !prevState.direction,
          }))
        }
      >
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='#000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
      </span>{' '}
      <span style={sortStyle}>Сортировать по:</span>
      <div className='sorting__bar_dropdown'>
        <div
          className='sorting__bar_dropdown-title'
          onClick={() => setShow(prevState => !prevState)}
        >
          {sortCases.find(c => c.value === selected.prop)?.title ||
            'популярности'}
        </div>
        <ul
          className={
            show
              ? 'sorting__bar_dropdown-menu show'
              : 'sorting__bar_dropdown-menu'
          }
        >
          {sortCases.map(c => (
            <li
              key={c.value}
              className={
                selected.prop === c.value
                  ? 'sorting__bar_dropdown-item active'
                  : 'sorting__bar_dropdown-item'
              }
              onClick={() => dropDownClick(c.value)}
            >
              {c.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SortingBar

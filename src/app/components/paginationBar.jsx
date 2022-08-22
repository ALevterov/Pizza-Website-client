import './paginationBar.css'
const PaginationBar = ({ currentPage, setCurrentPage, pages }) => {
  const nextPage = () => {
    setCurrentPage(prevState => prevState + 1)
  }
  const prevPage = () => {
    setCurrentPage(prevState => prevState - 1)
  }
  return (
    <div className='container mb-4 mt-4'>
      <div className='row d-flex justify-content-center align-items-center'>
        <nav className='pagination__nav'>
          <ul className='pagination__list d-flex align-items-center justify-content-center'>
            {currentPage !== 1 && (
              <button
                className='pagination-item pagination-item-prev'
                onClick={() => prevPage()}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='button-arrow'
                >
                  <path
                    d='M10 18l6-6-6-6'
                    stroke='#000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
            )}
            {pages.map((_, i) => {
              return (
                <button
                  className={
                    currentPage === i + 1
                      ? 'pagination-item active'
                      : 'pagination-item'
                  }
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              )
            })}
            {currentPage !== pages.length && (
              <button
                className='pagination-item pagination-item-next'
                onClick={() => nextPage()}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='button-arrow'
                >
                  <path
                    d='M10 18l6-6-6-6'
                    stroke='#000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default PaginationBar

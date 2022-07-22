import './productItemPreloader.css'
const ProductItemPreloader = ({ image }) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card border-0' style={{ width: '90%', height: '100%' }}>
        <img src={image} className='card-img-top' alt='img' />
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <div className='preloader__title'></div>
            <div className='preloader__description'>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div className='preloader__options'></div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItemPreloader

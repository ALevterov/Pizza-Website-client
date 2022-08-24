import './sliderCard.css'

const SliderCard = ({ image, text }) => {
  return (
    <div className='slider__item d-flex flex-column justify-content-center p-1'>
      <img src={image} alt='карточка акции' className='w-100 h-100' />
    </div>
  )
}

export default SliderCard

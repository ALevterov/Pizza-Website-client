import { useRef, useEffect } from 'react'
import { bufferToImage } from '../../utils/bufferToImage'
import ChiefSlider from './chief-slider'
import './chief-slider.css'
import './slider.css'
import SliderCard from './SliderCard'
const Slider = ({ cards }) => {
  const sliderRef = useRef(null)
  let slider

  useEffect(() => {
    if (sliderRef) {
      slider = new ChiefSlider(sliderRef.current, {
        loop: true,
        autoplay: true,
        interval: 3000,
      })
    }
  }, [sliderRef])
  return (
    <div className='container mt-4'>
      <div className='slider' ref={sliderRef}>
        <>
          <div className='slider__wrapper'>
            <div className='slider__items'>
              {cards.map(c => (
                <SliderCard
                  image={bufferToImage(c.image)}
                  text={c.text}
                  key={c.text}
                />
              ))}
            </div>
          </div>
          <a href='#' className='slider__control' data-slide='prev'></a>
          <a href='#' className='slider__control' data-slide='next'></a>
          <ol className='slider__indicators'>
            <li data-slide-to='0'></li>
            <li data-slide-to='1'></li>
            <li data-slide-to='2'></li>
            <li data-slide-to='3'></li>
            <li data-slide-to='4'></li>
          </ol>
        </>
      </div>
    </div>
  )
}

export default Slider

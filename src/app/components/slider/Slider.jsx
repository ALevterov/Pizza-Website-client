import { useRef } from 'react'
import ChiefSlider from './chief-slider'
import './chief-slider.css'
import './slider.css'
const Slider = () => {
  const sliderRef = useRef(null)
  if (sliderRef) {
    const slider = new ChiefSlider(sliderRef.current, {
      loop: true,
      autoplay: true,
      interval: 7000,
    })
  }
  return (
    <div className='container'>
      <div className='slider' ref={sliderRef}>
        <div className='slider__wrapper'>
          <div className='slider__items'>
            <div className='slider__item'>1</div>
            <div className='slider__item'>2</div>
            <div className='slider__item'>3</div>
            <div className='slider__item'>4</div>
            <div className='slider__item'>5</div>
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
      </div>
    </div>
  )
}

export default Slider

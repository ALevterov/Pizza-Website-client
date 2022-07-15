import { useEffect, useRef } from 'react'
import './basket.css'
const Basket = ({ active, setActive }) => {
  useEffect(() => {
    if (!active) {
      shadeRef.current.classList.remove('active')
      basketRef.current.classList.remove('active')
      setTimeout(() => {
        shadeRef.current.classList.add('none')
        basketRef.current.classList.add('none')
      }, 300)
    } else {
      shadeRef.current.classList.remove('none')
      basketRef.current.classList.remove('none')
      setTimeout(() => {
        shadeRef.current.classList.add('active')
        basketRef.current.classList.add('active')
      }, 0)
    }
  }, [active])
  const shadeRef = useRef()
  const basketRef = useRef()

  return (
    <div className='modal-window'>
      <div
        ref={shadeRef}
        className='modal-shade'
        onClick={() => setActive(false)}
      ></div>
      <div ref={basketRef} className='modal-basket'></div>
    </div>
  )
}

export default Basket

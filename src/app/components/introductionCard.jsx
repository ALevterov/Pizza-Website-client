import { NavLink } from 'react-router-dom'
import './introCard.css'
const IntroductionCard = ({ image, text, to }) => {
  return (
    <div className='col-xl-4 col-lg-4 col-md-6 mb-3 d-flex justify-content-center'>
      <NavLink
        className='card intro-card position-relative w-100'
        to={to || ''}
      >
        <img src={image} className='card-img-top img-fluid' alt='...' />
        <div className='card-body position-absolute'>
          <p className='card-text'>{text}</p>
        </div>
      </NavLink>
    </div>
  )
}

export default IntroductionCard

import { NavLink } from 'react-router-dom'
import './introCard.css'
const IntroductionCard = ({ image, text, to }) => {
  return (
    <div className='col-lg-4'>
      <NavLink className='card intro-card position-relative' to={to || ''}>
        <img src={image} className='card-img-top img-fluid' alt='...' />
        <div className='card-body position-absolute'>
          <p className='card-text'>{text}</p>
        </div>
      </NavLink>
    </div>
  )
}

export default IntroductionCard

import Slider from '../components/slider/Slider'
import image from '../assets/preloadPizza.svg'
import './mainPage.css'
const MainPage = () => {
  return (
    <>
      {/* <div className='container mt-4 mb-4'>
        <h2>Акции и скидки:</h2>
      </div> */}
      <Slider />
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <div class='card position-relative'>
              <img
                src={image}
                class='card-img-top'
                alt='...'
                style={{ height: '250px' }}
              />
              <div class='card-body position-absolute'>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='card position-relative'>
              <img
                src={image}
                class='card-img-top'
                alt='...'
                style={{ height: '250px' }}
              />
              <div class='card-body position-absolute'>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class='card position-relative'>
              <img
                src={image}
                class='card-img-top'
                alt='...'
                style={{ height: '250px' }}
              />
              <div class='card-body position-absolute'>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage

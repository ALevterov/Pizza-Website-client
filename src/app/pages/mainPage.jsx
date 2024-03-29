import Slider from '../components/slider/Slider'
import image from '../assets/preloadPizza.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllStocks,
  getStocksLoadingState,
  uploadStocks,
} from '../store/stock'
import './mainPage.css'
import { useEffect } from 'react'
import IntroductionCard from '../components/introductionCard'
import {
  getAllIntroCards,
  getIntroCardsLoadingState,
  uploadIntroCards,
} from '../store/introCard'
import { bufferToImage } from '../utils/bufferToImage'
import { useMemo } from 'react'

const MainPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(uploadStocks())
    dispatch(uploadIntroCards())
  }, [])

  const stocks = useSelector(getAllStocks())
  const isLoading = useSelector(getStocksLoadingState())
  const introCards = useSelector(getAllIntroCards())
  const introCardsIsLoading = useSelector(getIntroCardsLoadingState())
  const to = useMemo(() => ['/pizza', '/drinks', '/desserts'], [])
  return (
    <div className='main-page__wrapper'>
      {!isLoading ? (
        <Slider cards={stocks} />
      ) : (
        <div className='container mt-4 spinner-container d-flex justify-content-center align-items-center'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
      <div className='container mt-4'>
        <div className='row'>
          {!introCardsIsLoading
            ? introCards.map((card, i) => (
                <IntroductionCard
                  image={bufferToImage(card.image)}
                  text={card.text}
                  to={to[i]}
                  key={card.text}
                />
              ))
            : new Array(3).fill('').map((_, i) => {
                return <IntroductionCard image={image} text={''} key={i} />
              })}
        </div>
      </div>
    </div>
  )
}

export default MainPage

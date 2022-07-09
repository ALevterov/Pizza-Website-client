import PizzaOptionsBlock from './pizzaOptionsBlock'

const PizzaCard = ({ title, description, image, sizes }) => {
  console.log({ title, description, image, sizes })
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card border-0' style={{ width: '90%', height: '100%' }}>
        <img src={image} className='card-img-top' alt='img' />
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            {' '}
            <h5 className='card-title fs-5 roboto-sb'>{title}</h5>
            <p className='card-text roboto-l fs-09'>{description}</p>
          </div>
          <PizzaOptionsBlock />
        </div>
      </div>
    </div>
  )
}

export default PizzaCard

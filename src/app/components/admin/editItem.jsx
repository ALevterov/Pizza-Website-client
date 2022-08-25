import { NavLink, useLocation } from 'react-router-dom'
import gear from '../../assets/gear.png'
const EditItem = ({ id }) => {
  const location = useLocation()
  return (
    <NavLink
      className='position-absolute end-0 w-auto'
      style={{
        zIndex: 100,
        top: '-10px',
      }}
      to={`${location.pathname}/${id}`}
    >
      <img
        src={gear}
        alt='редактировать'
        style={{
          height: '20px',
          width: '20px',
          cursor: 'pointer',
        }}
      />
    </NavLink>
  )
}

export default EditItem

import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userApi'
import jwt_decode from 'jwt-decode'
import './Auth.css'
import { useDispatch } from 'react-redux'
import { setUserData } from '../store/user'
const Auth = () => {
  const initialState = {
    email: null,
    password: null,
  }
  const [authData, setAuthData] = useState(initialState)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogin = location.pathname === '/login'
  const handleClick = async ({ email, password }) => {
    try {
      let user
      if (isLogin) {
        const { data } = await login({ email, password })
        localStorage.setItem('access_token', data)
        user = await jwt_decode(data)
      } else {
        const { data } = await registration({ email, password })
        localStorage.setItem('access_token', data)
        user = await jwt_decode(data)
      }
      dispatch(setUserData(user))
      navigate('/')
    } catch (e) {
      alert(e.response.data.message)
      console.log(e)
    }
  }
  const onInputChange = ({ target }) => {
    setAuthData(prevState => {
      return { ...prevState, [target.name]: target.value }
    })
  }
  return (
    <div
      className='auth__form container d-flex justify-content-center align-items-center'
      style={{
        height: window.innerHeight - 64,
      }}
    >
      <div
        className='card d-flex justify-content-center p-3 px-4'
        style={{
          width: '600px',
        }}
      >
        <h2 className='text-center p-2 m-0'>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        <div className='form d-flex flex-column'>
          <input
            type='text'
            className='form-control mt-3'
            placeholder='Введите email'
            name='email'
            onChange={e => onInputChange(e)}
          />
          <input
            type='password'
            className='form-control mt-3'
            placeholder='Пароль для админки: admin322'
            name='password'
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className='mt-3 d-flex justify-content-between flex-row align-items-center mb-2'>
          {isLogin ? (
            <div>
              Нет аккаунта?{'  '}
              <NavLink to={'/registration'}>Регистрация</NavLink>
            </div>
          ) : (
            <div>
              Есть аккаунт?{'  '}
              <NavLink to={'/login'}>Авторизация</NavLink>
            </div>
          )}
          <div>
            <button
              className='product__btn_add auth-btn'
              onClick={() => handleClick(authData)}
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

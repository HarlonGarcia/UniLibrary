import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <img src="src/assets/images/library.png" alt="Library Image" id='lib_img' />
      <LoginForm></LoginForm>
    </div>
  )
}

export default Login
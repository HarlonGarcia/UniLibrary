import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <img src="src/assets/images/library.png" alt="Library Image" id='lib_img' />
      <div className='remaining'>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default Login
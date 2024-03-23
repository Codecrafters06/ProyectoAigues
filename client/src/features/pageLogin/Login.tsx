import React, { FC } from 'react';
import { Layout } from '../../components'
// import LoginComponent from './components/LoginComponent'
import LoginForm from './components/LoginForm'

const Login: FC = () => {
  return (

    <>
      <div style={{ backgroundImage: `url('/backgroundLogin.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center items-center ">

        <LoginForm />

      </div>
      {/* <h2 className='font-bold text-center text-sky-700'>Login</h2> */}

    </>

  )
}

export default Login
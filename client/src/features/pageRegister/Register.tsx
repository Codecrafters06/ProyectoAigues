import React, { FC } from 'react';
import { Layout } from '../../components'
import RegisterForm from './components/RegisterForm'

const Register: FC = () => {
  return (

    <>
      <div style={{ backgroundImage: `url('/backgroundRegister.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center items-center ">

        <RegisterForm />

      </div>
      {/* <h2 className='font-bold text-center text-sky-700'>Register</h2> */}

    </>

  )
}

export default Register
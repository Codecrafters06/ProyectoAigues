import React, { FC } from 'react';
import { Layout } from '../../components'
import RegisterComponent from './components/RegisterComponent'


const Register: FC = () => {
  return (
    <Layout>
      <RegisterComponent/>
      <h2 className='font-bold text-center text-sky-700'>Register</h2>

    </Layout>

  )
}

export default Register
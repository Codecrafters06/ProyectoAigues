import React, { FC } from 'react';
import { Layout } from '../../components'
import LoginComponent from './components/LoginComponent'


const Login: FC = () => {
  return (
    <Layout>
      <LoginComponent/>
      <h2 className='font-bold text-center text-sky-700'>Login</h2>

    </Layout>

  )
}

export default Login
import React, { FC } from 'react';
import { Layout } from '../../components'
import Hero from './components/Hero'


const Home: FC = () => {
  return (
    <Layout>
      <h1 className='font-bold text-center text-sky-700'>Home</h1>
      <Hero/>

    </Layout>

  )
}

export default Home
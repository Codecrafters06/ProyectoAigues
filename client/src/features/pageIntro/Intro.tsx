import React, { FC } from 'react';
import { Layout } from '../../components'
import IntroComponent from './components/IntroComponent'


const Intro: FC = () => {
  return (
    <Layout>
      <IntroComponent/>
      <h2 className='font-bold text-center text-sky-700'>Intro</h2>

    </Layout>

  )
}

export default Intro
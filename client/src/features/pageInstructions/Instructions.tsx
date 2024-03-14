import React, { FC } from 'react';
import { Layout } from '../../components'
import InstructionsComponent from './components/InstructionsComponent'


const Instructions: FC = () => {
  return (
    <Layout>
      <InstructionsComponent/>
      <h2 className='font-bold text-center text-sky-700'>Instructions</h2>

    </Layout>

  )
}

export default Instructions
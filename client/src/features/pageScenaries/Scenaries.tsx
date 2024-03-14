import React, { FC } from 'react';
import { Layout } from '../../components'
import ScenariesComponent from './components/ScenariesComponent'


const Scenaries: FC = () => {
  return (
    <Layout>
      <ScenariesComponent/>
      <h2 className='font-bold text-center text-sky-700'>Scenaries</h2>

    </Layout>

  )
}

export default Scenaries
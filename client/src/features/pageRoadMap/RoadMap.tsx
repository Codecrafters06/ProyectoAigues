import React, { FC } from 'react';
import { Layout } from '../../components'
import RoadMapComponent from './components/RoadMapComponent'


const RoadMap: FC = () => {
  return (
    <Layout>
      <RoadMapComponent/>
      <h2 className='font-bold text-center text-sky-700'>RoadMap</h2>

    </Layout>

  )
}

export default RoadMap
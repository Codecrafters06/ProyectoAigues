import React, { FC } from 'react';
import { Layout } from '../../components'
import StatusComponent from './components/StatusComponent'


const Status: FC = () => {
  return (
    <Layout>
      <StatusComponent/>
      <h2 className='font-bold text-center text-sky-700'>Status</h2>

    </Layout>

  )
}

export default Status
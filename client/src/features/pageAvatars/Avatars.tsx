import React, { FC } from 'react';
import { Layout } from '../../components'
import AvatarComponent from './components/AvatarComponent'


const Avatars: FC = () => {
  return (
    <Layout>
      <AvatarComponent/>
      <h2 className='font-bold text-center text-sky-700'>Avatars</h2>

    </Layout>

  )
}

export default Avatars
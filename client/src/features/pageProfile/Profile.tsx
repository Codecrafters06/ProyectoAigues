import React, { FC } from 'react';
import { Layout } from '../../components'
import ProfileComponent from './components/ProfileComponent'


const Profile: FC = () => {
  return (
    <Layout>
      <ProfileComponent/>
      <h2 className='font-bold text-center text-sky-700'>Profile</h2>

    </Layout>

  )
}

export default Profile
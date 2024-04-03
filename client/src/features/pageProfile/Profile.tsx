import React, { FC } from 'react';
import { Layout } from '../../components'
import ProfileComponent from './components/ProfileComponent'
// import Avatar from '/avatar1.png';
import ProfileForm from './components/ProfileForm';


const Profile: FC = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center bg-[#E3F1F7] h-full w-full'>
        <h2 className='font-bold text-center'>Mi Perfil</h2>
        <img src={'avatar1.png'} alt="avatar" />
        <ProfileComponent />
        <ProfileForm />
      </div>
    </Layout>

  )
}

export default Profile
import React, { FC } from 'react';
import { Layout } from '../../components'
import ProfileComponent from './components/ProfileComponent'
import Avatar from '../../assets/water-guardian.png';
import ProfileForm from './components/ProfileForm';


const Profile: FC = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center bg-[#E3F1F7] h-full w-full'>
      <h2 className='font-bold text-center'>Mi Perfil</h2>
       <img src={Avatar} alt="avatar" />
      <ProfileComponent/>
      <ProfileForm />
      </div>
    </Layout>

  )
}

export default Profile
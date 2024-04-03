import React, { FC } from 'react';
import Hero from './components/Hero'
import HomeButton from './components/HomeButton';
import Dropi from '../../assets/sonrriente-2.png';

const Home: FC = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-10 bg-bridge-image bg-cover h-screen w-full bg-no-repeat bg-center'>
      <Hero/>
      <img src={Dropi} alt="Dropi" />
      <HomeButton />
      </div>
    </>

  )
}

export default Home
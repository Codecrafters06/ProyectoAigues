import React, { FC, useState } from 'react';
import { Layout } from '../../components';
import AvatarComponent from './components/AvatarComponent';
import { Link } from 'react-router-dom'

const Avatars: FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  const handleAvatarClick = (avatarIndex: number) => {
    setSelectedAvatar(avatarIndex);
  };


  return (
    <Layout>
      <div className="h-screen relative flex flex-col items-center pt-20" style={{ backgroundImage: `url('/BackgroundBridgeBlur.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        <h2 className="font-bold text-center text-[#002F6C] bg-opacity bg-primary-70 h-auto w-72 mt-20 p-4 mb-20 bg-primary opacity-70 rounded-[10px] text-[14px]" style={{ zIndex: 2 }}>Escoge quién quieres ser</h2>
        <div className="flex justify-center items-center gap-4 flex-col font-bodyText" style={{ zIndex: 2 }}>


        <div className="flex flex-row items-center w-72 bg-primary opacity-70 rounded-[10px] text-[14px] relative" style={{ zIndex: 2 }}>
        <Link to="/scenaries-aqua">
              <AvatarComponent
              src="./avatar1.png"
              alt="Avatar 1"
              selected={selectedAvatar === 1}
              onClick={() => handleAvatarClick(1)}
              />
        </Link>
            <span className="text-center mt-2 font-inknut-antiqua" style={{ zIndex: 2 }}>Aqua, la guardiana del agua, una misteriosa figura que vela por la conservación de este recurso.</span>
          </div>


          <div className="flex flex-row items-center w-72 bg-primary opacity-70 rounded-[10px] text-[14px] relative" style={{ zIndex: 2 }}>
          <Link to="/scenaries-eco">
              <AvatarComponent
              src="avatar2.png"
              alt="Avatar 2"
              selected={selectedAvatar === 2}
              onClick={() => handleAvatarClick(2)}
            /></Link>
            <span className="text-center mt-2 font-inknut-antiqua" style={{ zIndex: 2 }}>Eco, un entusiasta que busca aprender y transmitir sobre la preservación del agua.</span>
          </div>


          <div className="flex flex-row items-center w-72 bg-primary opacity-70 rounded-[10px] text-[14px] relative" style={{ zIndex: 2 }}>
            <Link to="/scenaries-gotas">
              <AvatarComponent
              src="avatar3.png"
              alt="Avatar 3"
              selected={selectedAvatar === 3}
              onClick={() => handleAvatarClick(3)}
            /></Link>
            <span className="text-center mt-2 font-inknut-antiqua" style={{ zIndex: 2 }}>Dr. Gotas, un científico excéntrico que descubre los secretos del ciclo del agua.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Avatars;

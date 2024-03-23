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
      <div className="h-screen relative" style={{ backgroundImage: `url('/BackgroundBridgeBlur.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-white opacity-45" style={{ zIndex: 1 }}></div>
        <h2 className="font-bold text-center text-sky-700 pt-20 " style={{ zIndex: 2 }}>Escoge quién quieres ser</h2>
        <div className="flex justify-center items-center h-full flex-col" style={{ zIndex: 2 }}>
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col items-center relative" style={{ zIndex: 2,  borderRadius: 0  }}>
              <Link to="/trivia"><AvatarComponent
                src="./avatar1.jpg"
                alt="Avatar 1"
                selected={selectedAvatar === 1}
                onClick={() => handleAvatarClick(1)}
              /></Link>
              <span className="text-center mt-2 font-inknut-antiqua" style={{ zIndex: 2 }}>Aqua, la guardiana del agua, una misteriosa figura que vela por la conservación de este recurso.</span>
            </div>
            <div className="flex flex-col items-center relative" style={{ zIndex: 2 }}>
              <Link to="/trivia"><AvatarComponent
                src="avatar2.jpg"
                alt="Avatar 2"
                selected={selectedAvatar === 2}
                onClick={() => handleAvatarClick(2)}
              /></Link>
              <span className="text-center mt-2 font-inknut-antiqua" style={{ zIndex: 2 }}>Eco, un entusiasta que busca aprender sobre la preservación del agua y transmitir ese conocimiento a los demás.</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 relative" style={{ zIndex: 2}}>
          <Link to="/trivia"><AvatarComponent
              src="avatar3.jpg"
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

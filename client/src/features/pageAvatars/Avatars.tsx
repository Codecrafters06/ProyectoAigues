import React, { FC, useState } from 'react';
import { Layout } from '../../components';
import AvatarComponent from './components/AvatarComponent';

const Avatars: FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  const handleAvatarClick = (avatarIndex: number) => {
    setSelectedAvatar(avatarIndex);
  };

  
  return (
    <Layout>
      <div className="h-screen relative" style={{ backgroundImage: `url('/BackgroundBridgeBlur.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* <div className="absolute inset-0 bg-white opacity-45" style={{ zIndex: 1 }}></div> */}
        <h2 className="font-bold text-center text-sky-700 pt-10 pb-2" style={{ zIndex: 2 }}>Escoge quién quieres ser</h2>
        
        <section className="flex flex-row justify-center space-x-4 gap-4 items-center">

          <div className="flex flex-col items-center relative w-60" style={{ zIndex: 2, borderRadius: 0 }}>
            <AvatarComponent
              src="./avatar1.jpg"
              alt="Avatar 1"
              selected={selectedAvatar === 1}
              onClick={() => handleAvatarClick(1)}
            />
            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>Aqua, la guardiana del agua, una misteriosa figura que vela por la conservación de este recurso.</span>
          </div>


          <div className="flex flex-col items-center relative w-60" style={{ zIndex: 2 }}>
            <AvatarComponent
              src="avatar2.jpg"
              alt="Avatar 2"
              selected={selectedAvatar === 2}
              onClick={() => handleAvatarClick(2)}
            />
            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>Eco, un entusiasta que busca aprender sobre la preservación del agua y transmitir ese conocimiento a los demás.</span>
          </div>



        </section>
          <div className="flex flex-col items-center relative w-32" style={{ zIndex: 2 }}>
            <AvatarComponent
              src="avatar3.jpg"
              alt="Avatar 3"
              selected={selectedAvatar === 3}
              onClick={() => handleAvatarClick(3)}
            />
            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>Dr. Gotas, un científico excéntrico que descubre los secretos del ciclo del agua.</span>
          </div>
      </div>
    </Layout>
  );
};

export default Avatars;

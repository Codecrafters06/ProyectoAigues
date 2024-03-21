import React, { FC } from 'react';
import { Layout } from '../../components';
import InstructionsComponent from './components/InstructionsComponent';

const Instructions: FC = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center bg-bridge-image bg-cover h-screen w-full bg-no-repeat bg-center'>
        <div className='text-center p-5'>
          <p className="text-sm text-black font-bold mb-5">
            Respondiendo preguntas sobre la preservación del agua:
          </p>
          <ul className='list-disc list-inside m-1'>
            <li>Si respondes en un sólo intento ganas 2 gotas</li>
            <li>Si respondes en el segundo intento ganas 1 gota</li>
            <li>Si saltas la pregunta pierdes 1 gota</li>
          </ul>
          <p className='mt-5'>Completa desafíos y actividades interactivas en tu propio hogar para ganar gotas extras</p>
          <p className='mt-5'>Si compartes tu experiencia en las redes sociales y promueves el Museo entre amigos y familiares ganaras gotas extras</p>
          
          {/* Botón centrado al final */}
          <div className='mt-5 flex justify-center'>
            <button className='h-8 w-auto px-4 py-1 bg-cyan-700 text-white rounded-md'>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Instructions;

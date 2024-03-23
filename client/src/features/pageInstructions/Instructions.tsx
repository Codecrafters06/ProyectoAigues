import React, { FC } from 'react';
import { Layout } from '../../components';
import { Link } from 'react-router-dom'


const Instructions: FC = () => {
  return (
    <Layout>
      <div style={{ backgroundImage: `url('/BackgroundBridgeBlur.png')`}} className='flex items-center justify-center  bg-cover h-screen w-full bg-no-repeat bg-center'>
        <div className='text-center w-10/12'>
          <h1 className=" text-black font-bold mb-5">
            Respondiendo preguntas sobre la preservación del agua:
          </h1>
          <ul className='flex flex-col justify-center items-center list-disc list-inside m-1'>
            <li className='text-center font-semibold w-10/12'>Si respondes en un sólo intento ganas 2 gotas</li>
            <li className='text-center font-semibold w-10/12'>Si respondes en el segundo intento ganas 1 gota</li>
            <li className='text-center font-semibold w-10/12'>Si saltas la pregunta pierdes 1 gota</li>
          </ul>
          <p className='mt-5 font-semibold'>Completa desafíos y actividades interactivas en tu propio hogar para ganar gotas extras</p>
          <p className='mt-5 font-semibold'>Si compartes tu experiencia en las redes sociales y promueves el Museo entre amigos y familiares ganaras gotas extras</p>
          
          {/* Botón centrado al final */}
          <div className='mt-5 flex justify-center'>
            <Link to="/avatars"><button className='h-8 w-auto px-4 py-1 bg-cyan-700 text-white rounded-md'>
              Siguiente
            </button></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Instructions;

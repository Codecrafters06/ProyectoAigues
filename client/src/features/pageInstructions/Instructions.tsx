import React, { FC } from 'react';
import { Button, Layout } from '../../components'
import InstructionsComponent from './components/InstructionsComponent'


 const Instructions: FC = () => {
  return (
    <Layout>
      <InstructionsComponent/>
      <>
      <h2 className='font-bold text-center text-sky-700'>Instruciones</h2>
      <p className="text-center text-sm m-30 text-black-500 font-bold p-5 ">
      Respondiendo preguntas sobre la preservación del agua:
      <ul className='list-disc list-inside m-1 text-center'>
      <li>Si respondes en un sólo intento ganas 2 gotas</li>
      <li>Si respondes en el segundo intento ganas 1 gota</li>
      <li>Si saltas la pregunta pierdes 1 gota</li>
      </ul>
      <p className='m-5'>Completa desafíos y actividades interactivas en tu propio hogar para ganar gotas extras</p>
      <p className='m-5'>Si compartes tu experiencia en las redes sociales y promueves el Museo entre amigos y familiares ganaras gotas extras</p>
      </p>
      <Button>
       Siguiente
      </Button>
      </>
      
      


    </Layout>

  )
}

export default Instructions
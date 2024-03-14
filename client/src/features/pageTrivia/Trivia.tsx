import React, { FC } from 'react';
import { Layout } from '../../components'
import TriviaComponent from './components/TriviaComponent'


const Trivia: FC = () => {
  return (
    <Layout>
      <TriviaComponent/>
      <h2 className='font-bold text-center text-sky-700'>Trivia</h2>

    </Layout>

  )
}

export default Trivia
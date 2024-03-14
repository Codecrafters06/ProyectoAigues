import React, { FC } from 'react';
import { Layout } from '../../components'
import RankingComponent from './components/RankingComponent'


const Ranking: FC = () => {
  return (
    <Layout>
      <RankingComponent/>
      <h2 className='font-bold text-center text-sky-700'>Ranking</h2>

    </Layout>

  )
}

export default Ranking
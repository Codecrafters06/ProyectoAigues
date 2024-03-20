import React, { FC } from 'react';
import { Layout } from '../../components'
import RankingComponent from './components/RankingComponent'
import RankingButton from './components/RankingButton';


const Ranking: FC = () => {
  return (
    <Layout>
      <div className=' w-full h-screen bg-cover bg-[#5DCCFC] flex flex-col items-center'>
        <h2 className='font-bold text-center text-sky-700 p-4'>Ranking</h2>
        <RankingComponent/>
        <RankingButton />
      </div>
    </Layout>

  )
}

export default Ranking
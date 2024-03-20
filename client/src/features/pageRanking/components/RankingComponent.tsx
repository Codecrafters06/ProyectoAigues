import React, { FC } from 'react';
import Droplet from '../../../../../client/public/ph_drop-light.png'

const RankingComponent: FC = () => {
  return (
    <div className='flex items-center justify-around w-11/12'>
    <table className=' w-11/12'>
      <tr className='flex justify-around w-11/12'>
        <th className=' w-4/12'>rank</th>
        <th className=' w-4/12'>avatar</th>
        <th className=' w-4/12'>Usuario</th>
        <th className=' w-4/12'>points</th>
      </tr>
      <tr className='flex w-11/12 justify-around'>
        <td className=' h-8 flex justify-center items-center'>
        <div className=' flex justify-center items-end bg-[gold] shadow h-6 w-6 rounded-tl-0 rounded-tr-full rounded-bl-full rounded-br-full rotate-45 '>
          <div className=' -rotate-45'>1</div>
        </div>
        </td>
        <td><img src="" alt="avatar" />
        </td>
        <td>Usuario</td>
        <td>
          5000
        </td>
      </tr>
    </table>
    </div>
  )
}

export default RankingComponent
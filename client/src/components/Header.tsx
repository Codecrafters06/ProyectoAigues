import React, { FC } from 'react';
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <>
      <ul className="bg-blue-100 flex flex-row justify-around items-center h-12 w-full fixed z-50 opacity-80">
        <Link to="/instructions"><li><img src="quiz.png" alt="instructions"></img></li></Link>
        <Link to="https://codecrafters06.github.io/DropiAR/"><li><img src="ph_drop-light.png" alt="Aumented Reality"></img></li></Link>
        <Link to="/intro"><li><img src="home.png" alt="Intro"></img></li></Link>
        <Link to="/ranking"><li><img src="ranking-star.png" alt="Ranking"></img></li></Link>
        <Link to="/profile"><li><img src="homeavatar.png" alt="Profile"></img></li></Link>
      </ul>



    </>
  )
}

export default Header
import React, { FC } from 'react';
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <>
     <ul className="bg-blue-100 flex flex-row justify-around items-center h-24 w-full">
     <Link to="/instructions"><li><img src="quiz.png"></img></li></Link>
     <Link to=""><li><img src="ph_drop-light.png"></img></li></Link>
     <Link to="/intro"><li><img src="home.png"></img></li></Link>
     <Link to="/ranking"><li><img src="ranking-star.png"></img></li></Link>
     <Link to="/profile"><li><img src="homeavatar.png"></img></li></Link>
    </ul>        
    
    
    
    </>
  )
}

export default Header
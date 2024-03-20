import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <>
    <Link to="/login">
        <button className=' border-transparent border-3 px-14 py-3 rounded bg-[#06B9D3]'>Inicio</button>
    </Link>
    </>
  )
}

export default HomeButton
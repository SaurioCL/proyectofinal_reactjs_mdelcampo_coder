import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>

      <Link to={'/'}>

        <img id='logo' src="../public/assets/img/logo.png" alt="logo empresa"/>
      </Link>

      

        <ul>

          <li>  

            <NavLink to={'/'}>Inicio</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/Placas Madre'}>Placas Madre</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/Procesadores'}>Procesadores</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/Tarjetas de Video'}>Tarjetas de Video</NavLink>

          </li>

        </ul>

        <CartWidget/>

    </div>
  )
}

export default NavBar;
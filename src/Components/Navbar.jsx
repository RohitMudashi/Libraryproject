import React from 'react'
import '../styles/navbar.css'
import logoImg from '../Images/l3.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let loc = useLocation()
    let path = loc.pathname.startsWith("/adminportal");
  return (
   <>
   <div className="navbar">
    <div className="logo">
        <img src={logoImg} alt="" />
    </div>
    <div className="links">
       {path ?  (
        <>
         <ul>
            <li><Link to='/adminportal/'>HOME</Link></li>
            <li><Link to='/adminportal/books'>BOOKS</Link></li>
            <li><Link to='/adminportal/addbooks'>ADD BOOKS</Link></li>
            <li><Link to='/adminportal/users'>USERS</Link></li>
            <li><Link to='/adminportal/addusers'>ADD USERS</Link></li>
            <li><Link to='/'>LOGOUT</Link></li>
        </ul>
        </> ): (<>
         <ul>
         <li><Link to='/userportal/'>HOME</Link></li>
            <li><Link to='/userportal/books'>BOOKS</Link></li>
            <li><Link to='/userportal/users'>USERS</Link></li>
            <li><Link to='/'>LOGOUT</Link></li>
         </ul>
        </>)
       }
    </div>  
   </div>
   </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'
import {FaCarCrash} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' text-center ' style={{backgroundColor:"#F5F5F5"}}>
     <hr /> <div className='container mt-2 py-5 px-5 d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
         <div> 
          <Link to="/" className='lead text-decoration-none text-muted fs-3'><FaCarCrash /> Carpool</Link></div>
        </div>
        <div>
        <h3 className='lead fs-6 text-muted'>About</h3>
          <Link to="/aboutus" className='text-decoration-none' >About</Link><br />
          <Link to="/https://en.wikipedia.org/wiki/Carpool" className='text-decoration-none' >What is Carpool ?</Link>
        </div>
        <div className=''>
          <div>
            <h3 className='lead fs-6 text-muted'>Social Link</h3>
          </div>
          <Link to="https://github.com/tanuj830/carpool" className='text-dark hover:bg-danger'><BsGithub /></Link>
        </div>
      </div>
      <small className='py-2'>© 2022 Carpool</small>
    </div>
  )
}

export default Footer
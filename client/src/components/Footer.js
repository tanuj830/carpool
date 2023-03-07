import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'
import {FaCarCrash} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' text-center bg-black text-white'>
     <hr /> <div className='container mt-2 py-5 px-5 flex justify-between'>
        <div className='flex items-center'>
         <div> 
          <Link to="/" className=' flex items-center '><FaCarCrash /> <logo className="ml-1">Carpool</logo></Link></div>
        </div>
        <div>
          <Link to="/aboutus" className='text-decoration-none underline' >About</Link><br />
          <Link to="/https://en.wikipedia.org/wiki/Carpool" className='text-decoration-none underline' >What is Carpool ?</Link>
        </div>
        <div className=''>
          <div>
            <h3 className='lead fs-6 text-muted'>Social Link</h3>
          </div>
          <a href="https://github.com/tanuj830/carpool" className='flex items-center underline'><BsGithub /><p className='ml-1'>GitHub</p></a>
        </div>
      </div>
      <small className='py-2'>© 2022 Carpool</small>
    </div>
  )
}

export default Footer
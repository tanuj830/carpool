import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'
import {FaCarCrash} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-slate-100'>
    <hr/>
    <div className=' text-center bg-slate-100  text-black py-20 md:px-40 '>
      <div className=' mt-2 py-5 px-5 flex justify-between'>
        <div className='flex items-center'>
         <div> 
         <Link to="/" className=' flex items-center hover:text-slate-500'><FaCarCrash /> <logo className="ml-1 ">Carpool</logo></Link></div>
        </div>
        <div>
        <div className='mb-3'>
            <h3 className='lead fs-6 text-slate-400 '>About</h3>
          </div>
          <Link to="/https://en.wikipedia.org/wiki/Carpool" className='text-decoration-none underline hover:text-slate-500' >What is Carpool ?</Link>
        </div>
        <div className=''>
          <div className='mb-3'>
            <h3 className='lead fs-6 text-slate-400 '>Social Link</h3>
          </div>
          <a href="https://github.com/tanuj830/carpool" className='flex items-center underline hover:text-slate-500'><BsGithub /><p className='ml-1'>GitHub</p></a>
        </div>
      </div>
        <div className='relative'>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-80 animate-pulse bg-color1 top-0  left-5 rounded-full w-40 h-20'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color2 top-0 left-28 rounded-full w-40 h-20'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color3 top-12 bottom-8 left-20 rounded-full w-40 h-20'></div>
        </div>
    </div>
        <div className='py-8 text-center '>
        <small className='text-md'>© 2022 Carpoool.vercel.app</small>
        </div>
    </div>
  )
}

export default Footer
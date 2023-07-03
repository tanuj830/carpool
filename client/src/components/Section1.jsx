/// section 1: svg and 
import React from 'react'
import {Link} from 'react-router-dom'
// import {Image} from 'next/Image'
// import "../components/section.css"
import { useEffect, useState } from 'react'

const Section1 = () => {

  const [user, setUser] = useState()
  useEffect(() => {
    
    const userLogin = window.localStorage.getItem("isLogin")
    setUser(JSON.parse(userLogin))  
    
  },[])

  return (
    <div className='md:px-40 px-5 text-white'>
      
        <div className='flex justify-center flex-col-reverse lg:flex-row items-center'>
            <div className='w-full'>
              <h1 className='text-[20px] md:text-[42px] xl:text-[50px] text-white text-justify'>Enjoy rides and/or add your vehicle now</h1>
              <p className='text-[13px] md:text-[20px] xl:text-[18px]  text-slate-400 text-justify pt-2'>Carpooling is the sharing of car journeys so that more than one person travels in a car, and prevents the need for others to have to drive to a location themselves. </p>
            </div>
            <div className='md:p-20  lg:w-[90%]' style={{background:"url(https://pngtree.com/freepng/blue-curve-line-element_5342001.html)", backgroundRepeat:"no-repeat", backgroundSize:"cover", }}>
              <img className='' src="https://img.freepik.com/premium-photo/front-view-generic-brandless-modern-car_110488-532.jpg?size=626&ext=jpg&ga=GA1.1.1739072392.1687083813&semt=ais" alt="" />
            </div>
        </div>
          {/* svg */}
       
          {/* <img className='s1-img1 img-fluid' src="https://sride.co/wp-content/uploads/2019/06/sRide-Carpool-Bikepool-Ride-Sharing-Office-Ride-.svg" alt="" /> */}
    </div>
  )
}

export default Section1


{/* <div className='  flex justify-center'>
            <div className=' flex flex-col md:flex-row  justify-center items-center  mt-5'>
                <div className=''>
               

               
                               <img className='img-fluid' src="https://cdn.blablacar.com/kairos/assets/images/driver_masks-8bad4a96a1d6cbab177e..svg" alt="" />
                </div>
                {
                  user === "true" ? <div className='col'>
                  <div className='p-3 md:p-1'>
                  <h2 className=' text-3xl antialiased  text-slate-600'>Enjoy rides and/or add your vehicle now,</h2>
                  <button className='border mt-2 border-slate-400 rounded-full text-sm cursor-pointer px-5 py-2   uppercase hover:shadow-xl hover:bg-slate-100 transition duration-300 ease-out'><Link to="/search" className='antialiased ' >Explore</Link></button>
                  </div>
                  </div> 
                  : <div className='col'>
                  <h2 className=' text-3xl antialiased text-slate-6'>Enjoy rides and/or add your vehicle now,</h2>
                  <button className='border mt-2 border-slate-400 rounded-full text-sm cursor-pointer px-5 py-2   uppercase hover:shadow-xl hover:bg-slate-100 transition duration-300 ease-out'><Link to="/signin" className="text-decoration-none text-dark">Explore carpool now</Link></button>
                  </div> 
                }
                     
            </div>
        </div> */}
          
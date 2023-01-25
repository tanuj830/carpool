/// section 1: svg and 
import React from 'react'
import {Link} from 'react-router-dom'
import "../components/section.css"
import { useEffect, useState } from 'react'

const Section1 = () => {

  const [user, setUser] = useState()
  useEffect(() => {
    
    const userLogin = window.localStorage.getItem("isLogin")
    setUser(JSON.parse(userLogin))  
    
  },[])

  return (
    <div className=''>
     <img className='s1-img1 img-fluid' src="https://sride.co/wp-content/uploads/2019/06/sRide-Carpool-Bikepool-Ride-Sharing-Office-Ride-.svg" alt="" />
        <div className='s1-div1 container d-flex justify-content-center'>
            <div className='row'>
                <div className='col'>
               

               
                               <img className='img-fluid' src="https://cdn.blablacar.com/kairos/assets/images/driver_masks-8bad4a96a1d6cbab177e..svg" alt="" />
                </div>
                {
                  user === "true" ? <div className='col'>
                  <h2>Enjoy rides and/or add your vehicle now,</h2>
                  <button className='button mt-2'><Link to="/api/search" className="text-decoration-none text-dark">Explore carpool</Link></button>
                  </div> 
                  : <div className='col'>
                  <h2>Enjoy rides and/or add your vehicle now,</h2>
                  <button className='button mt-2'><Link to="/api/signin" className="text-decoration-none text-dark">Explore carpool now</Link></button>
                  </div> 
                }
            </div>
        </div>
          {/* svg */}
       

    </div>
  )
}

export default Section1
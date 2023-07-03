import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
// import "./section.css"

const Section3 = () => {

    return (
        <div className=' p-5 mt-40 ' >
{/* bg-gradient-to-tr from-slate-900 via-black to-black text-white */}
<div className='row mb-5'>
<div className='col text-center'>
<h3 className=' text-[20px] md:text-[42px] xl:text-[50px] text-white text-center' >Why Carpool ?</h3>




</div>
</div>
            <div className='flex justify-around pt-10'>
                <div className=''>
                <div className='  flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <img className='w-20 rounded-full'  src="./images/eco.gif" alt="" />
                    </div>
                    <p className='text-center mt-3  lead'>          Eco-friendly</p>
</div>
                </div>

                <div className=''>
                <div className='  flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <img className='w-20 rounded-full ' src="./images/cost.gif"/>
                    </div>
                     <p className=' text-center mt-3 text-muted lead'>          Minimum cost</p>
</div>
                </div>

                <div className=''>
                <div className=' flex flex-col items-center justify-center'>
                <div className='text-center'>
                    <img className='w-20 rounded-full'  src="./images/three-friends.gif" />
                    </div>
                     <p className=' text-center mt-3 text-muted lead'>          Interactions with new peoples</p>
</div>
                </div>

                <div className=''>
                <div className='  flex flex-col items-center justify-center'>
                    <div className='text-center'>
                    <img className='w-20 rounded-full'  src="./images/easy-to-use.gif" alt="" />
                    </div>
     <div>
     <p className='text-center mt-4 text-muted lead '>          No complications </p>
     </div>
</div>
                </div>
            </div>
        </div>
      )
    }

export default Section3
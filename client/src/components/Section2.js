import React from 'react'

const Section2 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-2 md:px-40 text-xl' style={{marginTop:15}}>

      <div className=''>
<div className='col-md-6 col-sm-12 mt-5'>
<h2 className='text-3xl font-bold'>What is CarPool ?</h2>
        <p className='mt-4 text-muted lead'>CarPool is an eco-smart option for handling all your travel needs by connecting you with fellow professional riders. As our cities are growing, increased traffic adds to the chaos and pollution. </p>



        <div className='relative '>
            <div className='absolute mix-blend-multiply filter blur-2xl animate-pulse opacity-90 bg-color1 top-0  -left-4 rounded-full w-60 h-60'></div>
            <div className='absolute mix-blend-multiply filter blur-2xl animate-pulse opacity-60 bg-color2 -top-0 left-28 rounded-full w-60 h-60'></div>
            <div className='absolute mix-blend-multiply filter blur-2xl animate-pulse opacity-60 bg-color3 -top-24 -bottom-8 left-20 rounded-full w-60 h-60'></div>
        </div>
<p className='mt-2'>Hence, we have committed to providing a convenient, economical and sustainable solution to this problem through carpooling and bike pooling.</p>

      </div>
</div>
<div className=''>
         
<img className='w-100'  
src="https://img.freepik.com/free-vector/carpool-concept-illustration_114360-9298.jpg"/>
</div>

    </div>
  )
}

export default Section2
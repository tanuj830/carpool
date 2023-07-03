import React from 'react'

const Section2 = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center px-6 md:px-40  text-slate-600' style={{marginTop:15}}>

<div className='lg:w-[50%] flex'>
         
<img className=' rounded-bl-full w-full'  
src="https://img.freepik.com/premium-photo/studio-shot-black-car-3d-illustration_68747-326.jpg?size=626&ext=jpg&ga=GA1.2.1739072392.1687083813&semt=ais"/>
</div>

      <div className='lg:w-[50%]'>
<div className='col-md-6 col-sm-12 mt-5'>
<h2 className='text-[20px] md:text-[42px] xl:text-[50px] text-white text-justify'>What is CarPool ?</h2>
        <p className='text-[13px] md:text-[20px] xl:text-[18px]  text-slate-400 text-justify pt-2'>CarPool is an eco-smart option for handling all your travel needs by connecting you with fellow professional riders. As our cities are growing, increased traffic adds to the chaos and pollution. </p>



        <div className='relative '>
            <div className='absolute mix-blend-multiply filter blur-2xl animate-pulse opacity-90 bg-color1 top-0  -left-4 rounded-full w-60 h-60'></div>
            <div className='absolute mix-blend-multiply filter blur-2xl animate-pulse opacity-60 bg-color2 -top-0 left-28 rounded-full w-60 h-60'></div>
            <div className='absolute mix-blend-multiply filter blur-2xl animate-pulse opacity-60 bg-color3 -top-24 -bottom-8 left-20 rounded-full w-60 h-60'></div>
        </div>
<p className='text-[13px] md:text-[20px] xl:text-[18px]  text-slate-400 text-justify pt-2'>Hence, we have committed to providing a convenient, economical and sustainable solution to this problem through carpooling and bike pooling.</p>

      </div>
</div>


    </div>
  )
}

export default Section2
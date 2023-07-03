import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'

const Home = () => {
  return (
    <div style={{  scrollBehavior:"smooth"}}>
        <Navbar />
        <Section1/>
        <Section2/>
        <Section3/>
        <div className='flex text-white mt-36 lg:px-40 px-7'>
          <div>
          <h2 className='text-[20px] md:text-[42px] xl:text-[50px] text-white text-justify'>Explore and find your desired ride at low cost.</h2>
          <button className='px-4 py-2 border border-white text-white hover:bg-white rounded-lg mt-6 hover:text-black transition-all duration-200'>Explore all rides</button>

          </div>
      {/* <img className='w-[30%]' src="https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car-with-fire-smoke_110488-1759.jpg?size=626&ext=jpg&ga=GA1.1.1739072392.1687083813&semt=ais"/>
      <img className='w-[30%]' src="https://img.freepik.com/free-photo/silhouette-black-sports-car-with-headlights-black-background_181624-58524.jpg?size=626&ext=jpg&ga=GA1.1.1739072392.1687083813&semt=ais"/> */}
      <img className='' src="https://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg?size=626&ext=jpg&ga=GA1.1.1739072392.1687083813&semt=ais"/>
      </div>
        {/* <Section4/> */}
        <Footer/>
    </div>
  )
}

export default Home
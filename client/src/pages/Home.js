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
        {/* <Section3/> */}
        {/* <Section4/> */}
        <Footer/>
    </div>
  )
}

export default Home
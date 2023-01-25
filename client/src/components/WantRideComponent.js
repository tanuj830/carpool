import React from 'react'
import axios from "axios"
import AvailableVechiles from './AvailableVechiles'
import {Link} from 'react'

const WantRideComponent = () => {
  
      const [data, setData] = React.useState({})
  
      const [availableRides, setAvailableRides] = React.useState([])
  
      const handleChange = (e) =>{
  
        const name = e.target.name
        const value = e.target.value
  
        setData({...data,[name]:value})
      }

      const handleSubmit = (e) =>{

        e.preventDefault();
        axios.get("/api/search", { params:
         {
           source:`${data.source}`,
           des:`${data.des}`
          }
        }).then((res)=>setAvailableRides(res.data)).catch((err)=>(console.log("err")))
      }

  return (

    <div className=' text-center' style={{marginTop:200}}>
        <div className='mt-5'>
            <h1> Make your ride now,</h1>
           <form action="GET" onSubmit={e=>handleSubmit(e)}>
           <input type="text" autoComplete='off' className='px-3 py-1 rounded mt-1 mx-1' name = 'source' onChange={(e)=>handleChange(e)} placeholder='From' />
           <input type="text" autoComplete='off' className='px-3 py-1 rounded mt-1 mx-1' name = 'des' onChange={(e)=>handleChange(e)} placeholder='To' />
            <button className='btn btn-dark mb-1 mx-1'>Go</button>
           </form>
        </div>

 

    <div className='mt-5'>
      <AvailableVechiles data = {availableRides} />
    </div>


    </div>
  )
}

export default WantRideComponent

            {/* <AvailableVechiles data = {i}/> */}

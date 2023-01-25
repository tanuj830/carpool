import React from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import SettingNavbar from "./SettingNavbar"


const GetDetails = () => {

    const idobj = useParams()
    const id = idobj.id;

    const [data, setData] = React.useState({})
   

    useEffect(() => {

        axios.get(`http://localhost:8000/search/details/${id}`).then(res=>setData(res.data)).catch(err=>console.log(err))

       
    }, [])
    

  return (
<>

{/* <SettingNavbar/> */}
    <div className='container'>
     <div className='row text-center mt-5'>
    <div className='col'>
    <h3>Details</h3> <hr />
    </div>
     </div>


     <div className='row mt-3 text-center'>
        <div className='col'>
            <h5 className=''>{data.disp}</h5>
        </div>
     </div>

     <div className='row mt-5'>
        <div className='col'>
            <p className='text-capitalize'>Name: {data.name} ({data.gender})</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>source: {data.source}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>destination: {data.des}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>total distance: {data.dist_S_to_D}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>expected time: {data.time}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>vechile: {data.vechileName}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>total seat: {data.totalSeat}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>seat left: {data.seatLeft}</p>
        </div>
     </div>

     
     <div className='row mt-1'>
        <div className='col'>
            <p className='text-capitalize'>Phone number: {data.phone}</p>
        </div>
     </div>

<button className='px-3 py-1 rounded btn btn-primary'>Book now at ₹{data.charge}</button>
    </div>
</>
  )
}

export default GetDetails
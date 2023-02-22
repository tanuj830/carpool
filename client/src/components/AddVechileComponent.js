import React from 'react'
import "../components/addvechilecomponent.css"
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const AddVechileComponent = () => {

  const [data, setData] = React.useState({})
  const [user, setUser] = React.useState()
  const [userData, setUserData] = React.useState({})
  const [vechileID, setVechileID] = React.useState()
  const [tempData, setTempData] = React.useState({name: "", phone: ""})




  useEffect(() => {
    // deleting unnecessary data
    axios.delete("/addvechile").then(res=>console.log(res.send)).catch(err=>console.log(err)) //3
 }, [])

  const handleSubmit = (e) =>{

    e.preventDefault()

axios.post("https://carpool-dhfy.onrender.com/addvechile",data).then(res=>setVechileID(res)).catch((err)=>console.log(err))// 1
// console.log(data)


// updating vechile schema
axios.put(`https://carpool-dhfy.onrender.com/addvechile/${vechileID.data}`, userData).then(res=>console.log(res.data)).catch(err=>console.log(err)) //2
console.log("end")



window.location.href = "/"
  }

  
  useEffect(() => {
    
    const userLogin = window.localStorage.getItem("isLogin")
    setUser(JSON.parse(userLogin))  

    // getting users data
    axios.get(`/signin/${JSON.parse(window.localStorage.getItem("userid"))}`).then(res=>setUserData(res.data)).catch(err=>console.log(err))


  })




  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value});
  }

  return (
   <>
   {
    user === "true" ?  <div className='form container mb-5 gx-5'>
    <div className='row mb-3  ' style={{marginTop:100}}>
    <h3>Add your vechile</h3>
    </div>

     <form action="POST" onSubmit={e=>handleSubmit(e)}>
 
      <div className='row my-3'>
      <label>Source</label>
       < input autoComplete='off' name='source' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>
      
      <div className='row my-3'>
      <label>Destination</label>
       < input autoComplete='off' name='des' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Charge(<small className='font-italic'>in rupees</small>)</label>
       < input autoComplete='off' name='charge' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>


      <div className='row my-3'>
      <label>Gender</label>
      <select onClick={handleChange} name="gender" >
        <option  value="male">Male</option>
        <option  value="female">Female</option>
        <option  value="others">Others</option>
      </select>
      </div>

      <div className='row my-3'>
      <label>Discription</label>
       < input autoComplete='off' name='disp' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Distance from source to destination( in km)</label>
       < input autoComplete='off' name='dist_S_to_D' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Expected time</label>
       < input autoComplete='off' name='time' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Vechile name</label>
       < input autoComplete='off' name='vechileName' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Aadhar number or driving license</label>
       < input autoComplete='off' name='id' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Seat left</label>
       < input autoComplete='off' name='seatLeft' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>total seat</label>
       < input autoComplete='off' name='totalSeat' onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />
      </div>

      <div className='row my-3'>
      <label>Address</label>
       < input autoComplete='off' name="add" onChange={e=>handleChange(e)} className='inputtext w-100 py-2 bg-light' type="text" />

       <button className='btn btn-primary mt-5 p-2'>Submit</button>
       <p className='' style={{fontSize:14, color:"red"}}>Double click to submit</p>
      </div>
     </form>
</div>
: null
   }
   <Footer />
   </>
  )
}

export default AddVechileComponent









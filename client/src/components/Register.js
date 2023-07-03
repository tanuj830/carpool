import React, { useEffect } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
// import { replaceOne } from '../../../server/models/UserModel'
import {Link} from "react"

const Register = () => {

const [data, setData] = React.useState([])
const [navigate, setNavigate] = React.useState()


const handleChange=(e)=>{
const value = e.target.value
const name = e.target.name

setData({...data,[name]:value})
}
const Navigate = useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault()

  axios.post("https://carpool-dhfy.onrender.com/signin/register", data).then(res=>setNavigate(res.data)).catch(err=>console.log(err))

//  window.location.reload()
}
useEffect(() => {
  navigate === "true" ? Navigate(-1) : <p>unable to register</p>
}, [navigate])


  return (
    <div className=" ">
    <div className="items-center flex justify-center h-[100vh]">
      <div >
        <form
          className=" md:mt-4  flex justify-center md:flex-row flex-col p-4 md:p-0 items-center text-center lead"
          action="post"
          onSubmit={handleSubmit}
        >
          <div>
            <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-standing-near-user-interface_268404-96.jpg?size=626&ext=jpg"/>
          </div>
          <div className=' md:mt-10 hover:shadow-lg transition-all duration-700 flex flex-col border border-[gainsboro] rounded-3xl md:w-[50%] w-full md:px-10 px-4 md:py-6 py-5'>
          <div>
            <h3 className='text-start mt-4'>Register Yourself!</h3>
            <h6 className='text-start text-xs text-stone-500 mt-1'>Create account and get the access to use this platform <br/>and it's absolutely free.</h6>
          </div>
          <div className='mt-2'>
            <input
              type="text"
              name="name"
              className="px-3 mt-3 py-2 lead w-full border-b outline-none"
              style={{fontSize:16}}
              placeholder="Name"
              autoComplete="off"
              onChange={handleChange} 
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="px-3 mt-3 py-2 lead w-full border-b outline-none"
              style={{fontSize:16}}
              placeholder="E-mail"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="phone"
              className="px-3 mt-3 py-2 lead w-full border-b outline-none"
              style={{fontSize:16}}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="mt-3 d-flex flex-column">
            <div>
              {/* <label className="mx-2">Password</label> */}
              <input
                type="password"
                className="px-3 py-2 lead w-full border-b outline-none"
                style={{fontSize:16}}
                placeholder="Password"
                name="password"
                autoComplete="off"
                onChange={handleChange}
              />

            </div>
            <div></div>
         
          <button className=" mt-3 px-5 rounded-xl py-2 bg-black btn text-white">
            Create Account
          </button>
        
          </div>

          </div>
          
        </form>
      </div>
    </div>
  </div>

    )
}

export default Register
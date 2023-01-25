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

  axios.post("http://localhost:8000/signin/register", data).then(res=>setNavigate(res.data)).catch(err=>console.log(err))

//  window.location.reload()
}
useEffect(() => {
  navigate === "true" ? Navigate(-1) : <p></p>
}, [navigate])


  return (
    <div className="mt-5">
    <div className="d-flex justify-content-center">
      <div className="p-5 shadow" style={{ borderRadius: 10 }}>
        <div className="text-center">
          <h1>
            <b>Register</b>
          </h1>
          <hr />
        </div>
        <form
          className=" mt-4 d-flex-column text-center lead"
          action="post"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              name="name"
              className="px-3 mt-3 py-2 lead"
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
              className="px-3 mt-3 py-2 lead"
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
              className="px-3 mt-3 py-2 lead"
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
                className="px-3 py-2 lead"
                style={{fontSize:16}}
                placeholder="Password"
                name="password"
                autoComplete="off"
                onChange={handleChange}
              />

            </div>
            <div></div>
         
          <button className=" mt-3 btn btn-primary btn text-light">
            Register
          </button>
        
          </div>

          
        </form>
      </div>
    </div>
  </div>

    )
}

export default Register
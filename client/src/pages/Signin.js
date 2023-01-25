import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
const Signin = () => {


    const [userInfo, setUserInfo] = React.useState({})
    const [wrongCredentials, setWrongCredentials] = React.useState("false")
    const [wrongCredentialsUtil, setwrongCredentialsUtil] = React.useState("false")
    const [user, setUser] = React.useState(false)

    const [result, setResult] = React.useState({})
    const handleSubmit = (e) =>{ 
        e.preventDefault();
        axios.post("/api/signin",userInfo).then(res=> setResult(res.data)).catch(err=>(console.log(err)))
        setwrongCredentialsUtil("true")

}
const navigate = useNavigate()
useEffect(() => {
        console.log(result._id)
        window.localStorage.setItem("userid",JSON.stringify(result._id))

        // if user exist then do this, vice versa
        if(result._id)
        {
            const t = "true";
            window.localStorage.setItem("isLogin",JSON.stringify(t))
            navigate("/");
        }
        else{
            const f = "false"
            window.localStorage.setItem("isLogin",JSON.stringify(f))

        }
    }, [result])
    

    const handleChange = (e) =>{

        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({...userInfo,[name]:value})
    }

  return (

<div className="mt-5">
<div className="d-flex justify-content-center">
  <div className="p-5 shadow" style={{ borderRadius: 10 }}>
    <div className="text-center">
      <h1>
        <b>Log-in</b>
      </h1>
      <hr />
    </div>
    {
      wrongCredentials==="false" && wrongCredentialsUtil === "true" ? <h1 className='lead text-danger'>Wrong credentials</h1>:null
    }
    <form action="post" onSubmit={handleSubmit}>
            <div className='d-flex flex-column'>
                <input className='my-2 px-4 py-2' type="email" autoComplete='off' name='email' onChange={handleChange} placeholder='E-mail' />
                <input className='my-2 px-4 py-2' type="password" autoComplete='off' name='password' onChange={handleChange} placeholder='Password' />
                <button className='btn btn-primary'> Submit </button>
            </div>
               <div>
               <Link to="/api/signin/register">create account </Link>
               </div>
        </form>
  </div>
</div>
</div>
  )
}

export default Signin




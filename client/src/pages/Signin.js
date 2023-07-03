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
        axios.post("https://carpool-dhfy.onrender.com/signin",userInfo).then(res=> setResult(res.data)).catch(err=>(console.log(err)))
        setwrongCredentialsUtil("true")
        
      }
      const navigate = useNavigate()
      useEffect(() => {
        console.log(result.userexist)
        if(result.userexist)
        window.localStorage.setItem("userid",result.userexist._id)
        
        window.localStorage.setItem("token",result.token)


        // if user exist then do this, vice versa
        if(result.userexist && result.userexist._id)
        {
            // const t = "true";
            window.localStorage.setItem("isLogin",true)
            navigate("/");
        }
        else{
            // const f = "false"
            window.localStorage.setItem("isLogin",false)

        }
    }, [result])
    

    const handleChange = (e) =>{

        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({...userInfo,[name]:value})
    }

  return (
<>
<div className="mt-5">
<div className="flex items-center mt-6  md:mt-40 justify-center">
  <div className="md:px-20 px-14 py-6 shadow-xl" style={{ borderRadius: 10 }}>
    <div className="text-center mb-2">
      <h1>
        <h1 className='uppercase'>Log-in</h1>
      </h1>
      <hr />
    </div>
    {
      wrongCredentials==="false" && wrongCredentialsUtil === "true" ? <h1 className='lead text-red-700'>Wrong credentials</h1>:null
    }
    <form action="post" className='mt-4' onSubmit={handleSubmit}>
            <div className='flex justify-center flex-col'>
                <div>
                <input className=' border-b border-slate-300 px-4 py-1 mt-4 hover:border-slate-900' type="email" autoComplete='off' name='email' onChange={handleChange} placeholder='E-mail' />
                </div>
                <div>
                <input className='border-b border-slate-300 px-4 py-1 mt-4 hover:border-slate-900' type="password" autoComplete='off' name='password' onChange={handleChange} placeholder='Password' />
                </div>
                <button className='border rounded-sm mt-4 border-slate-800 uppercase'> Submit </button>
            </div>
               <div className='text-center'>
               <Link to="/signin/register" className='text-blue-700 text-xs'>create account </Link>
               </div>
        </form>
  </div>
</div>
</div>
      <div className='relative '>
          <div className='absolute mix-blend-multiply filter blur-lg opacity-80 animate-pulse bg-color1 top-0  left-5 rounded-full w-60 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color2 top-0 left-28 rounded-full w-60 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-30 animate-pulse bg-color3 top-12 bottom-8 left-20 rounded-full w-60 h-40'></div>
        </div>
        </>
  )
}

export default Signin




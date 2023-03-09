import React,{useEffect} from 'react'
import axios from 'axios'
import "./section4.css"

const Section4 = () => {
  

    const [data, setData] = React.useState([])
    const [Result, setResult] = React.useState([])
    // const [Result2, setResult2] = React.useState([])

useEffect(() => {
  
    axios.get("https://carpool-dhfy.onrender.com/signin").then(res=>setResult(res.data)).catch(err=>console.log(err)) // it has info of user who wrote that and review
    
}, [])

const handleSubmit=(e)=>{
    e.preventDefault()

    const id = JSON.parse(window.localStorage.getItem("userid"))
    
    axios.put(`https://carpool-dhfy.onrender.com/${id}`,data).then(res=>console.log(res.data)).catch(err=>console.log(err))// review added string coming as a response
// window.location.reload()
  }

const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value})
}
// console.log(Result)
  return (
    <div className='container px-3 md:px-10' style={{marginBottom:30}}>
  
        <div className='my-5'>
        <div className='row'>
<div className='text-center'>
<p className='text-2xl font-bold'>WHAT PEOPLE SAY ABOUT US!</p>

</div>

<div className='grid md:grid-cols-3 mt-7 sm:grid-cols-1 gap-4 'style={{}}>
{
    Result.map(i => {
      if(i.customerReview === "false")
      {
        console.log(i)
       return null
      }
      else{
        
     return( <div className='text-slate-500 text-lg'>
      <div className="py-4 rounded-xl bg-slate-100 transition duration-1000 hover:shadow-2xl" >
    <div className='flex justify-center items-center mt-3 '>  <img src={i.file} className="rounded-full w-24 object-cover" style={{borderRadius:100}} alt="..."/></div>
      <div className="card-body">
        <h6 className="uppercase mt-3 font-bold text-center " style={{ fontWeight:500}}>{i.name}</h6>
        <p className="text-center mt-4 px-4 text-muted" style={{ fontWeight:400}}>{i.customerReview}</p>
      </div>
    </div>
  </div>)
      }
})
}
</div>
<div className='text-center mt-5'>
<form action="post" className='' onSubmit={handleSubmit}>
<input type="text" autoComplete='off' name="customerReview" className='px-2 py-2 textinput' style={{borderRadius:4}} onChange={handleChange} placeholder='Write your review' />
 <button className='' style={{borderRadius:100, width:10,height:10,border:"none"}} ><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="mx-1 add-icon bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></button>
 
</form>
</div>
        </div>
        </div>
    </div>
  )
}

export default Section4
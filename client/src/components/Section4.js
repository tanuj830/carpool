import React,{useEffect} from 'react'
import axios from 'axios'
import "./section4.css"

const Section4 = () => {
  

    const [data, setData] = React.useState([])
    const [Result, setResult] = React.useState([])
    // const [Result2, setResult2] = React.useState([])

useEffect(() => {
  
    axios.get("/api/signin").then(res=>setResult(res.data)).catch(err=>console.log(err)) // it has info of user who wrote that and review
    
}, [])

const handleSubmit=(e)=>{
    e.preventDefault()

    const id = JSON.parse(window.localStorage.getItem("userid"))
    
    axios.put(`/${id}`,data).then(res=>console.log(res.data)).catch(err=>console.log(err))// review added string coming as a response
window.location.reload()
  }

const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value})
}
// console.log(Result)
  return (
    <div className='container-fluid' style={{marginBottom:300}}>
    <hr />
        <div className='my-5'>
        <div className='row'>
<div className='text-center'>
<p className='text-muted lead'>WHAT PEOPLE SAY ABOUT US!</p>

</div>

<div className='row  mx-auto'style={{}}>
{
    Result.map(i => {
      if(i.customerReview === "false")
      {
        console.log(i)
       return null
      }
      else{
        
     return( <div className='col-md-4 col-sm-12 mt-2'>
      <div className="card" >
    <div className='text-center mt-3 '>  <img src={i.file} className="card-img-top img-fluid w-25" style={{borderRadius:100, height:"auto"}} alt="..."/></div>
      <div className="card-body">
        <h6 className="text-capitalize text-muted card-title text-center lead" style={{ fontWeight:500}}>{i.name}</h6>
        <p className="card-text mt-4 text-muted lead" style={{fontSize:14, fontWeight:400}}>{i.customerReview}</p>
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
        <hr/>
    </div>
  )
}

export default Section4
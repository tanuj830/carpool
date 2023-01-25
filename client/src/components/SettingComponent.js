import axios from 'axios'
import React from 'react'
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import uploads from "../"
const SettingComponent = () => {
  
  const [userData, setUserData] = React.useState([])
  const [i, setI] = React.useState()

  const [progresspercent, setProgresspercent] = React.useState(0);
  const [file, setFile] = React.useState({})
  const [imgUrl, setImgUrl] = React.useState({})


useEffect(() => {
  
  var userid = JSON.parse(window.localStorage.getItem("userid"))
  axios.get("/api/settings/data",{params:
{
  id: userid
}})
.then(res=>setUserData(res.data)).catch(err=>console.log(err))



}, [])

useEffect(() => {
  
  handleSubmit(file)
}, [file])



const handleSubmit = (file) =>{
  // e.preventDefault()
  
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgresspercent(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadedUrl) => {
        setImgUrl({file:downloadedUrl})
      });
    }
  );
const id = JSON.parse(window.localStorage.getItem("userid"))
    axios.put(`/api/settings/${id}`, imgUrl).then(res=>console.log(res.data)).catch(err=>console.log(err))
}


  return (
    <div className='container py-5  justify-content-between'>
      
      <div className=''>
       
      <div className=' d-flex flex-column '>
  
      
  <img className=' img-fluid' src={userData.file} style={{borderRadius:1000, width:"120px", height:"116px"}}/>
{
  progresspercent > 1 ? <small className='lead  ' style={{fontSize:13}}> <span className='bg-light px-3 py-1 text-muted'>{progresspercent}% uploaded</span></small>: null
}
          <h3 className='mx-2 my-3 text-capitalize lead'>  {userData.name}</h3>     
      </div>
    <label className='lead'>Choose new profile picture:</label>
    <div className='my-3'>

    </div>
<form action='post'  onSubmit={handleSubmit} >
<input name="file" onChange={e=>setFile(e.target.files[0])} type="file" />
<div>
<button className='mt-2 btn btn-outline-primary lead'>upload</button>
</div> 
  </form>     
      </div>



      <div className='mt-3'>
<hr/>
<h5 className='lead text-center mb-'>User details</h5>
      <div className='d-flex  align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
         </svg>
        <p className='text-primary mt-3 mx-2 lead'>{userData.email}</p>
      </div>
      <div className='d-flex align-items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg>
      <p className='text-mutted mt-2 mx-2 lead'>{userData.phone}</p>
      </div>
      </div>
      <hr/>
  </div>
  )
}

export default SettingComponent
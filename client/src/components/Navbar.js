import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCarCrash } from "react-icons/fa";


const Navbar = () => {

  const [user, setUser] = useState("")


  useEffect(() => {
  const userLogin = JSON.parse(window.localStorage.getItem("isLogin"))
    setUser(userLogin)  
    
  },[user])


  return (
<>
<div className="py-3 w-full text-white">
    <div className="px-2 md:px-20 flex items-center w-full    flex-col ">
        <div className="w-full flex justify-between items-center">
        <div className="">
        <Link className="text-xl hover:text-slate-50 flex items-center text-decoration-none" to="/">
            <div className="mx-1"><h1 className="fs-2"><FaCarCrash /></h1></div>
            <div><h1 className="">Carpool</h1></div>
        </Link>
        </div>
        <div className="flex items-center justify-end ml-12 md:ml-16">
              <Link className=" mr-2" to="/settings">
              <button className="fs-5  px-3 py-2 text-xs  border border-slate-500 transition duration-500 ease-in-out hover:shadow-xl uppercase hover:text-slate-900  hover:bg-slate-100 rounded-md text-white  ">Settings</button>
              </Link>
              {
               user === true ? 
               <Link
                 to="/signin"
                 className=" px-3 py-2 text-xs border border-slate-500 transition duration-500 ease-in-out hover:shadow-xl hover:text-slate-900  hover:bg-slate-100 text-white  rounded-md "
               >
               <button className="uppercase ">Sign-out</button>
               </Link>
             :
             <Link
               to="/signin"
               className=""
           >
            <button className=" px-3 py-2 text-xs  border border-slate-500 transition duration-500 ease-in-out hover:shadow-xl hover:text-slate-900 hover:bg-slate-100 text-white rounded-md">Sign-in</button>
         </Link>
          }
        </div>
        </div>

        <div className="flex items-center jutify-center mt-2">
        <div className="flex items-center justify-center">
            <Link className=" mr-3 md:mr-5 " to="/aboutus">
        <button className=" uppercase md:text-lg text-sm hover:text-slate-400">About</button>
        </Link>
       <Link className="  " to="/addvechile">
        <button className=" mr-3 md:mr-5 uppercase md:text-lg text-sm hover:text-slate-400">add vechile</button>
        </Link>
       <Link className=" mr-3 md:mr-5 " to="/search">
        <button className=" uppercase md:text-lg text-sm hover:text-slate-400">Search Destination</button>
        </Link>
       </div>
        </div>
    </div>
       <div className='relative'>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-80 animate-pulse bg-color1 top-0  left-5 rounded-full w-40 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-40 animate-pulse bg-color2 top-20 left-40 rounded-full w-40 h-40'></div>
            <div className='absolute mix-blend-multiply filter blur-lg opacity-40 animate-pulse bg-color3 top-40 bottom-8 left-20 rounded-full w-40 h-40'></div>
        </div>
   
</div>













{/* 

<div className="navbarDiv p-2 for-mobile text-blue-900">
  
<nav className="  navbar  navbar-expand-sm object-fluid">
       <div className="container">
      

       <Link className="d-flex align-items-center text-decoration-none" to="/">
            <div className="mx-1"><h1 className="fs-2"><FaCarCrash /></h1></div>
            <div><h1 className="hov lead fs-4">Carpool</h1></div>
        </Link>
        
         <button
          className="ms-auto navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#id1"
        >
           <span className="navbar-toggler-icon"></span>
        </button>
        <div
           className="collapse navbar-collapse"
           
           id="id1"
         >
           <span>
             <ul className="navbar-nav">
               <li className="navbar-item">
               <Link className="text-decoration-none" to="/aboutus">
        <h1 className="lead fs-5">About</h1>
        </Link>
               </li>
               <li className="navbar-item">
               <Link className="text-decoration-none" to="/addvechile">
        <h1 className="lead fs-5">Add Vechile</h1>
        </Link>
               </li>
               <li className="navbar-item">
               <Link className="text-decoration-none" to="/search">
        <h1 className="lead fs-5">Search Destination</h1>
        </Link>
               </li>

              
             </ul>
           </span>
           <span className="navbar-item">
               <ul className="navbar-nav d-flex ">
                 <span><li>
                 <Link className="text-decoration-none" to="/settings">
        <h1 className="lead fs-5">Settings</h1>
        </Link>
                 </li>
                 </span>
              <span>
              {
               user === "true" ?  <li className="navbar-item ">
               <Link
                 to="/signin"
                 className="hov text-decoration-none "
               >
               <button className="btn btn-primary btn-sm lead">Sign-out</button>
               </Link>
             </li>
             :
             <li className="navbar-item ">
             <Link
               to="/signin"
               className="hov text-decoration-none "
           >
            <button className="btn btn-primary btn-sm lead">Sign-in</button>
         </Link>
       </li>
          }
          </span>
             </ul>
         </span>
       </div>
     </div>
     </nav>
</div>




<div className="navbarDiv p-2 for-pc ">
  
<nav className="">
       <div className="container">
      

         <button
          className="ms-auto navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#id1"
        >
           <span className="navbar-toggler-icon"></span>
        </button>
       <div
           className="  flex justify-between items-center"
           
           id="id1"
         >
          <Link className="d-flex align-items-center text-decoration-none" to="/">
            <div className="mx-1"><h1 className="fs-2"><FaCarCrash /></h1></div>
            <div><h1 className="hov lead fs-4">Carpool</h1></div>
        </Link>
           <span>
             <ul className="navbar-nav">
               <li className="navbar-item" style={{marginRight:2}}>
               <Link  className="text-decoration-none" to="/aboutus">
        <h1 className="lead fs-5 text-">About</h1>
        </Link>
               </li>
               <li className="navbar-item mx-2">
               <Link className="text-decoration-none" to="/addvechile">
        <h1 className="lead fs-5">Add Vechile</h1>
        </Link>
               </li>
               <li className="navbar-item"style={{marginLeft:2}}>
               <Link className="text-decoration-none" to="/search">
        <h1 className="lead fs-5">Search</h1>
        </Link>
               </li>

              
             </ul>
           </span>
           <span className="navbar-item">
               <ul className="navbar-nav d-flex ">
                 <span className="mx-2"><li>
                 <Link className="text-decoration-none" to="/settings">
        <button className="lead btn btn-primary btn-sm">Settings</button>
        </Link>
                 </li>
                 </span>
              <span>
              {
               user === "true" ?  <li className="navbar-item ">
               <Link
                 to="/signin"
                 className="hov text-decoration-none "
               >
               <button className="btn btn-danger btn-sm lead">Sign-out</button>
               </Link>
             </li>
             :
             <li className="navbar-item ">
             <Link
               to="/signin"
               className="hov text-decoration-none "
           >
            <button className="btn btn-success btn-sm lead">Sign-in</button>
         </Link>
       </li>
          }
          </span>
             </ul>
         </span>
       </div>

     </div>
     </nav>
</div>  */}
</>

  );
}

export default Navbar;


{/*


 */}


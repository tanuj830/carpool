import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css"
import { FaCarCrash } from "react-icons/fa";


const Navbar = () => {

  const [user, setUser] = useState("")


  useEffect(() => {
  const userLogin = JSON.parse(window.localStorage.getItem("isLogin"))
    setUser(userLogin)  
    
  },[user])


  return (
<>

<div className="navbarDiv p-2 for-mobile">
  
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




<div className="navbarDiv p-2 for-pc">
  
<nav className="  navbar  navbar-expand-sm object-fluid">
       <div className="container">
      


       <div
           className=" collapse navbar-collapse d-flex justify-content-between align-items-center"
           
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
</div>
</>

  );
}

export default Navbar;


{/*


 */}


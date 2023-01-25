import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [user, setUser] = useState("")


  useEffect(() => {
  const userLogin = JSON.parse(window.localStorage.getItem("isLogin"))
    setUser(userLogin)  
    
  },[user])


  return (

<div className="navbarDiv">
  
<nav className="  navbar  navbar-expand-sm object-fluid shadow">
       <div className="container-fluid">
         <Link className="" to="/">
           <h4>
            <b className="hov">
            <h6>Carpool</h6>
             </b>
           </h4>
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
             <ul className="navbar-nav text-center">
               <li className="navbar-item mx-2">
                 <Link
                 to="/api/aboutus"
                   className="hov text-decoration-none"
                 >               
                    <h6>About us</h6>
                 </Link>
               </li>
               <li className="navbar-item mx-2">
                <Link to="/api/addvechile" className="hov text-decoration-none">
                  
                  <h6>Add vehicle</h6>
                 
                 </Link>
               </li>
               <li className="navbar-item mx-2">
                 <Link
                   to="/api/search"
                   className="hov text-decoration-none "
                 >
                  <h6>Search destination</h6>
                 </Link>
               </li>

              
             </ul>
           </span>
           <span className="navbar-item">
               <ul className="navbar-nav text-center d-flex ">
              <span>
              {
               user === "true" ?  <li className="navbar-item mx-3 ">
               <Link
                 to="/api/signin"
                 className="hov text-decoration-none "
               >
               <h6>Sign-out</h6>
               </Link>
             </li>
             :
             <li className="navbar-item mx-3 ">
             <Link
               to="/api/signin"
               className="hov text-decoration-none "
           >
            <h6>Sign-in</h6>
         </Link>
       </li>
          }
          </span>
        <span><li>
        <Link to="/api/settings" className="hov text-decoration-none">
            <h6>Settings</h6>
         </Link>
        </li>
        </span>
             </ul>
         </span>
       </div>
     </div>
     </nav>
</div>

  );
}

export default Navbar;



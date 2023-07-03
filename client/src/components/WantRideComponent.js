import React from "react";
import axios from "axios";
import AvailableVechiles from "./AvailableVechiles";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Error404 from "./Error404";

const WantRideComponent = () => {
  const [data, setData] = React.useState({});

  const [availableRides, setAvailableRides] = React.useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://carpool-dhfy.onrender.com/search",{
        params: {
          token: localStorage.getItem('token'),
          source: `${data.source}`,
          des: `${data.des}`,
        },
      })
      .then((res) => setAvailableRides(res.data))
      .catch((err) => console.log("err"));
    };
    
    return (
      <div className="text-center gx-1" style={{ }}>
        {
        availableRides.data <= 0 ?  <h3 className="bg-red-100 text-stone-600 p-3 transition-all duration-1000">No vechile found from <b className="text-red-600">{data.source}</b> to <b className="text-red-600">{data.des}</b></h3>: null
        }
      <div className="mt-5">
       {
         availableRides.isToken == false ?<>
         <Error404/>
         <Link to="/signin" className="bg-gradient-to-r from-cyan-300 to-pink-300 text-white shadow-inner px-4 py-2 rounded-2xl">Click To signin first </Link>
         </>:
         <>
         <h1> Make your ride now,</h1>
      <form action="GET" className="mt-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex justify-content-center">
          <div className="">
            <input
              type="text"
              autoComplete="off"
              className="px-3 py-1 w-75 rounded"
              name="source"
              onChange={(e) => handleChange(e)}
              placeholder="From"
            />
          </div>
          <div>
          <BsArrowRight/>
          </div>
          <div>
            <input
              type="text"
              autoComplete="off"
              className="px-3 w-75 py-1 rounded"
              name="des"
              onChange={(e) => handleChange(e)}
              placeholder="To"
            />
          </div>
        </div>
        <button className="btn btn-dark mt-3">Search Ride</button>
      </form> 
      </>
       }
      </div>
      <div className="mt-5">
        {
          availableRides.data?  <AvailableVechiles data={availableRides.data} /> :null
        }
      </div>
    </div>
  );
};

export default WantRideComponent;

{
  /* <AvailableVechiles data = {i}/> */
}

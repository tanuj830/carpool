import React from "react";
import axios from "axios";
import AvailableVechiles from "./AvailableVechiles";
import {BsArrowRight} from 'react-icons/bs'


const WantRideComponent = () => {
  const [data, setData] = React.useState({});

  const [availableRides, setAvailableRides] = React.useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://carpool-dhfy.onrender.comsearch", {
        params: {
          source: `${data.source}`,
          des: `${data.des}`,
        },
      })
      .then((res) => setAvailableRides(res.data))
      .catch((err) => console.log("err"));
  };

  return (
    <div className="container text-center gx-1" style={{ }}>
      <div className="mt-5">
        <h1> Make your ride now,</h1>
        <form action="GET" className="mt-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="d-flex justify-content-center">
            <div>
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
      </div>

      <div className="mt-5">
        <AvailableVechiles data={availableRides} />
      </div>
    </div>
  );
};

export default WantRideComponent;

{
  /* <AvailableVechiles data = {i}/> */
}

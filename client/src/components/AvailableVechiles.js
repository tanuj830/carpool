import React from "react";
import {Link} from "react-router-dom"
const AvailableVechiles = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {
          // if array is empty than show nothing to show, else show available rides
          //  props.data == 0 ? <h3 className="text-danger mt-5">No nearby rides available at the moment</h3> : 
          props.data.map((i) => (
            <div className="col-md-3 col-lg-4 col-sm-2 my-2" key = {i.Date}>
              <div className="card">
                <div className="p-3">
                <div>
                    <p className="text-capitalize fs-5" style={{fontWeight:600}}>{i.name}</p>
                  </div>

                 <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-capitalize text-muted">Vechile: {i.vechileName}</p>
                  </div>
                  <div>
                   <p className="text-capitalize text-muted">gender: {i.gender}</p>
                  </div>
                 </div>
                 
                 <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-capitalize text-muted">from: {i.source}</p>
                  </div>
                  <div>
                   <p className="text-capitalize text-muted">to: {i.des}</p>
                  </div>
                 </div>

                 <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-capitalize text-muted">total distance: {i.dist_S_to_D}</p>
                  </div>
                  <div>
                   <p className="text-capitalize text-muted">expected time: {i.time}</p>
                  </div>
                 </div>

                <Link to={`/search/details/${i._id}`}> <button className="btn btn-primary">Get details</button></Link>
                 

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AvailableVechiles;

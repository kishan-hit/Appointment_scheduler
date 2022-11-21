import React, { useEffect } from "react";
import "./form.css";
import axios from "axios";

function BasicForm(){
    useEffect(()=>{

    },[]);
    function getData(){
        axios.post("")
        .then(console.log("Data saved"))
        .catch();
    }
    return(
        <div className="main">
      <div className="sub-main">
          <div>
            <div className="input-text">
              <input type="text" placeholder="date" className="name" />
            </div>
            <div className="input-text">
              <input type="text" placeholder="start time" className="name" />
            </div>
            <div className="input-text">
              <input type="text" placeholder="end time" className="name" />
            </div>
            <div className="input-text">
              <input type="text" placeholder="duration" className="name" />
            </div>
            <button onClick={()=>getData()}>Save</button>
          </div>
        </div>
    </div>
    );
}
export default BasicForm;
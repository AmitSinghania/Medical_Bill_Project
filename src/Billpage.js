import React from "react";
// import index from "./index.css";
// import Progressbar from "./Progressbar";
const Billpage = () => {
  return (
    <div className="Billpagecontainer">
      <h1>Medical bill details</h1>
      {/* <Progressbar /> */}

      <div className="Billpagecontainer-container">
        <div>
          <p className="Billpagecontainer-container_treatment">
            Medical condition or treatment
            <small>(required)</small>
          </p>
          <input className="Billpagecontainer-container_input" type="text" />
        </div>
        <div>
          <p className="Billpagecontainer-container_insurance">
            Did you have insurance
            <small>(required)</small>
          </p>

          <button className="Billpagecontainer-container_yesbtn">Yes</button>
          <button className="Billpagecontainer-container_nobtn">No</button>
        </div>
        <div>
          <p className="Billpagecontainer-container_invoice">
            Upload invoice
            <small>(optional)</small>
          </p>
          <div className="Billpagecontainer-container_box ">
            <button className="Billpagecontainer-container_imagesbtn">
              Add images
            </button>
          </div>
        </div>
        <div>
          <button className="Billpagecontainer-container_continuebtn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billpage;

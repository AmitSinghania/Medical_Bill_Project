import React from "react";
import "./progressbar.css";

const Progressbar = () => {
  const checkpoints = [
    {
      name: 1,
      active: true,
    },
    {
      name: 2,
      active: false,
    },
  ];
  return (
    <div class>
      <div className="progress-bar">
        {checkpoints.map((checkpoint, i) => {
          return (
            <>
              {i !== 0 && <div class="hr"></div>}
              <p className={`${checkpoint.active ? "active" : ""}`}>
                {checkpoint.name}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Progressbar;

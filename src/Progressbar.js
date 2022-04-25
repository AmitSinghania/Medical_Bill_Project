import React from "react";
import "./progressbar.css";

const Progressbar = () => {
  return (
    <div>
      <div className="progressbarcontainer">
        <div className="progressbarcontainercircle1">1</div>

        <div className="progressbarcontainerline"></div>
        <div className="progressbarcontainercircle2">2</div>
      </div>
      <div className=" progressbarcontainer_text">
        <div>Provider</div>
        <div>Cost</div>
      </div>
    </div>
  );
};

export default Progressbar;
// const Progressbar = () => {
//   const checkpoints = [
//     {
//       name: 1,
//       active: true,
//     },
//     {
//       name: 2,
//       active: false,
//     },
//   ];
//   return (
//     <div class>
//       <div className="progress-bar">
//         {checkpoints.map((checkpoint, i) => {
//           return (
//             <>
//               {i !== 0 && <div class="hr"></div>}
//               <p className={`${checkpoint.active ? "active" : ""}`}>
//                 {checkpoint.name}
//               </p>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

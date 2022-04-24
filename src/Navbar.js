import React from "react";
import { useState } from "react";
import "./index.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
//import ReorderIcon from "@material-ui/icons/Reorder";
//import ClearAllIcon from "@material-ui/icons/ClearAll";
import CloseIcon from "@material-ui/icons/Close";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="leftside">
        <logo className="logo">Logo</logo>
      </div>
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/explore medical bills">Explore medical bills</a>
          <a href="my account">My account</a>
        </div>
      </div>
      {showLinks ? (
        <GrClose
          className="link-button"
          onClick={() => setShowLinks(!showLinks)}
        />
      ) : (
        <GiHamburgerMenu
          className="link-button"
          onClick={() => setShowLinks(!showLinks)}
        />
      )}
    </div>
  );
};
export default Navbar;

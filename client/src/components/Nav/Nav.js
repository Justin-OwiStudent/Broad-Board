import React, { useState } from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Cartmodal from "../Cart/Cartmodal";


const Nav = () => {



  return (
    <>
    <div className={classes.bar}>


      <Link to="/Landing">
        {" "}
        <div className={classes.logo}></div>{" "}
      </Link>



      <Link to="/">
        <div className={classes.log}>
          <h3 className={classes.NavText}>Log Out</h3>
        </div>
      </Link>

      <Link to="/Admin">
        <div className={classes.admin}>
          <h3 className={classes.NavText}>Admin</h3>
        </div>
      </Link>


   
    </div>

    
    </>
  );
};

export default Nav;

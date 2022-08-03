import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={classes.bar}>

        <Link to="/BoardShop"> <div className={classes.logo}></div> </Link>
      

      <Link to="/">
      <div className={classes.log}>
        <h3>Log in</h3>
      </div>
      </Link>

      <Link to="/Admin">
        <div className={classes.admin}>
          <h3>Admin</h3>
        </div>
      </Link>


<Link to="/Cart">
  <div className={classes.cart}></div>
</Link>
        

      <div className={classes.pfp}></div>
    </div>
  );
};

export default Nav;

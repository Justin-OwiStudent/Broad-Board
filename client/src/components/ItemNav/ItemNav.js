import React from 'react';
import classes from './ItemNav.module.css'
import { Link} from "react-router-dom";


const ItemNav = () => {
    return (
        <div className={classes.itemNav}>
            <div className={classes.category}>
                
                <Link to="/BoardShop"> <div className={classes.catagories}> <h1>Enjoi</h1> </div> </Link>
                <Link to="/TruckShop"> <div className={classes.catagories}> <h1>Santa-Cruz</h1> </div> </Link>
                <Link to="/WheelShop"> <div className={classes.catagories}><h1>Almost</h1></div> </Link>
                <Link to="/GripShop"> <div className={classes.catagories}><h1>KFD</h1></div> </Link>
                
                
                {/* <div className={classes.catagories}><h1>Boards</h1> </div>  */}
            </div>
        </div>
    );
};

export default ItemNav;
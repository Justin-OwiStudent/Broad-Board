import { Route, Routes, Outlet } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Admin/Orders";
import Stock from "./components/Admin/Stock";
import BoardShop from "./components/BoardShop/BoardShop";
import Cart from "./components/Cart/Cart";
import GripShop from "./components/GripShop/GripShop";
import Individual from "./components/IndividualItem/Individual";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/Login/Login";
import TruckShop from "./components/TruckShop/TruckShop";
import WheelShop from "./components/WheelShop/WheelShop";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/BoardShop" element={<BoardShop/>}/>

        <Route path="/TruckShop" element={<TruckShop/>}/>
        <Route path="/WheelShop" element={<WheelShop/>}/>
        <Route path="/GripShop" element={<GripShop/>}/>
        <Route path="/Individual" element={<Individual/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Cart" element={<Cart/>}/>

        <Route path="/Stock" element={<Stock/>}/>
        <Route path="/Orders" element={<Orders/>}/>

        


        {/* <Route path="/Login" element={<Login/>}/> */}
        







      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;

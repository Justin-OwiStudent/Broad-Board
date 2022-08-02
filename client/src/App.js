import { Route, Routes, Outlet } from "react-router-dom";
import BoardShop from "./components/BoardShop/BoardShop";
import GripShop from "./components/GripShop/GripShop";
import Individual from "./components/IndividualItem/Individual";
import Landing from "./components/LandingPage/Landing";
import TruckShop from "./components/TruckShop/TruckShop";
import WheelShop from "./components/WheelShop/WheelShop";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>

        <Route path="/BoardShop" element={<BoardShop/>}/>

        <Route path="/TruckShop" element={<TruckShop/>}/>
        <Route path="/WheelShop" element={<WheelShop/>}/>
        <Route path="/GripShop" element={<GripShop/>}/>
        <Route path="/Individual" element={<Individual/>}/>




      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;

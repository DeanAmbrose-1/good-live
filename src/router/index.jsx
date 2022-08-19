import React from "react";
import { Routes,Route,BrowserRouter as Router} from "react-router-dom"; 
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User"
const AppRouter = ()=>{

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="lifeservice" element={<LifeService/>}></Route>
                <Route path="shop" element={<Shop/>}></Route>
                <Route path="user" element={<User/>}></Route>
            </Routes>
        </Router>
        )
}
export default AppRouter
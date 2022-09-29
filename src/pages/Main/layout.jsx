import React from "react";
import { Outlet } from "react-router-dom";
import FooterNav from "../../components/FooterNav"
const Layout = ()=>{
    return (
        <div>
            <Outlet/>
            <FooterNav/>
        </div>
    )
}
export default Layout
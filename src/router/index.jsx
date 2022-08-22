import React from "react";
import { useRoutes } from "react-router-dom";
import FooterNav from "../components/FooterNav";
import routes from "./routers"

const AppRouter = ()=>{

    const elements = useRoutes(routes)

    return (
        <div>
            { elements }
            <FooterNav/>
        </div>
        )
}

export default AppRouter


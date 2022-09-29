import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routers"

const AppRouter = ()=>{

    const elements = useRoutes(routes)

    return (
        <div>
            { elements }
        </div>
        )
}

export default AppRouter


import Home from "../pages/Main/Home";
import LifeService from "../pages/Main/LifeService";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User"
import City from "../pages/City";
import Layout from "../pages/Main/layout";

const routes = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"lifeservice",
                element:<LifeService/>
            },
            {
                path:"shop",
                element:<Shop/>
            },
            {
                path:"user",
                element:<User/>
            },
        ]
        
    },
    {
        path:"city",
        element:<City/>
    }
]
export default routes
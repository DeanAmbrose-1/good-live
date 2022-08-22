import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User"

const routes = [
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
    }
]
export default routes
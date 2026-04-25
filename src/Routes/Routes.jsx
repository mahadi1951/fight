import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
         children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: (
          
            <Profile />
          
        ),
      },
       {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
     
    ], 
    }
])
export default router;
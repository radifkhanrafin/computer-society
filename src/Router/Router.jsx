import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main_ from "../Main_";
import Team_info from "../pages/team_info/Team_info";
import Our_Mission from "../pages/Our_Mission";
import Our_success from "../pages/Our_success";
import Join_us from "../pages/Join_us";
import Alumi from "../pages/Alumi";
import Contact_us from "../pages/Contact_us";
import Login from "../pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main_></Main_>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mission",
        element: <Our_Mission />,
      },
      {
        path: "/team",
        element: <Team_info />,
      },
      {
        path: "/success",
        element: <Our_success />,
      },
      {
        path: "/join_us",
        element: <Join_us />,
      },
      {
        path: "/alumni",
        element: <Alumi />,
      },
      {
        path: "/contact",
        element: <Contact_us />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ProjectsDetails from "../pages/ProjectsDetails/ProjectsDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
          path: '/projects',
          element: <ProjectsDetails/>
        },
      ]
    },
  ]);
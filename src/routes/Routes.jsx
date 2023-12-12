import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";

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
          element: <Projects/>
        },
      ]
    },
  ]);
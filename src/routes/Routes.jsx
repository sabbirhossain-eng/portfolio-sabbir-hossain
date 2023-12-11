import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Skills from "../pages/Skills/Skills";
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
          path: '/skills',
          element: <Skills/>
        },
        {
          path: '/projects',
          element: <Projects/>
        }
      ]
    },
  ]);
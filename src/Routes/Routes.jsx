import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Notfound from "../Pages/NotFound/NotFound";
import BlogDetails from "../Pages/BlogDetails/BlogDetaials";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path : "/blog/:slug",
        element: <BlogDetails/>
      }, 

      {
        path: "*",
        element: <Notfound/>
      }


    ],
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog, { LoaderBlog } from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import LayoutPublic from "../Layouts/LayoutPublic";
import Post, { loaderPost } from "../Pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/About",
            element: <About />,
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: LoaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post />,
            loader: loaderPost,
          },
        ],
      },
    ],
  },
]);

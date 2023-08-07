import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../shared/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayOut />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: 'terms',
        element:<Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Catagory />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SubLayout from "../layouts/SubLayout";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/",
    element: <SubLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;

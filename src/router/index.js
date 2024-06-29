import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, LoginPage } from "../util/import";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;

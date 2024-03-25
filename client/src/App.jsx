import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import AddJob from "./pages/AddJob";
import Admin from "./pages/Admin";
import AllJobs from "./pages/AllJobs";
import DashboardLayout from "./pages/DashboardLayout";
import DeleteJob from "./pages/DeleteJob";
import EditJob from "./pages/EditJob";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Stats from "./pages/Stats";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashbord",
        element: <DashboardLayout />,
      },
      {
        path: "about",
        element: (
          <div>
            {" "}
            <h1>about page</h1>
          </div>
        ),
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

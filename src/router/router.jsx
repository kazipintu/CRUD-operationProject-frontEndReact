import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Users from "../components/Users/Users";
import AddUser from "../components/AddUser/AddUser";
import UpdateUser from "../components/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Users />,
        loader: async () => await fetch("https://crud-operation-project-back-end-server.vercel.app/users"),
      },
      {
        path: "/add-user",
        element: <AddUser />
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
        loader: async ({ params }) => await fetch(`https://crud-operation-project-back-end-server.vercel.app/users/${params.id}`),
      },
    ]
  }
])

export default router;
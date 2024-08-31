import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UpdatePassword } from "./views/updatePassword";
import { Register } from "./views/register";
import { Login } from "./views/login";
import { Index } from "./views/index";
import { UpdateInfo } from "./views/updateInfo";
import { Menu } from "./views/menu";
import { Friendship } from "./views/friendship";
import { Group } from "./views/group";
import { Chat } from "./views/chat";
import { Collection } from "./views/collection";
import { Notification } from "./views/notification";

const routes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "update_info",
        element: <UpdateInfo />,
      },
      {
        path: "/",
        element: <Menu />,
        children: [
          {
            path: "/",
            element: <Friendship />,
          },
          {
            path: "/group",
            element: <Group />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
          {
            path: "collection",
            element: <Collection />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  },
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

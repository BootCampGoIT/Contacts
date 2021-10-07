import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
    exact: true,
  },
  {
    name: "Contacts",
    path: "/contacts",
    component: lazy(() =>
      import("../pages/ContactsPage" /* webpackChunkName: "ContactsPage" */)
    ),
    exact: false,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: lazy(() =>
      import("../pages/TasksPage" /* webpackChunkName: "TasksPage" */)
    ),
    exact: true,
  },
];

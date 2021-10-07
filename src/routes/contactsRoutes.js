import { lazy } from "react";

export const contactsRoutes = [
  {
    name: "Private",
    path: "/private",
    component: lazy(() =>
      import(
        "../Components/contacts/private/Private" /* webpackChunkName: "Contacts_Private" */
      )
    ),
    exact: true,
  },
  {
    name: "Public",
    path: "/public",
    component: lazy(() =>
      import(
        "../Components/contacts/public/Public" /* webpackChunkName: "Contacts_Public" */
      )
    ),
    exact: true,
  },
  {
    name: "All",
    path: "/all",
    component: lazy(() =>
      import(
        "../Components/contacts/allContacts/AllContacts" /* webpackChunkName: "Contacts_AllContacts" */
      )
    ),
    exact: true,
  },
];

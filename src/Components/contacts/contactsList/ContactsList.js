import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const ContactsList = ({ contacts }) => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {/* <NavLink to={match.url + '/' + contact.id}> */}
          <NavLink to={`${match.url}/${contact.id}`}>
            {contact.contactName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

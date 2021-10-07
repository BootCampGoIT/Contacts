import React from "react";
import { NavigationContainer } from "./NaviagtionStyled";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes, match = "" }) => {
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {routes.map((route) => (
          <li key={route.path} className='navigationListItem'>
            <NavLink
              to={match + route.path}
              className='navigationListItemLink'
              activeClassName='navigationListItemLinkActive'
              exact={route.exact}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;

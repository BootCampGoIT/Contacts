import React from "react";
import { MainContainer } from "./MainStyled";

import { mainRoutes } from "../../routes/mainRoutes";
import RoutesList from "../routesList/RoutesList";

const Main = () => {
  return (
    <MainContainer>
      <RoutesList routes={mainRoutes} />
    </MainContainer>
  );
};

export default Main;

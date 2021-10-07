import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  .navigationList {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationListItemLink {
    text-transform: uppercase;
    color: cornflowerblue;
    text-decoration: none;
    cursor: pointer;
  }
  .navigationListItemLinkActive {
    color: red;
  }
`;

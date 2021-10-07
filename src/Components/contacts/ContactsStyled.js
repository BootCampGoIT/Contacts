import styled from "styled-components";
export const ContactsContainer = styled.section`
  .contactsHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contactsHeaderButton {
    width: 30px;
    height: 30px;
    background-color: none;
    border: 1px solid cornflowerblue;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms linear;
    color: cornflowerblue;
    outline: none;
    &:hover {
      background-color: #030303;
      cursor: pointer;
    }
    &:hover .contactsHeaderIcon {
      fill: currentColor;
    }
    .contactsHeaderIcon {
      width: 20px;
      height: 20px;
      fill: red;
    }
  }
`;

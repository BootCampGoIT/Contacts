import styled from "styled-components";

export const ContactFormContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 16px;
  .contactForm {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    padding: 5px;
  }

  .contactFormLabel,
  .contactFormInput {
    border: 1px solid cornflowerblue;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    width: 100%;

    &:hover {
      border: 1px solid cornflowerblue;
    }
  }
  .contactFormAvatarInput {
    display: none;
  }
  .contactFormImageWrapper {
    width: 100px;
    height: 100px;
    border-radius: 16px;
    border: 1px solid cornflowerblue;
    overflow: hidden;
  }
`;

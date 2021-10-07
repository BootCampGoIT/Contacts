import React, { useEffect, useState } from "react";
import { contactsRoutes } from "../../routes/contactsRoutes";
import Navigation from "../navigation/Navigation";
import { useRouteMatch, useHistory } from "react-router-dom";
import RoutesList from "../routesList/RoutesList";
import { ContactsContainer } from "./ContactsStyled";
import sprite from "../../icons/contacts/sprite.svg";
import Modal from "../modal/Modal";
import ContactForm from "./contactForm/ContactForm";
import { addContact, getContacts } from "../../services/contacts";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    history.push(match.url + contactsRoutes[0].path);
  }, [history, match.url]);

  useEffect(() => {
    try {
      const contacts = getContacts();
      contacts.length && setContacts(contacts);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const addNewContact = async (contact) => {
    try {
      const id = await addContact(contact);
      setContacts((prev) => [...prev, { ...contact, id }]);
    } catch (error) {}
  };
  return (
    <ContactsContainer>
      <div className='contactsHeader'>
        <Navigation routes={contactsRoutes} match={match.url} />
        <button
          type='button'
          className='contactsHeaderButton'
          onClick={toggleModal}>
          <svg className='contactsHeaderIcon'>
            <use href={sprite + "#icon-plus"} />
          </svg>
        </button>
      </div>
      <RoutesList routes={contactsRoutes} match={match.url} />
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ContactForm toggleModal={toggleModal} addContact={addNewContact} />
        </Modal>
      )}
    </ContactsContainer>
  );
};

export default Contacts;

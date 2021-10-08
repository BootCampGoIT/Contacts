import React, { useEffect, useState, createContext } from "react";
import { contactsRoutes } from "../../routes/contactsRoutes";
import Navigation from "../navigation/Navigation";
import {
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  Route,
} from "react-router-dom";
import RoutesList from "../routesList/RoutesList";
import { ContactsContainer } from "./ContactsStyled";
import sprite from "../../icons/contacts/sprite.svg";
import Modal from "../modal/Modal";
import ContactForm from "./contactForm/ContactForm";
import { addContact, getContacts } from "../../services/contacts";
import ContactDetails from "./contactDetails/ContactDetails";

export const ContactsContext = createContext();

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // history.push(match.url + contactsRoutes[0].path);
    match.url === location.pathname &&
      history.push(match.url + contactsRoutes[0].path);
  }, [history, match.url, location]);

  useEffect(() => {
    getContacts()
      .then((contacts) => setContacts(contacts))
      .catch((err) => console.log(err));
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
      {!isDetailsOpen && (
        <>
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
          {isModalOpen && (
            <Modal toggleModal={toggleModal}>
              <ContactForm
                toggleModal={toggleModal}
                addContact={addNewContact}
              />
            </Modal>
          )}
        </>
      )}
      <ContactsContext.Provider value={contacts}>
        <RoutesList routes={contactsRoutes} match={match.url}>
          <Route
            path={`${match.path}/:type/:id`}
            exact
            render={(props) => (
              <ContactDetails
                {...props}
                setIsDetailsOpen={setIsDetailsOpen}
                isDetailsOpen={isDetailsOpen}
              />
            )}
          />
        </RoutesList>
      </ContactsContext.Provider>
    </ContactsContainer>
  );
};

export default Contacts;

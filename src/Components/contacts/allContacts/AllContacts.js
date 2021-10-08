import React, { useContext } from "react";
import { ContactsContext } from "../Contacts";
import ContactsList from "../contactsList/ContactsList";

const AllContacts = () => {
  const contacts = useContext(ContactsContext);
  return (
    <>
      <ContactsList contacts={contacts} />
    </>
  );
};

export default AllContacts;


// state = {

//   isModalOpen,
//   contacts,
//   history, //methods
//   location, //pathname, hash, search, state
//   match //url, path, params: {}
// }


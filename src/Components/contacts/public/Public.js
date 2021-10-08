import React, { useContext } from "react";
import { filteredContacts } from "../../../helpers/contacts";
import { ContactsContext } from "../Contacts";
import ContactsList from "../contactsList/ContactsList";

const Public = () => {
  const contacts = useContext(ContactsContext);

  return (
    <>
      <ContactsList contacts={filteredContacts(contacts, "public")} />
    </>
  );
};

export default Public;

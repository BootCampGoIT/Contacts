export const filteredContacts = (contacts, selector) =>
  contacts.filter((contact) => contact.contactType === selector);


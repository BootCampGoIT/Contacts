import React, { useState } from "react";
import { toDataURL } from "../../../helpers/base64";
import { ContactFormContainer } from "./ContactFormStyled";

const contactType = ["public", "private"];

const initialState = {
  avatar: "",
  contactName: "",
  contactNumber: "",
  contactType: contactType[0],
};

const ContactForm = ({ addContact, toggleModal }) => {
  const [contact, setContact] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      toDataURL(e.target).then((avatar) =>
        setContact((prev) => ({ ...prev, avatar }))
      );
      return;
    }
    setContact((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
    addContact(contact);
  };

  return (
    <ContactFormContainer>
      <form className='contactForm' onSubmit={onHandleSubmit}>
        <label className='contactFormLabel'>
          <div className='contactFormImageWrapper'>
            {contact.avatar && <img src={contact.avatar} alt='contact' />}
          </div>
          <input
            type='file'
            name='avatar'
            onChange={onHandleChange}
            className='contactFormAvatarInput'
          />
        </label>
        <label>
          Private
          <input
            type='radio'
            name='contactType'
            checked={contact.contactType === "private"}
            onChange={onHandleChange}
            value="private"
          />
        </label>
        <label>
          Public
          <input
            type='radio'
            name='contactType'
            checked={contact.contactType === "public"}
            onChange={onHandleChange}
            value="public"
          />
        </label>
        <label className='contactFormLabel'>
          Contact name
          <input
            type='text'
            name='contactName'
            value={contact.contactName}
            onChange={onHandleChange}
            className='contactFormInput'
          />
        </label>
        <label className='contactFormLabel'>
          Contact number
          <input
            name='contactNumber'
            value={contact.contactNumber}
            onChange={onHandleChange}
            className='contactFormInput'
          />
        </label>
        <button type='submit'>Save contact</button>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;

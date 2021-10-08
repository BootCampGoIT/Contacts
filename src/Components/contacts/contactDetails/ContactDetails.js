import axios from "axios";
import React, { useEffect } from "react";

const ContactDetails = ({
  avatar,
  id,
  contactName = "ALEX",
  setIsDetailsOpen,
  match,
  location,
}) => {
  useEffect(() => {
    axios.get(
      `https://ited-fc7ac-default-rtdb.firebaseio.com/contacts/${match.params.id}.json`
    );
  }, [match.params.id]);

  useEffect(() => {
    location.pathname === match.url && setIsDetailsOpen(true);
    return () => {
      setIsDetailsOpen(false);
    };
  }, [location.pathname, match.url, setIsDetailsOpen]);
  return (
    <div>
      <h2>{contactName}</h2>
      {/* {avatar.constructor.name === "String" ? <img src={avatar} alt='' /> : <svg><use href={}/></svg>} */}
    </div>
  );
};

export default ContactDetails;

// ContactDetails.propsTypes = {
//   avatar: PropsTypes.string.isRequired,
// };

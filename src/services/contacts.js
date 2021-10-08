import axios from "axios";

const BASE_URL = "https://ited-fc7ac-default-rtdb.firebaseio.com";

export const addContact = async (contact) => {
  try {
    const response = await axios.post(
      BASE_URL + `/contacts.json`,
      contact
    );
    const id = response.data.name;
    return id;
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = async () => {
  try {
    const response = await axios.get(BASE_URL + "/contacts.json");

    const res = response.data
      ? Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      : [];

    console.log(res);
    return response.data
      ? Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      : [];
  } catch (error) {
    console.log(error);
  }
};

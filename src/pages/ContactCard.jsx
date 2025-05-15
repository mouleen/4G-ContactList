// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

const ContactCard = ({name,phone}) => {
  return <p>ContactCArd {name} / {phone} </p>;
};
export default ContactCard;
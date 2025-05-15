// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { getContacts,createContact } from "../components/services/api";


const Contact = () => {
  const { store, dispatch } = useGlobalReducer()
  const [contactList,setContactList]=useState([])

  const handleCreateContact = async () => {

    createContact("agenda_jg",{
      "name": "Tito",
      "phone":"Scroffa",
      "email": "jose@gmail.com",
      "address": "Calle Lapacho",
    })
  }
  useEffect(()=>{
      const contacts = async (agenda) => {
      const contactData = await getContacts(agenda)

      dispatch({type:"get_contacts",payload: contactData})
      //setContactList(contactData)
    }
    contacts("agenda_jg"); //.then((data)=>console.log(data));

    //console.log(contacts);
  },[])

  return (
    <>
    <h1></h1>
    <ul>
    {
    store.contacts.map((contact)=>(
      <li key={contact.id}>
          <ContactCard name={contact.name} phone={contact.phone} /> 
      </li>
    ))}
    </ul>
    <button onClick={()=> handleCreateContact()}> Crear Contacto</button>
    </>
  )
};
export default Contact;
// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { deleteContact,getContacts,createContact } from "../services/api";


const Contact = () => {
  const { store, dispatch } = useGlobalReducer()
  const [contactList,setContactList]=useState([])
  const [user,setUser]=useState(["codemind_bytes"])
  const [flagDelete,setFlagDelete] = useState(null);

  const handleCreateContact = async () => {
    
    await createContact(user,{
        "name": "Tito",
        "phone":"Scroffa",
        "email": "jose@gmail.com",
        "address": "Calle Lapacho"
      });

    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: contactData});
    //setContactList(contactData);
  }
  const handleDelete = async (contactId)=> {

    // lo deje borrando solo a nivel visual no lo borra de la api. 
    // TODO: Crear y metodo de delete en los servicios y ocuparlo aca para borrar el elemento
    deleteContact(user,contactId);
    
    // simulo el borrado mientras se borra
    //const listaFilter = store.contacts.filter((item,idx)=> item.id !== contactId );
    //dispatch({type:"get_contacts",payload: listaFilter});
    
    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: await contactData});
    
    //const listaFilter = store.contacts.filter((item,idx)=> item.id !== contactId );
    //dispatch({type:"get_contacts",payload: listaFilter});
		//console.log("Eliminar elemento");
	}

  useEffect(()=>{
    // Creamos contacto para evitar errores por ahora
    const contacts = async (agenda) => {
     
        const contactData = await getContacts(agenda)
        dispatch({type:"get_contacts",payload: contactData})
        //setContactList(contactData)
    }
    contacts(user); //.then((data)=>console.log(data));

    //console.log(contacts);
  },[])

  return (
    <>
    <h1></h1>
    <ul>
    {
    store.contacts.map((contact)=>(
      <li key={contact.id}
          className="d-flex justify-between py-2 px-5 w-100 border-bottom border-1 position-relative bg-light" 
          onMouseOver={()=>(setFlagDelete(contact.id))}
          onMouseLeave={()=>(setFlagDelete(null))}
      >
          <ContactCard name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} /> 
          { flagDelete === contact.id && <small className="mx-3 text-end position-absolute top-50 end-0 translate-middle-y" onClick={()=>(handleDelete(contact.id))}> x </small>}
      </li>
    ))}
    </ul>
    <button onClick={()=> handleCreateContact()}> Generar un Contacto Demo</button>
    </>
  )
};
export default Contact;
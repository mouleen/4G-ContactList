// Import necessary components from react-router-dom and other parts of the application.
import { Link,useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { deleteContact,getContacts,createContact } from "../services/api";


const Contact = () => {
  const { store, dispatch } = useGlobalReducer()
  const [contactList,setContactList]=useState([])
  const [user,setUser]=useState(["codemind_bytes"])
  const [flagDelete,setFlagDelete] = useState(null);
  const [scrollButton,setScrollButton] = useState(false);
  const navigate = useNavigate();
  
  // Handler Generar Contacto Demo
  const handleCreateContact = async () => {
    let randId=Math.floor(Math.random() * 10000);
    await createContact(user,{
        "name": "Tito_"+randId,
        "phone":"4532-"+randId,
        "email": "jose_"+randId+"@gmail.com",
        "address": "Calle Lapacho " +randId
    });
    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: contactData});
  }

  // Handler Borrar Contacto 
  const handleDelete = async (contactId)=> {
    await deleteContact(user,contactId);
    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: contactData});
	}

  // Handler Actualizar Contacto 
  const handleUpdate = async (contactId)=> {
    navigate('/update/'+contactId);    
	}

  // Handler Navegar al Inicio 
  const handleScrollButton =  (idx)=> {
    (idx > 2) ? setScrollButton(true): setScrollButton(false) ;
	}


  useEffect(()=>{
    if (store.contacts.length === 0 ) {
      const contacts = async (agenda) => {
        const contactData = await getContacts(agenda)
        dispatch({type:"get_contacts",payload: contactData})
      }
      contacts(user); 
    }
  },[])

  return (
    <>
    <h1></h1>
    <div className="box bg-secondary sticky-top mt-5">
      <button onClick={()=> navigate('/')} className="btn btn-secondary float-right rounded-pill" > <i className="fa-solid fa-house-chimney"></i> </button>
      <button onClick={()=> handleCreateContact()} className="btn btn-warning float-right rounded-pill" data-toggle="tooltip" data-placement="bottom" title="Generar un Contacto Demo" > <i className="fa-solid fa-wand-sparkles mx-2"></i><i className="fa-solid fa-id-card  mx-2"></i><i className="fa-solid fa-plus  mx-2"></i></button>
      {(scrollButton)? ( <button onClick={()=> scrollTo(top)} className="btn btn-secondary float-right rounded-pill  px-5 mx-5 text-light" data-toggle="tooltip" data-placement="bottom" title="Navegar al inicio"> <i className="fa-regular fa-square-caret-up" ></i> Inicio </button> ):(<></>)}
      <div style={{ clear: 'both'}}></div>
    </div>
    <ul>
    {
    store.contacts.map((contact,idx)=>(
      <li key={contact.id}
          className="d-flex justify-between py-2 px-5 w-100 border-bottom border-1 position-relative bg-light" 
          onMouseOver={()=>(setFlagDelete(contact.id))}
          onMouseLeave={()=>(setFlagDelete(null))}
          onMouseEnter={()=>(handleScrollButton(idx))}
      >
          <ContactCard name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} /> 
           <div className="col-1 me-1 col-sm-2">
           <small className="me-5 text-end position-absolute top-50 end-0 translate-middle-y fs-4" onClick={()=>(handleDelete(contact.id))}> <i className="fa-regular fa-trash-can"></i> </small>
           <small className="me-5 text-end position-absolute top-50 end=0 translate-middle-y fs-4" onClick={()=>(handleUpdate(contact.id))}> <i className="fa-regular fa-pen-to-square"></i> </small>
          </div>
      </li>
    ))}
    </ul>
    
    </>
  )
};
export default Contact;


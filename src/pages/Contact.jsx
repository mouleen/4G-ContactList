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

 const handleUpdate = async (contactId)=> {

    // lo deje borrando solo a nivel visual no lo borra de la api. 
    // TODO: Crear y metodo de delete en los servicios y ocuparlo aca para borrar el elemento
    //deleteContact(user,contactId);
    alert('Ir a Actualizacion de contacto');
    // simulo el borrado mientras se borra
    //const listaFilter = store.contacts.filter((item,idx)=> item.id !== contactId );
    //dispatch({type:"get_contacts",payload: listaFilter});
    
    const contactData = await getContacts(user);
    dispatch({type:"get_contacts",payload: await contactData});
    
    //const listaFilter = store.contacts.filter((item,idx)=> item.id !== contactId );
    //dispatch({type:"get_contacts",payload: listaFilter});
		//console.log("Eliminar elemento");
	}
 const handleScrollButton =  (idx)=> {

    (idx > 2) ? setScrollButton(true): setScrollButton(false) ;
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
    <div class="box bg-secondary sticky-top mt-5">
      <button onClick={()=> navigate('/')} className="btn btn-secondary float-right rounded-pill" > <i class="fa-solid fa-house-chimney"></i> </button>
      <button onClick={()=> handleCreateContact()} className="btn btn-warning float-right rounded-pill" data-toggle="tooltip" data-placement="bottom" title="Generar un Contacto Demo" > <i class="fa-solid fa-wand-sparkles mx-2"></i><i class="fa-solid fa-id-card  mx-2"></i><i class="fa-solid fa-plus  mx-2"></i></button>
      {(scrollButton)? ( <button onClick={()=> scrollTo(top)} className="btn btn-secondary float-right rounded-pill  px-5 mx-5 text-light" data-toggle="tooltip" data-placement="bottom" title="Navegar al inicio"> <i class="fa-regular fa-square-caret-up" ></i> Inicio </button> ):(<></>)}
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
          { flagDelete === contact.id && <small className="mx-3 text-end position-absolute top-50 end-0 translate-middle-y" onClick={()=>(handleDelete(contact.id))}> x </small>}
          { flagDelete === contact.id && <small className="mx-3 text-end position-absolute top-50 start-50 mr-5 translate-middle-y" onClick={()=>(handleUpdate(contact.id))}> <i class="fa-regular fa-pen-to-square"></i> </small>}
      </li>
    ))}
    </ul>
    
    </>
  )
};
export default Contact;


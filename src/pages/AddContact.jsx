// Import necessary components from react-router-dom and other parts of the application.
import { Link,useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";
import { getContacts,createContact } from "../services/api";


export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [ name, setName] = useState([""])
  const [ email, setEmail] = useState([""])
  const [ address, setAddress] = useState([""])
  const [ phone, setPhone] = useState([""])
  const [ user,setUser ]=useState(["codemind_bytes"])
  const navigate = useNavigate();
  
  // { name: "Tito", phone: "Scroffa", email: "jose@gmail.com", address: "Calle Lapacho" }
  //{ name: "Tito", phone: "Scroffa", email: "jose@gmail.com", address: "Calle Lapacho" }
  
  const handleCreateContact = async  () => {
       await createContact(user,{
          "name": name,
          "phone": phone,
          "email": email,
          "address": address
        });
       /* setPhone("");
        setPhone("");
        setPhone("");
        setPhone("");*/
        const contactData = await getContacts(user);
        dispatch({type:"get_contacts",payload: contactData});
        navigate("/contact");
      //setContactList(contactData);
    }


  return (
  <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="emailId">Email address</label>
        <input 
            id="emailId"
            type="text" 
            placeholder="Email" 
            className="d-flex justify-between py-3 px-5 w-100 bg-light border-bottom border-1"
            onChange={((e)=>setEmail(e.target.value))}
            />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="nameId">Nombre</label>
          <input 
              id="nameId"
              type="text" 
              placeholder="Nombre" 
              className="d-flex justify-between py-3 px-5 w-100 bg-light border-bottom border-1"
              onChange={((e)=>setName(e.target.value))}
              />
        </div>
        <div className="form-group">
          <label className="form-check-label" htmlFor="phoneId">Telefono</label>
          <input 
          id="phoneId"
          type="text" 
          placeholder="Telefono" 
          className="d-flex justify-between py-3 px-5 w-100 bg-light border-bottom border-1"
          onChange={((e)=>setPhone(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label className="form-check-label" htmlFor="addressId">Dirección</label>
          <input 
          id="addressId"
          type="text" 
          placeholder="Dirección" 
          className="d-flex justify-between py-3 px-5 w-100 bg-light border-bottom border-1"
          onChange={((e)=>setAddress(e.target.value))}
          />
        </div>
      </form>
      <button onClick={()=> handleCreateContact()}> Crear Contacto</button>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  )
};
//export default addContact;
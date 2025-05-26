// Import necessary components from react-router-dom and other parts of the application.
import { Link,useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useEffect, useState } from "react";
import { getContacts,createContact } from "../services/api";


export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [ name, setName] = useState([""])
  const [ email, setEmail] = useState([""])
  const [ address, setAddress] = useState([""])
  const [ phone, setPhone] = useState([""])
  const [ validForm, setValidForm] = useState(false)
  const [ user,setUser ]=useState(["codemind_bytes"])
  const navigate = useNavigate();
  
  
  const handleCreateContact = async  () => {
      if( !name.length === 0  || !phone.length === 0 || !email.length === 0 || !address.length=== 0 ) setValidForm(true);
       await createContact(user,{
          "name": name,
          "phone": phone,
          "email": email,
          "address": address
        });
        const contactData = await getContacts(user);
        dispatch({type:"get_contacts",payload: contactData});
        navigate("/contact");
    }
  useEffect(()=>{
    if( name.length > 0  || !phone.length > 0 || !email.length > 0 || !address.length > 0 ) setValidForm(true);
  },[]);

  return (
  <>
  <div className="box bg-secondary sticky-top">
    <button className="btn btn-secondary float-right rounded-pill" onClick={()=> navigate('/')}> <i className="fa-solid fa-house-chimney"></i> </button>
    <button className="btn btn-secondary float-right rounded-pill" onClick={()=> navigate('/contact')}> <i className="fa-solid fa-address-book"></i> </button>
    <div style={{ clear: 'both'}}></div>
  </div>
  <div className="container my-5">
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
      <button className="btn btn-secondary float-right rounded-pill my-3 mx-3 w-100" onClick={()=> handleCreateContact()}> Crear Contacto</button>
      <br />
    </div>
  </>
  )
};
//export default addContact;
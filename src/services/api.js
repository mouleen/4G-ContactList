const apiBaseUrl = "https://playground.4geeks.com/contact"

// servicio para crear un nuevo contacto
export const createContact = async (agenda,bodyData) => {
    
    const createUser = await fetch(apiBaseUrl + "/agendas/" + agenda ,
        {
            method:"POST",
            headers:{
                "content-type": "application/json"
            }
        }
    );

    const newUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts",
        {
            method:"POST",
            body: JSON.stringify(bodyData),
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await newUser.json();
    return response;

}

//obtener el listado de contactos
export const getContacts = async (agenda) => {

    const createUser = await fetch(apiBaseUrl + "/agendas/" + agenda ,
        {
            method:"POST",
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts" );
    const data = await response.json();
    const contactos = data.contacts;
    return contactos; //devolvemos el array de contactos
}




export const deleteContact = async (agenda,contactId) => {
    
// generamos la url con el id https://playground.4geeks.com/contact/agendas/codemind_bytes/contacts/66

    const deleteUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts/"+ contactId,
        {
            method:"DELETE",
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await deleteUser.json();
    return response;

}


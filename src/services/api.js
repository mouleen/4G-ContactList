const apiBaseUrl = "https://playground.4geeks.com/contact"

// Servicio API Crear Contacto
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

// Servicio API Actualizar Contacto 
export const updateContact = async (agenda,bodyData,id) => {    
    const createUser = await fetch(apiBaseUrl + "/agendas/" + agenda ,
        {
            method:"POST",
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const newUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts/"+ id,
        {
            method:"PUT",
            body: JSON.stringify(bodyData),
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await newUser.json();
    return response;
}


// Servicio API Obtener el listado de contactos
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

// Servicio API Borrar Contacto 
export const deleteContact = async (agenda,contactId) => {
    const deleteUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts/"+ contactId,
        {
            method:"DELETE",
            headers:{
                "content-type": "application/json"
            }
        }
    );
    const response = await deleteUser;
    return response;
}

// Servicio API Obtener Contacto 
export const getContact = async (agenda,contactId) => {
    const data = await getContacts(agenda);
    return data.filter((item) => item.id == contactId ); //devolvemos el array de contactos
}


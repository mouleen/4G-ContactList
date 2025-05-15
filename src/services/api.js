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
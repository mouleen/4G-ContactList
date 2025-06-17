// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

const ContactCard = ({name,phone,email,address}) => {
  return <div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="people-nearby">
              <div className="nearby-user">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img src={ 'https://bootdey.com/img/Content/avatar/avatar7.png' } alt="user" className="profile-photo-lg" />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <h5><a href="#" className="profile-link text-black link-underline link-underline-opacity-0"><i className="fa-solid fa-id-card-clip me-3"></i>{name}</a></h5>
                    <p><i className="fa-solid fa-map-location-dot me-3 mt-3"></i>{address}</p>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <p><i className="fa-solid fa-square-phone me-3"></i>{phone}</p>
                     <p className="text-muted"><i className="fa-regular fa-envelope me-2"></i>{email}</p>
                  </div>
                </div>
              </div>
            </div>
    	</div>
	</div>
</div> ;
}
export default ContactCard;
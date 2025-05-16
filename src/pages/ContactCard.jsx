// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

const ContactCard = ({name,phone,email,address}) => {
  return <div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="people-nearby">
              <div class="nearby-user">
                <div class="row">
                  <div class="col-md-2 col-sm-2">
                    <img src={ 'https://bootdey.com/img/Content/avatar/avatar7.png' } alt="user" className="profile-photo-lg" />
                  </div>
                  <div class="col-md-7 col-sm-7">
                    <h5><a href="#" class="profile-link">{name}</a></h5>
                    <p>{phone}</p>
                    <p class="text-muted">{email}</p>
                  </div>
                  <div class="col-md-3 col-sm-3">
                    <button class="btn btn-primary pull-right">{address}</button>
                  </div>
                </div>
              </div>
            </div>
    	</div>
	</div>
</div> ;
}
export default ContactCard;
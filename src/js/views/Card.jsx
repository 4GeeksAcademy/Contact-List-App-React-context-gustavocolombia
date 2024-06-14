import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


const Card = ({contact}) => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()
  return (
    <>
      <div className="card">
        <div className="card-body d-flex">
        <img src="https://www.tuexpertoit.com/wp-content/uploads/2012/04/contactos-hotmail.jpg" alt="aqui esta el avatar del contacto" width="100px" />
          <div className="ms-5">
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
          <div>{contact.address}</div>
          {contact.name}
          </div>
        </div>

        <div className="card-footer">
          <button
            onClick={() => actions.deleteContact(contact.id)}
            className="btn btn-danger"
          >
            borrar
          </button>
          <button onClick={()=> navigate("/edit/" + contact.id)} className="btn btn-primary">editar</button>
        </div>
      </div>
    </>
  );
};
export default Card;

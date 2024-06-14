import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";
export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await actions.editContact(params.id, contact);
    if (result) {
      navigate("/");
    }
  }
  useEffect(() => {
    if (params.id && store.contacts.length > 0) {
      const currentContact = store.contacts.find(
        (item) => params.id == item.id
      );
      setContact(currentContact);
    }
  }, [params.id, store.contacts]);

  return (
    <div className="container">
      <h1 className="text-center mt-5">Add a new contact</h1>
      <div className="d-flex justify-content-center">
        <div className="card w-75">
          <form
            action=""
            className="card-body"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <label className="mt-4">Full Name</label>
              <input
                className="form-control"
                name="name" value={contact.name}
                onChange={(event) => handleChange(event)}
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="mt-4">Email</label>
              <input
                className="form-control"
                name="email" value={contact.email}
                onChange={(event) => handleChange(event)}
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="mt-4">Phone</label>
              <input
                className="form-control"
                name="phone" value={contact.phone}
                onChange={(event) => handleChange(event)}
                placeholder="Enter Phone"
              />
            </div>
            <div>
              <label className="mt-4">Address</label>
              <input
                className="form-control"
                name="address" value={contact.address}
                onChange={(event) => handleChange(event)}
                placeholder="Enter Address"
              />
            </div>
            <button className="btn btn-primary w-100 mt-3">save</button>
            <Link to="/">or get back to contacts</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

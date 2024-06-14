import React, { useContext, useState }from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
export const AddContact = () => {
	const {store, actions} = useContext(Context)
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	
	});
	const navigate = useNavigate() 

	function handleChange(event) {
		setContact({...contact, [event.target.name]: event.target.value})
		}
	async function handleSubmit(event) {
		event.preventDefault()
		const result = await actions.addContact(contact)
		if(result) {
			navigate("/")
		}
		
	}
		
	return (
		<div className="container">
			<h1 className="text-center mt-5">Add a new contact</h1>
			<div className="d-flex justify-content-center">
				<div className="card w-75">
					<form action="" className="card-body" onSubmit={(e) => handleSubmit(e)}>
						<div>
							<label className="mt-4">
								Full Name
							</label>
							<input className="form-control" name="name"  onChange={(event) => handleChange(event)} placeholder="Full Name" />
						</div>
						<div>
							<label className="mt-4">
								Email
							</label>
							<input className="form-control" name="email"  onChange={(event) => handleChange(event)} placeholder="Enter email" />
						</div>
						<div>
							<label className="mt-4">
								Phone
							</label>
							<input className="form-control" name="phone"  onChange={(event) => handleChange(event)} placeholder="Enter Phone" />
						</div>
						<div>
							<label className="mt-4">
								Address
							</label>
							<input className="form-control" name="address"  onChange={(event) => handleChange(event)} placeholder="Enter Address" />
						</div>
						<button className="btn btn-primary w-100 mt-3">save</button>
					<Link to="/">or get back to contacts</Link>
					</form>
				</div>
			</div>
		</div>

	)
};

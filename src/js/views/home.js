import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store)
	return (
		<div className="container mx-auto">
			{store.contacts.map((contact) => {
				return (
					
					<Card key={contact.id} contact={contact}/> 
						
				)
			})}
		</div>

	);
};
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			apiUrl: "https://playground.4geeks.com/contact"

		},
		actions: {
			getContactlist: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.apiUrl}/agendas/gustavoColombia/contacts`);
					console.log(response)
					if (!response.ok) {
						throw new Error("No se puede cargar")
					}
					const data = await response.json()
					console.log(data)
					setStore({ contacts: data.contacts })

				}
				catch (error) {
					console.log(error)
				}
			},

			createAgenda: async () => {
				const store = getStore()
				try {
				const response = await fetch(`${store.apiUrl}/agendas/gustavoColombia`, {method: "POST"});
					console.log(response)
					if(!response.ok) {
						throw new Error("No se puede crear la agenda")
					}
					
				} catch (error) {
					console.log(error)
				}
			},

			addContact: async (contact) => {
				const store = getStore()
				console.log(contact)
				try {
					const response = await fetch(`${store.apiUrl}/agendas/gustavoColombia/contacts`,
						{
							method: "POST",
							body: JSON.stringify(contact),
							headers: { "Content-Type": "application/json" }
						})

					if (!response.ok) {
						throw new Error("No se pudieron agregar contactos")
					}
					const data = await response.json()
					setStore({contacts: [...store.contacts, data]})
					return true

				}
				catch (error) {
					console.log(error)
				}
			},
			editContact: async (id, contact) => {
				const store = getStore();
				console.log(id, contact)
				// try {
					const response = await fetch(`${store.apiUrl}/agendas/gustavoColombia/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify(contact),
						headers: {
							"Content-Type": "application/json"
						}
					})
					console.log(response)
					const data = await response.json();
					console.log(data)
					if (!response.ok) {
						throw new Error("No se pudo editar el contacto")
					}
					const updatedArray = store.contacts.map(item => {
						if(item.id == id){
							return data 
						}
						   return item
					})
					setStore({contacts: updatedArray})
					return true 
				// } catch (error) {
				// 	console.log(error)
				// }


			},
			deleteContact: async (id) => {
				try {
					const store = getStore();
					const response = await fetch(`${store.apiUrl}/agendas/gustavoColombia/contacts/${id}`, {
						method: "DELETE"
					}

					);

					if (!response.ok) {
						alert("borrar contacto :(")
						throw new Error("No se pudo borrar :(");
					} else {
						const filteredContacts = store.contacts.filter((contact) => contact.id != id);
						setStore({ contacts: filteredContacts })
					}
				}
				catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;

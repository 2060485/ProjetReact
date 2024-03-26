import React, { useState } from 'react';
import axios from 'axios';

function ClientList() {
    const [clients, setClients] = useState([]);
    const [updatedClient, setUpdatedClient] = useState({
        clientID: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [editingClientId, setEditingClientId] = useState(null);

    const getAllClients = (e) => {
        e.preventDefault();
        axios.get("http://localhost:7373/bob")
            .then((res) => {
                setClients(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deleteClientById = (clientId) => {
        axios.delete(`http://localhost:7373/bob/delete/${clientId}`)
            .then(() => {
                setClients(clients.filter(client => client.clientID !== clientId));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const updateClientById = (clientId) => {
        axios.put(`http://localhost:7373/bob/update/${clientId}`, updatedClient)
            .then(() => {
                setClients(clients.map(client => {
                    if (client.clientID === clientId) {
                        return { ...client, ...updatedClient };
                    }
                    return client;
                }));
                setEditingClientId(null);
                setUpdatedClient({
                    clientID: '',
                    firstName: '',
                    lastName: '',
                    email: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedClient(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const setEditClient = (client) => {
        setEditingClientId(client.clientID);
        setUpdatedClient(client);
    }

    const cancelEdit = () => {
        setEditingClientId(null);
        setUpdatedClient({
            clientID: '',
            firstName: '',
            lastName: '',
            email: ''
        });
    }

    return (
        <div>
            <h2>Client List</h2>
            <button onClick={getAllClients}>Get All Clients</button>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client) => (
                    <tr key={client.clientID}>
                        <td>{client.clientID}</td>
                        <td>{editingClientId === client.clientID ?
                            <input type="text" name="firstName" value={updatedClient.firstName} onChange={handleInputChange} /> :
                            client.firstName}</td>
                        <td>{editingClientId === client.clientID ?
                            <input type="text" name="lastName" value={updatedClient.lastName} onChange={handleInputChange} /> :
                            client.lastName}</td>
                        <td>{editingClientId === client.clientID ?
                            <input type="text" name="email" value={updatedClient.email} onChange={handleInputChange} /> :
                            client.email}</td>
                        <td>
                            {editingClientId === client.clientID ? (
                                <>
                                    <button onClick={() => updateClientById(client.clientID)}>Save</button>
                                    <button onClick={cancelEdit}>Cancel</button>
                                </>
                            ) : (
                                <button onClick={() => setEditClient(client)}>Edit</button>
                            )}
                            <button onClick={() => deleteClientById(client.clientID)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClientList() {
    const [clients, setClients] = useState([]);
    const [editingClientId, setEditingClientId] = useState(null);
    const [updatedClient, setUpdatedClient] = useState({
        clientID: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    const getAllClients = () => {
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

    useEffect(() => {
        getAllClients();
    }, []);

    return (
        <div className="container mt-3">
            <h2 className="mt-5 mb-4">Client List</h2>
            <table className="table">
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
                            <input type="text" name="firstName" value={updatedClient.firstName} onChange={handleInputChange} className="form-control" /> :
                            client.firstName}</td>
                        <td>{editingClientId === client.clientID ?
                            <input type="text" name="lastName" value={updatedClient.lastName} onChange={handleInputChange} className="form-control" /> :
                            client.lastName}</td>
                        <td>{editingClientId === client.clientID ?
                            <input type="text" name="email" value={updatedClient.email} onChange={handleInputChange} className="form-control" /> :
                            client.email}</td>
                        <td>
                            {editingClientId === client.clientID ? (
                                <>
                                    <button onClick={() => updateClientById(client.clientID)} className="btn btn-success m-1">Save</button>
                                    <button onClick={cancelEdit} className="btn btn-danger m-1">Cancel</button>
                                </>
                            ) : (
                                <button className="btn btn-primary m-1" onClick={() => setEditClient(client)}>Edit</button>
                            )}
                            <button className="btn btn-danger m-1" onClick={() => deleteClientById(client.clientID)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;

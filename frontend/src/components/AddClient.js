import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateClient() {

    const [client, setClient] = useState({
        firstName:"",
        lastName:"",
        email:""
    })

    // Always the same
    const handleChange = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})
    }

    const navigate = useNavigate();
    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7373/crc", client)
            .then((res) =>{
                console.log("Client added");
                navigate("/listClts")
            }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <div className="mt-5 container">
            <div className="card">
                <div className='card-header'>
                    Add a new Client:
                </div>
                <div className='card-body'>

                    <form method="post" onSubmit={(e) => submitNewClient(e)}>
                        <div className="mb-3">
                            <label className="form-label">Firstname</label>
                            <input type="text"
                                   className="form-control"
                                   name="firstName"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.firstName}

                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Lastname</label>
                            <input type="text"
                                   className="form-control"
                                   name="lastName"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.lastName}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text"
                                   className="form-control"
                                   name="email"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.email}

                            />
                        </div>
                        <button
                            className="btn btn-primary mt-3">
                            Add Client
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateClient

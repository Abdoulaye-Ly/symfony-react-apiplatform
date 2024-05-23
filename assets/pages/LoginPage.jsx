import React, { useState } from "react";
import axios from "axios";

const LoginPage = props => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await axios
                .post("http://127.0.0.1:8000/api/login_check", credentials)
                .then(response => console.log(response));
        } catch (error){
            console.log(error.response);
            setError("Adresse mail invalide")
        }
        console.log(credentials);
    };

    return (
        <>
        <h1>Connexion</h1>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input 
                    value={credentials.username}
                    onChange={handleChange}
                    type="email" placeholder="Adresse email" 
                    name="username" id="username" 
                    className="form-control is-invalid" 
                    />
                    {error && <p className="invalid-feedback">{error}</p>}
            </div>
                <div className="form-group"><label htmlFor=""></label>
                <input 
                    value={credentials.password}
                    onChange={handleChange}
                    type="password" 
                    placeholder="Mot de passe" 
                    name="password" id="password" 
                    className="form-control" /></div>&nbsp;
                <div className="form-group"><button type="submit" className="btn btn-success">Connexion</button></div>
        </form>
        </>
    );
};

export default LoginPage;
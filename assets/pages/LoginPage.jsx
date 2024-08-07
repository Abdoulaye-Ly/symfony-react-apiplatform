import React, { useState } from "react";
import AuthAPI from "../services/authAPI";
import Field from "../components/forms/Field";

const LoginPage = props => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    // Gestion des champs
    const handleChange = ({currentTarget}) => {
        const { value, name } = currentTarget;
        setCredentials({...credentials, [name]: value});
    };

    // Gestion du submit
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await AuthAPI.authenticate(credentials);
            setError("");
        } catch (error){
            setError("Cette adresse mail ne correspond à aucun compte")
        }
        console.log(credentials);
    };

    return (
        <>
        <h1>Connexion</h1>

        <form onSubmit={handleSubmit}>
            <Field label="Adresse email" name="username" id="name" value={credentials.username} onChange={handleChange}
            placeholder="Adresse Email" type="email">
            </Field> 
            <Field name="password" label="Mot de passe" value={credentials.password} onChange={handleChange} type="password" error="">
                
            </Field> 
            
                <div className="form-group"><button type="submit" className="btn btn-primary">Connexion</button></div>
        </form>
        </>
    );
};

export default LoginPage;
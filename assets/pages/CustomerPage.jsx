import React from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';


const CustomerPage = () => {
    return (  
        <>
            <h1>Création d'un client</h1>

            <form>
                <Field name="lastName" label="Nom" placeholder="Nom du client" />
                <Field name="firstName" label="Prénom" placeholder="Prénom du client" />
                <Field name="email" label="Email" placeholder="Adresse email du client" />
                <Field name="company" label="Entreprise" placeholder="Entreprise du client" />
            </form>

            <div className="form-group">
                <button type="submit" className="btn btn-success">Enregistrer</button>
                <Link to="/customers" className="btn btn-link">Retour</Link>
            </div>
        </>
    );
}
 
export default CustomerPage;
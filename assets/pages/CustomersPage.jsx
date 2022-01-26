import React from 'react';

const CustomerPage = () => {
    return ( 
        <>
            <h1>Liste des cLients</h1>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Clients</th>
                        <th>Email</th>
                        <th>Entreprise</th>
                        <th className='text-center'>Factures</th>
                        <th className='text-center'>Montant total</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>a</td>
                        <td>d</td>
                        <td>cc</td>
                        <td>33</td>
                        <td className='text-center'>44</td>
                        <td className='text-center'>5</td>
                        <td>
                            <button className='btn btn-sm btn-danger'>Supprimer</button>                       
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
 
export default CustomerPage;
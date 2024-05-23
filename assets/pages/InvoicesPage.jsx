import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import InvoicesAPI from "../services/invoicesAPI";

const STATUS_CLASSES = {
    PAID: "success",
    SENT: "primary",
    CANCELLED: "danger"
};

const STATUS_LABELS = {
    PAID: "Payée",
    SENT: "Envoyée",
    CANCELLED: "Annulée"

};


const InvoicesPage = (props) => {

    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const fetchInvoices = async () => {
        try {
          const data = await InvoicesAPI.findAll();
          setInvoices(data);
        } catch(error){ 
          console.log(error.response);
        }
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

    //Pagination 
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  //Gestion de la recherche
  const handleSearch = event => {
    const value = event.currentTarget.value;
    setSearch(value);
    setCurrentPage(1);
  };

  const handleDelete = async id => {
    const originalInvoices = [...invoices];
    setInvoices(invoices.filter(customer => customer.id !== id));

    try {
      await InvoicesAPI.delete(id)
    } catch(error) {
      setInvoices(originalInvoices); 
    }
  };

  //Pagination des données
  const itemsPerPage = 15;

  const filteredInvoices = invoices.filter(
    i =>
      i.customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
      i.customer.lastName.toLowerCase().includes(search.toLowerCase()) ||
      i.amount.toString().includes(search.toLocaleLowerCase()) ||
      STATUS_LABELS[i.status].toLowerCase().includes(search.toLowerCase())
  );

  const paginatedInvoices = Pagination.getData(
    filteredInvoices,
    currentPage,
    itemsPerPage
  );

    return (
        <>
        <h1>Listes des factures</h1>

        <div className="form-group">
            <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Rechercher..." />
        </div>

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Numéro</th>
                    <th>Client</th>
                    <th>Date d'envoi</th>
                    <th>Statut</th>
                    <th>Montant</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {paginatedInvoices.map(invoice => ( <tr key={invoice.id}>
                
                    <td>{invoice.chrono}</td>
                    <td>{invoice.customer.firstName} {invoice.customer.lastName}</td>
                    <td>{invoice.sentAt}</td>
                    <td>
                        <span className={"badge badge-" + STATUS_CLASSES[invoices.status]}
                        >
                            {STATUS_LABELS[invoice.status]}</span>
                    </td>
                    <td>{invoice.amount}</td>
                    <td>
                        <button className="btn btn-sm btn-primary">Editer</button>&nbsp;
                        <button onClick={() => handleDelete(invoice.id)} className="btn btn-sm btn-danger">Supprimer</button>
                    </td>
                </tr>
                ))} 
            </tbody>
        </table>
        {itemsPerPage < filteredInvoices.length && (
            <Pagination currentPage={currentPage} 
            itemsPerPage={itemsPerPage} 
            onPageChanged={handlePageChange} 
            length={filteredInvoices.length}/>
            )}
        </>
    )
};

export default InvoicesPage;
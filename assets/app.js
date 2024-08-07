import React from 'react';
import ReactDom from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import NavbarWithRouter from './components/Navbar';
import HomePage from './pages/HomePage';
import CustomersPage from './pages/CustomersPage';
import InvoicesPage from './pages/InvoicesPage';
import CustomerPage from './pages/CustomerPage';


const App = () => {
    return (
        <HashRouter>
            <NavbarWithRouter />

            <main className='container pt-5'>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/customers" component={CustomersPage} />
                    <Route path="/customers/:id" component={CustomerPage} />
                    <Route path="/invoices" component={InvoicesPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>
        </HashRouter>
    ); 
};

const rootElement = document.querySelector('#app');
ReactDom.render(<App />, rootElement);

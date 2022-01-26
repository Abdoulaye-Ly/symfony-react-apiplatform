import React from 'react';
import ReactDom from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomersPage';

const App = () => {
    return (
        <HashRouter>
            <Navbar />

            <main className='container pt-5'>
                <Switch>
                    <Route path="/customers" component={CustomerPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>
        </HashRouter>
    ); 
};

const rootElement = document.querySelector('#app');
ReactDom.render(<App />, rootElement);

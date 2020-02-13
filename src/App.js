import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './pages/Form';

function App() {
    return (
        <>
            <nav class="navbar navbar-light" style={{backgroundColor: "#2B3547"}}>
                <a class="navbar-brand" href="#">
                    <img src={ `${process.env.PUBLIC_URL}/logo.svg`} width="50" height="50" alt=""/>
                </a>
            </nav>
            <BrowserRouter>
                <div className="container pt-5">
                    <Route path="/" exact component={ Form }/>
                </div>
            </BrowserRouter>
        </>
    );
}


export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Cardapio from './Cardapio';
import Pedido from './Pedido';
import './index.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

ReactDOM.render(
    (
        <Router>
        <App>
                <Switch>            
                    <Route exact path="/" component={Home}/>
                    <Route path="/cardapio" component={Cardapio}/>
                    <Route path="/pedido" component={Pedido}/>                
                </Switch>            
        </App>
    </Router>
    ),
    document.getElementById('root')
  );
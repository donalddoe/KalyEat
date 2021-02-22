import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import App from './App';
import Signup from './screens/signUp';
import Login from './screens/login';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



ReactDOM.render(
  
  <BrowserRouter>
  <Switch>
    <Route path='/' exact render={props => <App {...props} />}/>
    <Route path='/signup' exact render={props => <Signup {...props} />}/>
    <Route path='/login' exact render={props => <Login {...props} />}/>
    


  </Switch>
 </BrowserRouter>,
 
  document.getElementById('root')
);



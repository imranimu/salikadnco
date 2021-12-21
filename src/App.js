import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './services/PrivateRoute';

import './App.css';  
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import NoMatch from "./components/404Page";
import PropertyPage from './pages/property';
import NewPropertyPage from './pages/newProperty';

class App extends Component {
 
  render() {
    return (    
      <>
        <Router>
            <Switch>              
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard}/>              
              <PrivateRoute path="/property/all" component={PropertyPage}/>
              <PrivateRoute path="/property/new" component={NewPropertyPage}/>

              <Route component={NoMatch} />

              {/* 
              <PrivateRoute path="/category-edit/:id" component={EditCategory}/> 
              */}
              
            </Switch>        
        </Router>        
      </>
    );  
  }
}

export default App;

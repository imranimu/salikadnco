import React, { Component } from 'react';

import {Link} from 'react-router-dom';  

import Auth from '../../services/auth'
 
class logoutButton extends Component { 
   
    constructor() {
        super();
        this.state = { 
            WrongMassage: '', 
            token: ''
        };  
    }

    LogOut(e) {
        e.preventDefault();
        Auth.logout();
        window.location = '/'; 
    }

    render() {
        return ( 
            <Link to="#" onClick={this.LogOut.bind(this)} ><i className="fa fa-sign-out"></i> Log out</Link>                         
        )
    }
} 

export default logoutButton;
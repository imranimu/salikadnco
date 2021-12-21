import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, ButtonDropdown, DropdownToggle , DropdownMenu} from 'reactstrap';
import LogOut from "../auth/logOut";
 
class Header extends Component {    

    constructor() {
        super(); 
        this.state = {  
            dropdownOpen: false
        };         
    }

    toggle() {  
        document.body.classList.toggle('mini-navbar'); 
    }  
    
    toggleMenu = () =>{
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {        

        return (
            <Row className="border-bottom">
                
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-header">
                        <div className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={this.toggle.bind(this)}>
                            <i className="fa fa-bars"></i> 
                        </div>
                    </div>                    

                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <span className="m-r-sm text-muted welcome-message">Welcome to Salik &amp; Co</span>
                        </li>
                        <li className="dropdown notificationDropdown">
                            <ul className="pl-0">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleMenu}>
                                <DropdownToggle 
                                    tag="a"
                                    className="dropdown-toggle count-info"
                                    data-toggle="dropdown">                                         
                                    <i className="fa fa-bell"></i><span className="label label-primary">8</span>                                        
                                </DropdownToggle>
                                <DropdownMenu right className="DarkBG">
                                    <li>
                                        <Link to="#mailbox">                                         
                                            <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                            <span className="pull-right text-muted small">4 minutes ago</span>                                         
                                        </Link>                                     
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <Link to="#profile">
                                            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                            <span className="pull-right text-muted small">12 minutes ago</span>
                                        </Link>                                    
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <Link to="#grid_options">
                                            <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </Link>                                    
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="text-center">
                                            <Link to="#notifications">
                                                <strong>See All Alerts</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </Link>                                        
                                        </div>
                                    </li>
                                </DropdownMenu>
                            </ButtonDropdown>    
                            </ul>                         
                        </li>
                        <li>                        
                            <LogOut/>
                        </li>
                    </ul>

                </nav>

            </Row>
        )
    }
} 

export default Header;
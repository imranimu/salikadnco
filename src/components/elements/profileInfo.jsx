import React, { Component } from 'react';

// import { 
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu, 
// } from 'reactstrap';

// import { Link } from "react-router-dom";
// import LogOut from "../auth/logOut"; 

export default class ProfileInfo extends Component {

    // constructor() {
    //     super(); 
    //     this.state = {  
    //         dropdownOpen: false
    //     };         
    // }

    // toggle = () =>{
    //     this.setState({
    //         dropdownOpen : !this.state.dropdownOpen
    //     })
    // }

    render() {
        return (
            <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                    <div className="dropdown profile-element">                       
                        <span toggle={this.toggle}>
                            <img className="img-circle" src="/images/profile_small.png" alt="Salik and Co Profile" />
                        </span>
                        <span className="clear">
                            <span className="block m-t-xs"> 
                                <strong className="font-bold text-white">Jone Due</strong>
                            </span> 
                            <span className="text-muted text-xs block text-capitalize">Admin</span>
                        </span>
                        {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret></DropdownToggle>
                            <DropdownMenu>                                
                                <ul>
                                    <li><Link to="#Profile"><i className="fa fa-user"> </i> Profile</Link></li> 
                                    <li className="divider"></li>                                
                                    <li>
                                        <LogOut />
                                    </li>
                                </ul> 
                            </DropdownMenu>
                        </Dropdown>  */}
                    </div>
                    <div className="logo-element">
                        <img src="/images/logo-sm.png" alt="YFC Small logo."/>
                    </div>
                </li> 
            </ul>
        );
    }
}

import React, { Component} from 'react';

import ProfileInfo from './profileInfo'

import Auth from '../../services/auth'

import {    
    MdKeyboardArrowDown,    
    MdAdd, 
} from 'react-icons/md';
import {FaCogs} from 'react-icons/fa'
import {TiContacts} from 'react-icons/ti'
import { 
  AiOutlineDashboard, 
  AiOutlineGlobal, 
  AiOutlineCalendar, 
  AiOutlineCopy,
  AiFillTool
} from 'react-icons/ai'; 

import {BsBuilding, BsListUl} from 'react-icons/bs'  

import { NavLink } from 'react-router-dom';
import {  
    Collapse,
    Nav,
    NavItem,
    NavLink as BSNavLink,
} from 'reactstrap';

import bn from '../../services/bemnames';

   
const bem = bn.create('sidebar'); 

class Navigation extends Component {     
   
    constructor() {
        super(); 
        this.state = {                          
            isOpenProperty: true,
            isOpenSettings: true, 
        };         
    }     

    componentDidMount() {     

      const user = Auth.getUser();      

        if(user){        
            var name = user.first_name + ' ' + user.last_name;

            if( name && user.role ){
                this.setState({name: name, designation: user.role});
            }          
        } 
    }     
  
    handleClick = name => () => {
      if(name === 'Property'){
          this.setState(prevState => {
              const isOpen = prevState[`isOpen${name}`];    
              return {
                  [`isOpenProperty`]: !isOpen,                  
                  [`isOpenSettings`]: false,
              };    
          });
      }else if(name === 'Settings'){
          this.setState(prevState => {
              const isOpen = prevState[`isOpen${name}`];    
              return {
                  [`isOpenSettings`]: !isOpen,                  
                  [`isOpenProperty`]: false,
              };    
          });
      }        
    };

    toggle = () =>{
        this.setState({
            dropdownOpen : !this.state.dropdownOpen
        })
    }

    render(){ 
        /*
        ## Admin Menu 
        ***********************/
        var navItems = [
            { to: '/dashboard', name: 'dashboard', exact: true, Icon: AiOutlineDashboard },
        ]; 
        var navProperty = [
            { to: '/property/all', name: 'Lists ', exact: false, Icon: BsListUl },                
            { to: '/property/new', name: 'Add', exact: false, Icon: MdAdd },           
        ]; 
        var navItem2 = [
            { to: '/website', name: 'Website', exact: true, Icon: AiOutlineGlobal },
            { to: '/diary', name: 'Diary', exact: true, Icon: AiOutlineCalendar },
            { to: '/document-Manager', name: 'Document Manager', exact: true, Icon: AiOutlineCopy },
            { to: '/contacts', name: 'Contacts', exact: true, Icon: TiContacts },
            { to: '/settings', name: 'Settings', exact: true, Icon: FaCogs },
            { to: '/tools', name: 'Tools', exact: true, Icon: AiFillTool },
        ];
        // var navSettings = [
        //     { to: '/settings/email', name: 'Emails', exact: false, Icon: RiMailSettingsLine },
        //     { to: '/settings/content', name: 'Content', exact: false, Icon: MdPayment },
        //     { to: '/settings/seo', name: 'SEO and Analytic', exact: false, Icon: IoIosAnalytics }, 
        // ];      

        return (         
            <nav className="navbar-default navbar-static-side" role="navigation">                
              
                <div className="sidebar-collapse"> 

                    <ProfileInfo name={this.state.name} designation={this.state.designation} />                     

                    <Nav vertical>
                        {navItems.map(({ to, name, exact, Icon }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                            <BSNavLink
                                id={`navItem-${name}-${index}`}
                                className="text-capitalize"
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >
                                <Icon className={bem.e('nav-item-icon')} />
                                <span className="">{name}</span>
                            </BSNavLink>
                            </NavItem>
                        ))}  

                        <NavItem
                            className={bem.e('nav-item')}
                            onClick={this.handleClick('Property')}
                        >
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="d-flex">
                                <BsBuilding className={bem.e('nav-item-icon')} />
                                <span className="">Property</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                padding: 0,
                                transform: this.state.isOpenProperty
                                    ? 'rotate(0deg)'
                                    : 'rotate(-90deg)',
                                transitionDuration: '0.3s',
                                transitionProperty: 'transform',
                                }}
                            />
                            </BSNavLink>
                        </NavItem>
                        
                        <Collapse isOpen={this.state.isOpenProperty}>
                            {navProperty.map(({ to, name, Icon }, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-capitalize"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active" 
                                    >
                                    <Icon className={bem.e('nav-item-icon')} />
                                        <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse>    


                        {navItem2.map(({ to, name, exact, Icon }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                            <BSNavLink
                                id={`navItem-${name}-${index}`}
                                className="text-capitalize"
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >
                                <Icon className={bem.e('nav-item-icon')} />
                                <span className="">{name}</span>
                            </BSNavLink>
                            </NavItem>
                        ))} 

                    {/* {navSettings ? (
                        <>
                        <NavItem
                            className={bem.e('nav-item')}
                            onClick={this.handleClick('Settings')}
                        >
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="d-flex">
                                <FiSettings className={bem.e('nav-item-icon')} />
                                <span className="">Settings</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                padding: 0,
                                transform: this.state.isOpenSettings
                                    ? 'rotate(0deg)'
                                    : 'rotate(-90deg)',
                                transitionDuration: '0.3s',
                                transitionProperty: 'transform',
                                }}
                            />
                            </BSNavLink>
                        </NavItem>
                        <Collapse isOpen={this.state.isOpenSettings}>
                            {navSettings.map(({ to, name, Icon }, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                        id={`navItem-${name}-${index}`}
                                        className="text-uppercase"
                                        tag={NavLink}
                                        to={to}
                                        activeClassName="active" 
                                    >
                                    <Icon className={bem.e('nav-item-icon')} />
                                        <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse> 
                        </>
                    ) : ( '' )}  */}
                    </Nav>
                </div>
            </nav>            
        )
    }
}

export default Navigation;
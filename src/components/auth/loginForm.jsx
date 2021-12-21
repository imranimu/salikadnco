import React, { Component } from 'react'; 

import { Form , Button, FormGroup, Input, Alert } from 'reactstrap'; 

import { Link, withRouter } from "react-router-dom";

import Auth from '../../services/auth'

class LoginForm extends Component {  

    constructor() {
        super(); 
        this.state = { 
            credentials: {
                email: '',
                password: ''
            },            
            Loader: false,
            error: false,
            errorMessage: '',
        };    
    }
    
    componentDidMount() {

        document.body.classList.add('gray-bg');

        document.title = "Login || " + Auth.BaseName()

        const isAuthenticated =  Auth.isAuthenticated();

        if(isAuthenticated){
            window.location = '/dashboard';
        }
    } 

    isValid(){

        if (this.state.credentials.email && this.state.credentials.password) { 
            return true
        }
        return false;
    }
    
    async handleLogIn(e) {         

        e.preventDefault();
        
        this.setState({Loader : true});

        if(this.isValid()){

            const response = await Auth.login(this.state.credentials);

            console.log(response);

            if(response.error === false){

                console.log(response);

                if(response.results.roleName === 'Admin' && response.results.roleType){

                    Auth.onLoginSuccess(response.results);

                    //this.props.history.push('/');
                    window.location = '/dashboard'

                }else{
                    this.setState( { error: true, Loader : false, errorMessage: "You are not authorized!" });
                    return false;
                }

            }else{

                this.setState( { error: true, Loader : false, errorMessage: response.message });
                return false;
            }
        }else{
            this.setState( { error: true, Loader : false, errorMessage: "All fields are required!" });
            return false;
        }
    }

    emailHandler = (event) => {

        let email = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, email }
        }));
    }

    passwordHandler = (event) => {

        let password = event.target.value ;

        this.setState(prevState => ({
            credentials: { ...prevState.credentials, password }
        }));
    }

    // rememberHandler = (event) => {

    //     let remember = event.target.checked ;

    //     this.setState(prevState => ({
    //         credentials: { ...prevState.credentials, remember }
    //     }));
    // }     

    render() {   

        let Logo = "/images/logo.png";
         
        return (            
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div className="FormWrap"> 
                
                    <div className="mb-4">
                        <img src={Logo} alt="Logo" />
                    </div>                       
                    

                    {this.state.errorMessage ? <Alert color="danger">{this.state.errorMessage}</Alert> : ''}                   
                    
                    <Form className="IconicForm" onSubmit={ this.handleLogIn.bind(this) }>            
                        <FormGroup className="mb-4">                            
                            <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                            <Input type="email" name="email" placeholder="Email" onChange={this.emailHandler} />
                        </FormGroup>

                        <FormGroup className="mb-4">                            
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <Input type="password" name="password" placeholder="Password" onChange={this.passwordHandler} />
                        </FormGroup>

                        {/* <FormGroup className="pl-4">
                            <Input id="Remember" type="checkbox" onChange={this.rememberHandler}/> <Label for="Remember">Remember Me</Label>
                        </FormGroup> */}

                        

                        <div className="position-relative FormButtonWrap">

                            <Button color={"primary"}>Login</Button> 

                            {this.state.Loader ? (
                                <div className="LoadingIcon">
                                    <img src="/images/loader.svg" alt="Form loading icon."/>
                                </div>
                            ) : ( '' )}

                        </div>

                        <div className="clearfix"></div>

                        <Link className="text-info mb-4 d-block" to={"#"}>Forgot Password? </Link>                 

                    </Form>                    

                </div>
            </div>           
        )
    }
} 

export default withRouter(LoginForm);
import React, { Component } from 'react';

import { Row, Col } from 'reactstrap'
import Header from './elements/header'
import Navigation from './elements/Navigation'
import Breadcrumb from './partial/breadcrumb' 

import Auth from '../services/auth'

class ErrorPage extends Component {

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "404 - Page Not Found || " + Auth.BaseName()
    }

    render() {
        return (
            <>
            <div id="wrapper">         

                <Navigation/>

                <div id="page-wrapper" className="gray-bg">

                    <Header />

                    <Breadcrumb title="404 - Page Not Found"/>                

                    <div className="wrapper wrapper-content animated fadeInRight">
                        <Row className="row">
                            <Col lg={12}>
                                <div className="ibox ">
                                    <div className="ibox-content">
                                        <p>Sorry, we couldn't find the page you are looking for. Please check the URL or try other sections from sidebar.</p>     
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>  
                </div>
            </div>            
            </>  
        )
    }
}

export default ErrorPage;
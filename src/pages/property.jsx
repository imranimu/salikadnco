import React from "react";
import {Row, Col, Card, CardHeader, CardBody} from 'reactstrap';
import Header from "../components/elements/header";
import Navigation from "../components/elements/Navigation";
import Breadcrumb from "../components/partial/breadcrumb";
import PropertyList from "../components/property/propertyList";
import PropertyContextProvider from "../context/PropertyContext";

class PropertyPage extends React.Component {        

    render() {         

        return <>
            <div id="wrapper">         

                <Navigation/>                

                <div id="page-wrapper" className="gray-bg">

                    <Header/>

                    <Breadcrumb title="Property"                />
                        
                    <div className="wrapper wrapper-content  animated fadeInRight">
                        <Row>
                            <Col md={12}>
                                <Card>
                                    
                                    <CardHeader>Property List</CardHeader>

                                    <CardBody>     
                                        <PropertyContextProvider>
                                            <PropertyList/>
                                        </PropertyContextProvider> 
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>        
        </>;
    }
}
 

export default PropertyPage;
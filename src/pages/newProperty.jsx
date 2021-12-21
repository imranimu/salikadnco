import React from "react";

import Header from "../components/elements/header";
import Navigation from "../components/elements/Navigation";
import Breadcrumb from "../components/partial/breadcrumb";
import AddNewPropertyForm from "../components/property/addNew";

import NewPropertyContextProvider from "../context/NewPropertyContext";

class NewPropertyPage extends React.Component {        

    render() {         

        return <>
            <div id="wrapper">         

                <Navigation/>                

                <div id="page-wrapper" className="gray-bg">

                    <Header/>

                    <Breadcrumb title="Add New Property"/>
                        
                    <div className="wrapper wrapper-content  animated fadeInRight">
                        <NewPropertyContextProvider>
                            
                            <AddNewPropertyForm/>
                             
                        </NewPropertyContextProvider>
                    </div>
                </div>
            </div>        
        </>;
    }
}
 

export default NewPropertyPage;
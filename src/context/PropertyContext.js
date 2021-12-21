import React, { Component, createContext } from 'react';
import getProperty from '../api/getProperty';

export const PropertyContext = createContext();

class PropertyContextProvider extends Component {

    state = {
        Property: [],  
    }

    componentDidMount() {  
        this.getPropertyOnLoad();     
    }     
    
    async getPropertyOnLoad(){        

        let response =  await getProperty.getProperty();          
        
        console.log(response); 

        this.setState({ Property: response });
    }   
      
    render() { 
        return (
            <PropertyContext.Provider 
                value={{
                    ...this.state,                     
                }}>
                {this.props.children}
            </PropertyContext.Provider>
        );
    }

}


export default PropertyContextProvider;
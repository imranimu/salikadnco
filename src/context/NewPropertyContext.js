import React, { Component, createContext } from 'react';
//import getProperty from '../api/getProperty';
//import SweetAlert from 'react-bootstrap-sweetalert';
import getProperty from '../api/getProperty';

export const NewPropertyContext = createContext();

class NewPropertyContextProvider extends Component {

    constructor() {        
        super(); 
        this.state = { 
            credentials: {
                reference: '',
                office: '',
                buildingName: '',
                street: '',
                village: '',
                town: '',
                countryCity: '',
                postCode: '',
                status: 'Withdrawn',
                marketing: 
                {
                    marketingPlan: '',
                    propertyStatus: '',
                    price: 
                    {
                        prefix: '£',
                        from: '',
                        to: '',
                        alternativePrice: '500',
                        frequency: '61b6ed6acc2d926fb8b16f17',
                        priceNote: ''
                    },
                    rentalTerms:
                    {
                        availableFrom: '',
                        lettingsPeriod: '',
                        terms: '',
                        groundRent: '',
                        maintenance: '',
                        serviceCharge: ''
                    },
                    feeAgencyTerms:
                    {
                        commission: '',
                        managementType: ''
                    }
                },
                information: 
                {
                    specification: '',
                    description: 
                    {
                        features: '',
                        brief: '',
                        main: '',
                        directions: '',
                        tags: ''
                    },
                    extras: 
                    {
                        centralHeating: '',
                        garden: '',
                        garage: '',
                        furnished: '',
                        tennisCourt: '',
                        swimmingPool: '',
                        conservatory: ''
                    },
                    customFields: ''
                },
                actions:
                {
                    match: '',
                    keyBook: '',
                    logEvent: '',
                    remove: '',
                    arrangeViewing: ''
                },
                assets:
                {
                    photos:
                    {
                        thumbnail: 'https://picsum.photos/800/533',
                        image: [
                            {
                                imgMobile: 'https://picsum.photos/600/320',
                                imgWeb: "https://picsum.photos/1200/800"
                            },
                            {
                                imgMobile: 'https://picsum.photos/600/320',
                                imgWeb: "https://picsum.photos/1200/800"
                            },
                            {
                                imgMobile: 'https://picsum.photos/600/320',
                                imgWeb: "https://picsum.photos/1200/800"
                            },
                        ],
                    },
                    epc: 'https://media2.estateweb.com/epc.ewdgx?56E22F5D777BA5E45C139FA7CBCE106DAD9F64CAA89AF391D2F85CBF89D4B353507E4BDCAEAD6EBBD986DC46DADAF17C',
                    sitePlans: '',
                    videoTours: 'https://www.youtube.com/watch?v=9YZTjAzak34',
                    floorplan: 'http://media2.estateweb.com/floorplan.ewdgx?D3F27AE84B5672E28993CCC247F84B48C8C355F35C13A444AD09F1480DC4CDA7A28E482D06098FDADFF24D2471DF3E1E224B5A44A6204C692E30F998BC6FEBBB',
                    pdf: 'http://media2.estateweb.com/document.ewdgx?D3F27AE84B5672E28993CCC247F84B48C8C355F35C13A444AD09F1480DC4CDA78FE3F50388F4A2A7CA7639961FDA8B2E',
                    virtualTour: '',
                    legalDocuments: ''
                },
                history:
                {
                    viewings: '',
                    offers: '',
                    advertising: '',
                    toDo: '',
                    communication: ''
                },
                documentations:
                {
                    letters: '',
                    reports: '',
                    brochures: '',
                    qrCode: ''
                },
                createAt: new Date().toISOString(),
                createdBy: '61b97960a9653b690b66fd79'
            },
            Loader: false,
            WrongMassage: '',  
            ShowSweetAlert: false,
        };    
    }     
    
    PropertyFormSubmit = async(e)=>{     

        e.preventDefault();
        
        this.setState({Loader : true});

        console.log(this.state.credentials);

        let response =  await getProperty.insertProperty(this.state.credentials);

        // const response = await Payment.Payment(this.state.credentials);   
        
        console.log(response);

        alert(response);

    }    
    ReferenceHandler = (event) => {
        let reference = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, reference }
        }));        
    } 
    BuildingNameHandler = (event) => {
        let buldingName = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, buldingName }
        }));        
    } 
    StreetNameHandler = (event) => {
        let street = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, street }
        }));        
    }    
    VillageNameHandler = (event) => {
        let village = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, village }
        }));        
    }
    TownNameHandler = (event) => {
        let town = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, town }
        }));        
    }
    CountryCityNameHandler = (event) => {
        let countryCity = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, countryCity }
        }));        
    }
    PostCodeHandler = (event) => {
        let postCode = event.target.value;
        this.setState(prevState => ({
            credentials: { ...prevState.credentials, postCode }
        }));        
    }
    

    // async getPropertyOnLoad(){        

    //     let response =  await getProperty.getProperty();          
        
    //     console.log(response); 

    //     this.setState({ Property: response });
    // }   

    CallSuccessAlert(){  

        this.setState({ 
            ShowSweetAlert: false
        });

        window.location.reload();
    }
      
    render() { 
        return (
            <NewPropertyContext.Provider 
                value={{
                    ...this.state,                
                    PropertyFormSubmit: this.PropertyFormSubmit,   
                    ReferenceHandler: this.ReferenceHandler,
                    BuildingNameHandler: this.BuildingNameHandler,
                    StreetNameHandler: this.StreetNameHandler,
                    VillageNameHandler: this.VillageNameHandler,
                    TownNameHandler: this.TownNameHandler,
                    CountryCityNameHandler: this.CountryCityNameHandler,
                    PostCodeHandler: this.PostCodeHandler
                }}>
                {this.props.children}
            </NewPropertyContext.Provider>
        );
    }

}


export default NewPropertyContextProvider;
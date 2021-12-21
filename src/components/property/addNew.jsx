import React from "react";
import {Row, Col, Card, CardHeader, CardBody, Button, Form,
    FormGroup, Label, Input, UncontrolledTooltip, 
    InputGroup, InputGroupAddon, Collapse, TabContent, TabPane, Nav, NavItem, NavLink,   } from 'reactstrap';
import classnames from 'classnames';
import { NewPropertyContext } from "../../context/NewPropertyContext";

import {BsInfoCircle, BsBuilding} from 'react-icons/bs'
import {HiSpeakerphone} from 'react-icons/hi'
import {FaRegHandPointer} from 'react-icons/fa'
import {GoFileSubmodule} from 'react-icons/go'
import {AiOutlineHistory} from 'react-icons/ai'
import {GrDocumentText} from 'react-icons/gr'

class addNewPropertyForm extends React.Component {

    static contextType = NewPropertyContext

    constructor(props) {
        super(props);
        this.state = { 
            tooltipOpen: false
        };

        this.toggle = this.toggle.bind(this); 

        this.accordiontoggle = this.accordiontoggle.bind(this);
        this.state = { collapse: 1, activeTab: '1'};        
        this.TabToggle = this.TabToggle.bind(this);
        
    } 

    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
    }

    accordiontoggle(e) {
        
        let event = e.target.dataset.event;        
        
        this.setState({ collapse: this.state.collapse === Number(event) ? 1 : Number(event) });

        this.setState({ collapse: this.state.header === Number(event) ? 1 : Number(event) });

    }

    TabToggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
        
    render() { 

        const {
            PropertyFormSubmit,
            ReferenceHandler,
            BuildingNameHandler,
            StreetNameHandler,
            VillageNameHandler,
            TownNameHandler,
            CountryCityNameHandler,
            PostCodeHandler
        } = this.context

        const {collapse} = this.state;

        return (
            
        <>
            <Form onSubmit={PropertyFormSubmit} >

                <Row className="PropertyAccordion">
                    <Col md={8} className="mb-4">
                        <Card> 
                            <Collapse isOpen={collapse === 1}>
                                <CardBody>   
                                    <Row>
                                        <Col md={12}>
                                            <h4 className="mb-3">Overview</h4>
                                            <FormGroup>
                                                <Input type="text" name="Reference" id="Reference" placeholder="Type Reference" onChange={ReferenceHandler}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="BuildingName" id="BuildingName" placeholder="Type Building Name/No." onChange={BuildingNameHandler} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="Street" id="Street" placeholder="Type Street" onChange={StreetNameHandler} />
                                            </FormGroup>
                                            
                                        </Col>
                                        <Col md={6}>      
                                            <FormGroup>
                                                <Input type="text" name="Village" id="Village" placeholder="Type Village" onChange={VillageNameHandler} />
                                            </FormGroup>                                  
                                            <FormGroup>
                                                <Input type="text" name="Town" id="Town" placeholder="Type Town" onChange={TownNameHandler} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="County" id="County" placeholder="Type County/City" onChange={CountryCityNameHandler} />
                                            </FormGroup>
                                            <FormGroup className="row">
                                                <Col md={12}>
                                                    <Input className="align-middle" type="text" name="Postcode" id="Postcode" placeholder="Type Postcode" onChange={PostCodeHandler} />
                                                    {/* <i className="fa fa-search align-middle"></i> */}
                                                </Col> 
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1475.8795195155542!2d-0.14889053755119344!3d51.529292887235165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x48761ad93d2862b5%3A0x6746383aba679844!2sChester%20Cl%20N%2C%20London%2C%20UK!3m2!1d51.5294052!2d-0.1448142!5e0!3m2!1sen!2snl!4v1639549883505!5m2!1sen!2snl" width="100%" height="200" loading="lazy" title="Chester Cl N, London, UK"></iframe>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Collapse>

                            <Collapse isOpen={collapse === 2}>
                                <CardBody>   
                                    <h4 className="mb-3">Marketing</h4>

                                    <FormGroup check inline className="mb-3">                                        
                                        <Label check>
                                            <Input type="radio" name="PropertyType"/> SELL                                       
                                        </Label>
                                    </FormGroup>

                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="PropertyType"/> LET
                                        </Label>

                                        <span className="ml-4 text-danger" id="HelperNote"><BsInfoCircle className="align-middle"/></span> 

                                        <UncontrolledTooltip  placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="HelperNote" toggle={this.toggle}>
                                            <h5>HELPER NOTE</h5>
                                            <p>Looking to sell or let this property? </p>
                                            <p> Click on one of the disposal methods to get started!</p>
                                        </UncontrolledTooltip >                                            
                                    </FormGroup>
                                    
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="MarketingPlan">Marketing Plan</Label>
                                                <Input type="select" name="select" id="MarketingPlan">
                                                    <option>Select Marketing Plan</option>
                                                    <option value="Plan 1">Plan 1</option>
                                                    <option value="Plan 2">Plan 2</option>
                                                    <option value="Plan 3">Plan 3</option>
                                                    <option value="Plan 4">Plan 4</option>
                                                    <option value="Plan 5">Plan 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="Status">Status</Label>
                                                <Input type="select" name="select" id="Status">
                                                    <option>Select Status</option>
                                                    <option value="Available">Available</option>
                                                    <option value="Withdrawn">Withdrawn</option>
                                                    <option value="Let Agreed">Let Agreed</option>
                                                    <option value="Off Market - EstateWeb Bridge">Off Market - EstateWeb Bridge</option> 
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <h4>Price</h4>                                    

                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">£</InputGroupAddon>
                                        <Input placeholder="Alternative Price Text" type="text" step="1" />
                                    </InputGroup>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">£</InputGroupAddon>
                                                <Input placeholder="From" type="text" step="1" />                                    
                                            </InputGroup>
                                        </Col>
                                        <Col md={6}>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">£</InputGroupAddon>
                                                <Input placeholder="To" type="text" step="1" />                                    
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="Frequency">Frequency</Label>
                                                <Input type="select" name="select" id="Frequency">                                        
                                                    <option value="One">One</option>
                                                    <option value="Per Hour">Per Hour</option>
                                                    <option value="Per Day">Per Day</option>
                                                    <option value="Per Night">Per Night</option> 
                                                    <option value="PW">PW</option>
                                                    <option value="PCM">PCM</option>
                                                    <option value="Per Quarter">Per Quarter</option>
                                                    <option value="Per Annum">Per Annum</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleDate">Available From</Label>
                                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Collapse>

                            <Collapse isOpen={collapse === 3}>
                                <CardBody>   
                                    <h4 className="mb-3">Information</h4>

                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.TabToggle('1'); }}
                                            >Specification</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.TabToggle('2'); }}
                                            >Description</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '3' })}
                                            onClick={() => { this.TabToggle('3'); }}
                                            >Extras</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '4' })}
                                            onClick={() => { this.TabToggle('4'); }}
                                            >Custom Fields</NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1" className="p-3">
                                            <Row className="mt-3">
                                                <Col sm="6">
                                                    <FormGroup row>
                                                        <Label for="PropertyType" sm={6}>Property Type</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="PropertyType" id="PropertyType" placeholder="Type" />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="PropertyAge" sm={6}>Property Age</Label>
                                                        <Col sm={3}>
                                                            <Input type="text" name="PropertyAge" id="PropertyAge" placeholder="Age" />
                                                        </Col>
                                                        <Col sm={3}>
                                                            <Input type="select" name="select" id="AgeType">                                        
                                                                <option value="N/A">N/A</option>
                                                                <option value="Yes">Yes</option>
                                                            </Input>
                                                        </Col>
                                                    </FormGroup> 

                                                    <FormGroup row>
                                                        <Label for="CloakRooms" sm={6}>No. of Cloak Rooms</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="CloakRooms" id="CloakRooms" placeholder="Cloak Rooms" />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="ShowerRooms" sm={6}>No. of Shower Rooms</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="ShowerRooms" id="ShowerRooms" placeholder="Shower Rooms" />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="Bathrooms" sm={6}>No. of Bathrooms</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="Bathrooms" id="Bathrooms" placeholder="Bathrooms" />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="Receptions" sm={6}>No. of Receptions</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="Receptions" id="Receptions" placeholder="Receptions" />
                                                        </Col>
                                                    </FormGroup>
                                                </Col>

                                                <Col md={6}>
                                                    <FormGroup row>
                                                        <Label for="FloorNumber" sm={6}>Floor Number</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="FloorNumber" id="FloorNumber" placeholder="Floor Number" />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="NumberOfFloors" sm={6}>Number of floors</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="NumberOfFloors" id="NumberOfFloors" placeholder="Number of floors" />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="PlotSize" sm={6}>Plot Size</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="PlotSize" id="PlotSize" placeholder="Plot Size" />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="PlotSize" sm={6}>Number of floors</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="PlotSize" id="PlotSize" placeholder="Plot Size" />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="ParkingNotes" sm={6}>Parking Notes</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="ParkingNotes" id="ParkingNotes" placeholder="Parking Notes" />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="ParkingNotes" sm={6}>Area (SqM SqF)</Label>
                                                        <Col sm={6}>
                                                            <Input type="text" name="ParkingNotes" id="ParkingNotes" placeholder="0.00 m²" />
                                                        </Col>
                                                    </FormGroup>
                                                </Col>
                                                 
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2" className="p-3">
                                            <Row>
                                                <Col sm="12">                                                    
                                                    Description Content                                                    
                                                </Col> 
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3" className="p-3">
                                            <Row>
                                                <Col sm="12">                                                    
                                                    Extras Content                                                    
                                                </Col> 
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4" className="p-3">
                                            <Row>
                                                <Col sm="12">                                                    
                                                    Custom Fields Content                                                    
                                                </Col> 
                                            </Row>
                                        </TabPane>
                                    </TabContent>   

                                </CardBody>
                            </Collapse>

                            <Collapse isOpen={collapse === 4}>
                                <CardBody>   
                                    <h4 className="mb-3">Actions</h4>

                                    <p>Match</p>
                                    <p>Key Book</p>
                                    <p>Log Event</p>
                                    <p>Remove</p>
                                    <p>Arrange Viewing</p>
                                </CardBody>
                            </Collapse>

                            <Collapse isOpen={collapse === 5}>
                                <CardBody>   
                                    <h4 className="mb-3">Assets</h4>

                                    <p>Photos</p>                                    
                                    <p>EPC</p>
                                    <p>Site Plans</p>
                                    <p>Video Tours</p>
                                    <p>Floorplan</p>
                                    <p>PDF</p>
                                    <p>Virtual Tours</p>
                                    <p>Legal Documents</p>

                                </CardBody>
                            </Collapse>

                            <Collapse isOpen={collapse === 6}>
                                <CardBody>   
                                    <h4 className="mb-3">History</h4>

                                    <p>Viewings</p>
                                    <p>Offers</p>
                                    <p>Advertising</p>
                                    <p>To Do</p>
                                    <p>Communication</p>

                                </CardBody>
                            </Collapse>

                            <Collapse isOpen={collapse === 7}>
                                <CardBody>   
                                    <h4 className="mb-3">Documents</h4>
                                    <p>Letters</p>
                                    <p>Reports</p>
                                    <p>Brochures</p>
                                    <p>QRCode</p>
                                </CardBody>
                            </Collapse>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <CardHeader onClick={this.accordiontoggle} data-event={1} className={collapse === 1 ? 'active': ''} >
                            <BsBuilding className="mr-2"/> Overview  
                        </CardHeader>
                        <CardHeader onClick={this.accordiontoggle} data-event={2} className={collapse === 2 ? 'active': ''}>
                            <HiSpeakerphone className="mr-2"/> Marketing
                        </CardHeader>

                        <CardHeader onClick={this.accordiontoggle} data-event={3} className={collapse === 3 ? 'active': ''}>
                            <BsInfoCircle className="mr-2"/> Information
                        </CardHeader>

                        <CardHeader onClick={this.accordiontoggle} data-event={4} className={collapse === 4 ? 'active': ''}>
                            <FaRegHandPointer className="mr-2"/> Actions
                        </CardHeader>

                        <CardHeader onClick={this.accordiontoggle} data-event={5} className={collapse === 5 ? 'active': ''}>
                            <GoFileSubmodule className="mr-2"/> Assets
                        </CardHeader>

                        <CardHeader onClick={this.accordiontoggle} data-event={6} className={collapse === 6 ? 'active': ''}>
                            <AiOutlineHistory className="mr-2"/> History
                        </CardHeader>

                        <CardHeader onClick={this.accordiontoggle} data-event={7} className={collapse === 7 ? 'active': ''}>
                            <GrDocumentText className="mr-2"/> Documents
                        </CardHeader>

                    </Col>  

                    <Col md={12}>
                        <Button color="primary mr-3"><i className="fa fa-save mr-2"></i>Save</Button>

                        <a href="#to" className="btn btn-success"><i className="fa fa-upload mr-2"></i>Save &amp; Published</a>
                    </Col>                             
                </Row>
            </Form>
        </>
        )
    }
}
 
export default addNewPropertyForm;
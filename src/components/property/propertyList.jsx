import React from "react";
import {Link} from 'react-router-dom'
import {Table} from 'reactstrap';

import { PropertyContext } from "../../context/PropertyContext";

class PropertyList extends React.Component {
    
    static contextType = PropertyContext

    render() { 

        const { Property } = this.context

        return <>             
            <Table>
                <thead>                                   
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Property Ref</th>
                        <th>Address</th>
                        <th>Price</th> 
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { Property.map( (value , i ) => 
                        <tr key={value._id}> 
                            <td>{i + 1}</td>
                            <td>{value.status}</td>
                            <td>{value.reference}</td>
                            <td>{value.street} {value.town} {value.postCode}</td>                                                        
                            <td>{value.marketing.price.prefix}{value.marketing.price.alternativePrice}</td>
                            <td className="text-center">
                                <span className="mr-2">
                                    <Link to={"#"}>
                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                    </Link>
                                </span>
                                <span className="mr-2">
                                    <Link to={"#"}>
                                    <i className="text-info fa fa-file"></i>
                                    </Link>
                                </span> 
                                <span>
                                    <Link to={"#"}>
                                        <i className="text-danger fa fa-trash-o"></i>
                                    </Link>
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table> 
        </>;
    }
}
 

export default PropertyList;
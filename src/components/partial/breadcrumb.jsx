import React, { Component } from 'react';

import {Row, Col} from 'reactstrap'

import {Link} from 'react-router-dom'

export default class breadcrumb extends Component {
    render() {
        return (
            <Row className="wrapper border-bottom white-bg page-heading">
                <Col lg={10}>
                    <h2>{this.props.title}</h2> 
                    <ol className="breadcrumb">
                        <li>
                            <Link to={"/dashboard"}>Home</Link>
                        </li> 
                        <li className="active">
                            <strong>{this.props.title}</strong>
                        </li>
                    </ol>
                </Col> 
            </Row>
        );
    }
}

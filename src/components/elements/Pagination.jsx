import React from 'react';
import {Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'

const Pagination = () => {
    return(
        <>
        <Row className="position-relative">
            <Col md={5}>
                <div className="dataTables_info">
                    Showing 1 to 5 of 10 entries
                </div>
            </Col>
            <Col md={7} > 
                <div className="dataTables_paginate text-right">
                    <ul className="pagination">
                        <li className="paginate_button previous disabled">
                            <Link to={"#"}>Previous</Link>
                        </li>
                        <li className="active">
                            <Link to={"#"}>1</Link>
                        </li>
                        <li>
                            <Link to={"#"}>2</Link>
                        </li>
                        <li className="paginate_button previous disabled">
                            <Link to={"#"}>Next</Link>
                        </li>
                    </ul>
                </div>
            </Col>                
        </Row>
        </>
    )
}

export default Pagination;
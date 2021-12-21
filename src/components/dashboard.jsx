import React, { Component } from 'react';

import { Row, Col} from 'reactstrap'

import Breadcrumb from './partial/breadcrumb';

//import { Doughnut } from 'react-chartjs-2';

import Auth from '../services/auth'

import Header from './elements/header'
import Navigation from './elements/Navigation'

// import Transactions from './dashboard/Transactions'
// import RecentActivities from './dashboard/RecentActivities'
// import RecentReplies from './dashboard/RecentReplies'
// import RecentVideos from './dashboard/RecentVideos'
// import ActiveAthletes from './dashboard/ActiveAthletes'
// import ActiveFans from './dashboard/ActiveFans'
// import PendingAthletes from './dashboard/PendingAthletes'
// import PendingFans from './dashboard/PendingFans'


class Dashboard extends Component {

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "Dashboard || "+Auth.BaseName()
    }

    render() {
        
        return (
            <>
            <div id="wrapper">         

                <Navigation/>

                <div id="page-wrapper" className="gray-bg">

                    <Header />
            
                    <Breadcrumb title="Dashboard"/>                    
                        
                    <div className="wrapper wrapper-content  animated fadeInRight">
                        <Row>
                            <Col md={3}>
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-info pull-right">Total</span>
                                        {/* <h5></h5> */}
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">101</h1>
                                        {/* <div className="stat-percent font-bold text-success">100% <i className="fa fa-bolt"></i></div> */}
                                        <small>Total Property</small>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-success pull-right">Available</span>
                                        {/* <h5>Videos</h5> */}
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">41</h1>
                                        <div className="stat-percent font-bold text-navy">40.49%</div>
                                        <small>Total Available</small>
                                    </div>
                                </div>
                            </Col>                           
                            
                            <Col md={3}>
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-warning pull-right">Let Agreed</span>
                                        {/* <h5>Transactions($)</h5> */}
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">40</h1>
                                        <div className="stat-percent font-bold text-navy">39.6%</div>
                                        <small>Total Let Agreed</small>
                                    </div>
                                </div>
                            </Col>

                            <Col md={3}>
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-danger pull-right">Withdrawn</span>
                                        {/* <h5>Property</h5> */}
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">20</h1>
                                         <div className="stat-percent font-bold text-info">19.8%</div>
                                        <small>Withdrawn Property</small>
                                    </div>
                                </div>
                            </Col>

                            {/* <Col md={6} className="mb-4">
                                <Transactions/>
                            </Col>

                            <Col md={6} className="mb-4">
                                <RecentActivities/>
                            </Col>

                            <Col md={6} className="mb-4">
                                <RecentReplies/>
                            </Col>

                            <Col md={6} className="mb-4">
                                <RecentVideos/>
                            </Col>

                            <Col md={6} className="mb-4">
                                <ActiveAthletes/>
                            </Col>

                            <Col md={6} className="mb-4">
                                <ActiveFans/>
                            </Col>

                            <Col md={6} className="mb-4">
                                <PendingAthletes/>
                            </Col>
                            <Col md={6} className="mb-4">
                                <PendingFans/>
                            </Col>*/}
                        </Row>
                    </div>

                </div>      

            </div>          
            </>
        )
    }
}

export default Dashboard;
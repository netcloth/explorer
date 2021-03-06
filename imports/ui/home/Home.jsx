import React, { Component } from 'react';
import { Badge, Row, Col } from 'reactstrap';
import ChainStatus from './ChainStatusContainer.js';
import Consensus from './ConsensusContainer.js';
import TopValidators from './TopValidatorsContainer.js';
import Chart from './ChartContainer.js';
import ChainStates from '../components/ChainStatesContainer.js'
import { Helmet } from "react-helmet";
import IPALStatistics from './IPALStatistics.jsx'

export default class Home extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return <div id="home">
            <Helmet>
                <title>NetCloth Block Explorer</title>
                <meta name="description" content="NetCloth is an open source blockchain network built with Cosmos-SDK." />
            </Helmet>
            <Row>
                <Col md={3} xs={12}><h1>{Meteor.settings.public.chainName}</h1></Col>
                <Col md={9} xs={12} className="text-md-right"><ChainStates /></Col>
            </Row>
            
            <Row><Col md={12} xs={12} > <IPALStatistics /> </Col></Row>

            <Consensus />
            <ChainStatus />
            <Row>
                <Col md={6}>
                    <TopValidators />
                </Col>
                <Col md={6}>
                    <Chart />
                </Col>
            </Row>
        </div>
    }

}
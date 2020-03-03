import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Pollution from './pollution';
import DublinBike from './dublinbike';
import DublinBus from './dublinbus';
import Notification from "./notification";
//import Gmaps from './gmaps';
import Traffic from './Directions/traffic';
import Bmaps from './bmaps';
import Event from './event';
import Exp from './exp';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Bikechart from './bikechart';
import Bikepiechart from './bikepiechart';
//import pollutionpiechart from './pollutionchart';
import { Container, Row, Col } from 'react-bootstrap';

class TabMgmt extends React.Component {


  render() {

    const { user, isAuthenticated } = this.props.auth; // added

    return (
      <div>
        <Row>
          <Col>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Brand href="#home" inline>
                Sustainable City Management
                               </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Notification/>

                <Button variant='dark' onClick={this.props.logout}>Logout</Button>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>


        {/* div tag for tabs */}
        <div>

          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Home" title="Home">
              <Container>
                <Row className="justify-content-md-center">
                  <Col >
                    <Bikechart />
                  </Col>
                  <Col >
                    <div >
                      <Bikepiechart />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>


            <Tab eventKey="DublinBus" title="DublinBus">
              <DublinBus />
            </Tab>


            <Tab eventKey="Pollution" title="Pollution">
              <Pollution />
            </Tab>


            <Tab eventKey="DublinBike" title="Dublin Bike">
              <DublinBike />
            </Tab>


            <Tab eventKey="Events" title="Events">
              <Event />
            </Tab>

            <Tab eventKey="Traffic" title="Traffic">
              <Traffic />
            </Tab>





            <Tab eventKey="Exp" title="Exp">
              <Exp />
            </Tab>
          </Tabs>
        </div>


        {/* chart */}

      </div>
    )
  }

};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(TabMgmt);

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div class="section-blue">
        <div>
        <span class="span-space"></span>
          <Grid class="maps">
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/afrique.jpg" circle className="profile-pic" />
                <h3>Afrique</h3>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/europe.png" circle className="profile-pic" />
                <h3>Europe</h3>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/asie2.png" circle className="profile-pic" />
                <h3>Asie</h3>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

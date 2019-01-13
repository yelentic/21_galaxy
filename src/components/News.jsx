import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus lobortis massa ornare convallis. Sed volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo sollicitudin, mauris ipsum malesuada purus, id tincidunt velit lectus nec purus. Nullam consequat vehicula odio cursus molestie.</p>

            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus lobortis massa ornare convallis. Sed volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo sollicitudin, mauris ipsum malesuada purus, id tincidunt velit lectus nec purus. Nullam consequat vehicula odio cursus molestie.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

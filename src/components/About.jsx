import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
            <h3>Test</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus lobortis massa ornare convallis. Sed volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo sollicitudin, mauris ipsum malesuada purus, id tincidunt velit lectus nec purus. Nullam consequat vehicula odio cursus molestie.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}

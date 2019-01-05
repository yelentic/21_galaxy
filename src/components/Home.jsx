import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Image src="assets/dog-people.jpg" className="header-image" />

      <Grid>
        <Jumbotron>
          <h2>Bienvenue sur 21 Galaxy !</h2>
          <p>21 Galaxy est un cabinet en ligne qui vous accompagne dans vos activités.</p>
          <Link to="/">
            <Button bsStyle="primary">En apprendre plus</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/afrique.jpg" circle className="profile-pic"/>
            <h3>Afrique</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus lobortis massa ornare convallis. Sed volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo sollicitudin, mauris ipsum malesuada purus, id tincidunt velit lectus nec purus. Nullam consequat vehicula odio cursus molestie. </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/europe.png" circle className="profile-pic"/>
            <h3>Europe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus lobortis massa ornare convallis. Sed volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo sollicitudin, mauris ipsum malesuada purus, id tincidunt velit lectus nec purus. Nullam consequat vehicula odio cursus molestie.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/asie.png" circle className="profile-pic"/>
            <h3>Asie</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus lobortis massa ornare convallis. Sed volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo sollicitudin, mauris ipsum malesuada purus, id tincidunt velit lectus nec purus. Nullam consequat vehicula odio cursus molestie.</p>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}

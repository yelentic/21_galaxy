import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import OptionsGrid from './options/OptionsGrid.jsx';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      shown: true
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    var shown = {
      display: this.state.shown ? 'block' : 'none'
    };

    var hidden = {
      display: this.state.shown ? 'none' : 'block'
    };

    return (
      <div>
        <div class="overlay image">
          <Image
            src="assets/dog-people.jpg"
            className="header-image"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div class="overlay separator">&nbsp;</div>
        <Grid>
          <Jumbotron>
            <h2>Bienvenue sur 21 Galaxy !</h2>
            <p>
              21 Galaxy est un cabinet en ligne qui vous accompagne dans vos
              activités.
            </p>
            <Link to="/">
              <Button bsStyle="primary" onClick={this.toggle.bind(this)}>
                En apprendre plus
              </Button>
            </Link>
            <p style={hidden} id="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis tellus lobortis massa ornare convallis. Sed
              volutpat eu odio eu egestas. Cras vestibulum, ipsum non commodo
              sollicitudin, mauris ipsum malesuada purus, id tincidunt velit
              lectus nec purus. Nullam consequat vehicula odio cursus molestie.
            </p>
          </Jumbotron>
        </Grid>
        <OptionsGrid />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Button } from 'react-bootstrap';
import './Home.css';

import OptionsGrid from '../options/OptionsGrid.jsx';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


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
            src="assets/back.png"
            className="header-image"
            style={{ marginBottom: 0}}
          />
        </div>

          <Jumbotron>
            <Image src="assets/21G Lg3.png" circle className="profile-pic" />
            <p>Réseau d’experts internationaux, ancré en France et implantés sur 3 continents dont 27 pays. </p>
            <Link to="/">
              <Button bsStyle="primary" onClick={this.toggle.bind(this)}>
                Découvrir 21 GALAXY
              </Button>
            </Link>
            <p style={hidden} id="about">
              21 Galaxy vous accompagne sur tout le cycle de vie de votre entreprise, de sa création jusqu’à son évolution. L’objectif est de pérenniser votre activité et d’optimiser votre croissance et vos opportunités d’affaires.
            </p>
          </Jumbotron>
          <div className="overlay separator">&nbsp;  <h1 style={{color:'white', textAlign:"center"}}> <i>21 Galaxy le partenaire de votre succès</i></h1> </div>

        <div className={"nosoffres"}>
          <Grid>

          </Grid>
          <OptionsGrid />
        <hr/>
        </div>

        <div className="overlay separator2">&nbsp;  <h1 style={{color:'white', textAlign:"center"}}> Nous vous accompagnons dans tous vos projets de A à Z </h1> </div>

        <div  className={"nosoffres"}>
          <hr/> <br/>
          <h1 > Notre fonctionnement  </h1>
          <Image src="assets/Process.jpg" circle className="profile-pic" />
-          <AppBar position="static">
            <Tabs style={{textAlign:"center", background:"#2892D7", color:"black"}}>
              <Tab value="one" label="Prise de contact" />
              <Tab value="two" label="Proposition d'intervention" />
              <Tab value="three" label="Suivi de la mission " />
              <Tab value="Four" label="Livraison " />
            </Tabs>
          </AppBar>
        </div>

      </div>

    );
  }
}

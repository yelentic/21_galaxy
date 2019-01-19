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




            <p>
              Un cabinet en ligne qui vous accompagne dans toutes vos
              activités.
            </p>
            <Link to="/">
              <Button bsStyle="primary" onClick={this.toggle.bind(this)}>
                Découvrir 21 GALAXY
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
          <div className="overlay separator">&nbsp;  <h1 style={{color:'white', textAlign:"center"}}> Un cabinet...fdfdvdfvdfvdfvdfv </h1> </div>

        <div className={"nosoffres"}>
          <Grid>

          </Grid>
          <OptionsGrid />
  <hr/>
        </div>

        <div className="overlay separator2">&nbsp;  <h1 style={{color:'white', textAlign:"center"}}> Un cabinet...fdfdvdfvdfvdfvdfv </h1> </div>

        <div  className={"nosoffres"}>
          <hr/> <br/>
          <h1 > Notre fonctionnement  </h1>
          <Image src="assets/Process.jpg" circle className="profile-pic" />
-          <AppBar position="static">
            <Tabs style={{textAlign:"center"}}>
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Button } from 'react-bootstrap';
import './Home.css';
import OptionsGrid from '../options/optionGrid/OptionGrid.jsx';
import Typography from '@material-ui/core/Typography';

import Tabs from 'react-tabs-redux/es/components/Tabs';
import { TabContent, TabLink } from 'react-tabs-redux';

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
            style={{ marginBottom: 0 }}
          />
        </div>

        <Jumbotron>
          <Image src="assets/21G Lg3.png" circle className="profile-pic" />
          <p>
            Réseau d’experts internationaux, ancré en France et implantés sur 3
            continents dont 27 pays.{' '}
          </p>
          <Link to="/">
            <Button bsStyle="primary" onClick={this.toggle.bind(this)}>
              Découvrir 21 GALAXY
            </Button>
          </Link>
          <p style={hidden} id="about">
            21 Galaxy vous accompagne sur tout le cycle de vie de votre
            entreprise, de sa création jusqu’à son évolution. L’objectif est de
            pérenniser votre activité et d’optimiser votre croissance et vos
            opportunités d’affaires.
          </p>
        </Jumbotron>
        <div className="overlay separator">
          &nbsp;{' '}
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            {' '}
            <i>21 Galaxy le partenaire de votre succès</i>
          </h1>{' '}
        </div>

        <div className={'nosoffres'}>
          <OptionsGrid />
          <Grid />

          <hr />
        </div>
        <div className="overlay separator2">
          &nbsp;{' '}
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            {' '}
            Nous vous accompagnons dans tous vos projets de A à Z{' '}
          </h1>{' '}
        </div>

        <div className={'nosoffres'}>
          <hr /> <br />
          <h1> Notre fonctionnement </h1>
          <Image src="assets/Process.jpg" circle className="profile-pic" />
          <Tabs>
            <TabLink className="tableau" to="tab1">
              Prise de contact{' '}
            </TabLink>
            <TabLink className="tableau" to="tab2">
              {' '}
              Proposition d'intervention
            </TabLink>
            <TabLink className="tableau" to="tab3">
              Suivi de la mission{' '}
            </TabLink>

            <TabContent for="tab1">
              {' '}
              <div className="presentation">
                {' '}
                <p className="text">
                  On sait depuis longtemps que travailler avec du texte lisible
                  et contenant du sens est source de distractions, et empêche de
                  se concentrer sur la mise en page elle-même. L'avantage du
                  Lorem Ipsum sur un texte générique comme 'Du texte. Du texte.
                  Du texte.' est qu'il possède une distribution de lettres plus
                  ou moins normale, et en tout cas comparable avec celle du
                  français standard. De nombreuses suites logicielles de mise en
                  page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
                  faux texte par défaut, et une recherche pour 'Lorem Ipsum'
                  vous conduira vers de nombreux sites qui n'en sont encore qu'à
                  leur phase de construction. Plusieurs versions sont apparues
                  avec le temps, parfois par accident, souvent
                  intentionnellement (histoire d'y rajouter de petits clins
                  d'oeil, voire des phrases embarassantes).
                </p>{' '}
              </div>
            </TabContent>
            <TabContent for="tab2">
              {' '}
              <div className="presentation">
                {' '}
                <p className="text">
                  texte lisible et contenant du sens est source de distractions,
                  et empêche de se concentrer sur la mise en page elle-même.
                  L'avantage du Lorem Ipsum sur un texte générique comme 'Du
                  texte. Du texte. Du texte.' est qu'il possède une distribution
                  de lettres plus ou moins normale, et en tout cas comparable
                  avec celle du français standard. De nombreuses suites
                  logicielles de mise en page ou éditeurs de sites Web ont fait
                  du Lorem Ipsum leur faux texte par défaut, et une recherche
                  pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui
                  n'en sont encore qu'à leur phase de construction. Plusieurs
                  versions sont apparues avec le temps, parfois par accident,
                  souvent intentionnellement (histoire d'y rajouter de petits
                  clins d'oeil, voire des phrases embarassantes).
                </p>{' '}
              </div>
            </TabContent>
            <TabContent for="tab3">
              {' '}
              <div className="presentation">
                {' '}
                <p className="text">
                  texte lisible et contenant du sens est source de distractions,
                  et empêche de se concentrer sur la mise en page elle-même.
                  L'avantage du Lorem Ipsum sur un texte générique comme 'Du
                  texte. Du texte. Du texte.' distribution de lettres plus ou
                  moins normale, et en tout cas comparable avec celle du
                  français standard. De nombreuses suites logicielles de mise en
                  page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
                  faux texte par défaut, et une recherche pour 'Lorem Ipsum'
                  vous conduira vers de nombreux sites qui n'en sont encore qu'à
                  leur phase de construction. Plusieurs versions sont apparues
                  avec le temps, parfois par accident, souvent
                  intentionnellement (histoire d'y rajouter de petits clins
                  d'oeil, voire des phrases embarassantes).
                </p>{' '}
              </div>{' '}
            </TabContent>
          </Tabs>
        </div>
      </div>
    );
  }
}

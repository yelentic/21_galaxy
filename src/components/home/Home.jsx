import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Button } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';
import './Home.css';

import OptionsGrid from '../options/OptionsGrid.jsx';
import AppBar from '@material-ui/core/es/AppBar/AppBar';
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

class Home extends Component {
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
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    var shown = {
      display: this.state.shown ? 'block' : 'none'
    };

    var hidden = {
      display: this.state.shown ? 'none' : 'block'
    };

    return (
      <div>
        <div className="overlay image">
          <Image
            src="assets/back.png"
            className="header-image"
            style={{ marginBottom: 0 }}
          />
        </div>

        <Jumbotron>
          <Image src="assets/21G Lg3.png" circle className="profile-pic" />
          <p>{t('devise')}</p>
          <Link to="/">
            <Button bsStyle="primary" onClick={this.toggle.bind(this)}>
              {t('header.discover21Galaxy')}
            </Button>
          </Link>

          <p style={hidden} id="about">
            {t('about')}
          </p>
        </Jumbotron>
        <div className="overlay separator">
          &nbsp;{' '}
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            {' '}
            {t('about2')}{' '}
          </h1>{' '}
        </div>

        <div className={'nosoffres'}>
          <Grid />
          <OptionsGrid />
          <hr />
        </div>

        <div className="overlay separator2">
          &nbsp;{' '}
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            {' '}
            {t('about3')}{' '}
          </h1>{' '}
        </div>

        <div className={'nosoffres'}>
          <hr /> <br />
          <h1> {t('ourOffers.title')} </h1>
          <Image
            src="assets/Process.jpg"
            circle
            className="profile-pic"
          />-{' '}
          <AppBar position="static">
            <Tabs style={{ textAlign: 'center' }}>
              <Tab value="one" label={t('ourOffers.contact')} />
              <Tab value="two" label={t('ourOffers.interventionProposal')} />
              <Tab value="three" label={t('ourOffers.missionTracking')} />
              <Tab value="Four" label={t('ourOffers.delivery')} />
            </Tabs>
          </AppBar>
        </div>
      </div>
    );
  }
}
export default withNamespaces('translation')(Home);

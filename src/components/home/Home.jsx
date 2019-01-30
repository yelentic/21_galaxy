import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Button } from 'react-bootstrap';
import './Home.css';
import Footer from '../footer/Footer';
import OptionsGrid from '../options/optionGrid/OptionGrid.jsx';
import Typography from '@material-ui/core/Typography';
import Tabs from 'react-tabs-redux/es/components/Tabs';
import { TabContent, TabLink } from 'react-tabs-redux';
import { withNamespaces } from 'react-i18next';

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
    var shown = {
      display: this.state.shown ? 'block' : 'none'
    };

    var hidden = {
      display: this.state.shown ? 'none' : 'block'
    };

    const { t } = this.props;

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
          <p>{t('devise')} </p>
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
            <i>{t('about2')}</i>
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
            {t('about3')}{' '}
          </h1>{' '}
        </div>

        <div className={'nosoffres'}>
          <hr /> <br />
          <h1> {t('ourOffers.title')} </h1>
          <Image src="assets/Process.jpg" circle className="profile-pic" />
          <Tabs>
            <TabLink className="tableau" to="tab1">
              {t('ourOffers.contact')}{' '}
            </TabLink>
            <TabLink className="tableau" to="tab2">
              {' '}
              {t('ourOffers.interventionProposal')}
            </TabLink>
            <TabLink className="tableau" to="tab3">
              {t('ourOffers.missionTracking')}{' '}
            </TabLink>

            <TabContent for="tab1">
              {' '}
              <div className="presentation">
                {' '}
                <p className="text">{t('ourOffers.contactDropdown')}</p>{' '}
              </div>
            </TabContent>
            <TabContent for="tab2">
              {' '}
              <div className="presentation">
                {' '}
                <p className="text">
                  {t('ourOffers.interventionProposalDropdown')}
                </p>{' '}
              </div>
            </TabContent>
            <TabContent for="tab3">
              {' '}
              <div className="presentation">
                {' '}
                <p className="text">
                  {t('ourOffers.missionTrackingDropdown')}
                </p>{' '}
              </div>{' '}
            </TabContent>
          </Tabs>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withNamespaces('translation')(Home);

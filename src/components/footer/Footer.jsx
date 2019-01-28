import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';
import { withNamespaces } from 'react-i18next';

class Footer extends Component {
  render() {
    const { t } = this.props;

    return (
      <div class="section-blue">
        <div>
          <span class="span-space" />
          <Grid class="maps">
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image
                  src="assets/afrique.jpg"
                  circle
                  className="profile-pic"
                />
                <h3>{t('footer.africa')}</h3>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/europe.png" circle className="profile-pic" />
                <h3>{t('footer.europa')}</h3>
              </Col>
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/asie2.png" circle className="profile-pic" />
                <h3>{t('footer.asia')}</h3>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default withNamespaces('translation')(Footer);

import React, { Component } from 'react';
import './About.css';
import SingleLineGridList from '../titlebars/grid';
import { Image, Jumbotron } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { withNamespaces } from 'react-i18next';

class About extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="global">
        <div className="about-cover">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-title-content text-center">
                  {t('aboutPage.title')}
                </h1>
                <h2 className="h2-subtitle text-center">
                  {t('aboutPage.subtitle')}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
            <Image src="assets/21G Lg3.png" circle className="profile-about" />{' '}
            <br />
            {t('aboutPage.paragraph1')}
          </p>
          <p>
            <Image src="assets/afrique.jpg" circle className="location" />
            <Image src="assets/europe.png" circle className="location" />
            <Image src="assets/asie2.png" circle className="location" />
            {t('aboutPage.paragraph2')}
          </p>

          <hr />

          <div className="separator-about ">
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              {' '}
              {t('aboutPage.ourValues')}
            </h1>
            <p>
              <h3 className="slogan">• {t('aboutPage.transparency')} </h3>
              <h3 className="slogan">• {t('aboutPage.independence')} </h3>
              <h3 className="slogan">• {t('aboutPage.innovations')} </h3>
            </p>
          </div>
          <hr />
        </div>
        <div className="container">
          <h2>{t('aboutPage.ourExpertise')} </h2>
          <p>
            <SingleLineGridList />
          </p>
        </div>

        <div />
        <Footer />
      </div>
    );
  }
}
export default withNamespaces('translation')(About);

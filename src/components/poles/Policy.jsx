import React, { Component } from 'react';
import './Policy.css';
import { Image } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { withNamespaces } from 'react-i18next';

class Policy extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <div className="overlay image">
          <Image
            src="assets/mountain-man.jpg"
            className="header-image"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div>
          <h2> {t('policy.title')}</h2>
        </div>
        <div>
          <p>
            {t('policy.title')}
            <br />
            <br />
            <ul>
              <li>{t('policy.para1')}</li>
              <li>{t('policy.para2')}</li>
              <li>{t('policy.para3')}</li>
              <li>{t('policy.para4')}</li>
              <li>{t('policy.para5')}</li>
              <li>{t('policy.para6')}</li>
              <li>{t('policy.para7')}</li>
              <li>{t('policy.para8')}</li>
              <li>{t('policy.para9')}</li>
            </ul>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withNamespaces('translation')(Policy);

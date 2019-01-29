import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { withNamespaces } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

class Header extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Navbar default collapseOnSelect className="header-class">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">21 Galaxy</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              {t('header.discover21Galaxy')}
            </NavItem>

            <NavDropdown
              eventKey={3}
              title={t('header.position')}
              id="vous-etes-id"
              style={{}}
            >
              <MenuItem eventKey={3.1} style={{ textAlign: 'center' }}>
                {t('header.company')}
              </MenuItem>
              <MenuItem eventKey={3.2} style={{ textAlign: 'center' }}>
                {t('header.contractor')}
              </MenuItem>
              <MenuItem eventKey={3.3} style={{ textAlign: 'center' }}>
                {t('header.private')}
              </MenuItem>
            </NavDropdown>

            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              {t('header.ourOffers')}
            </NavItem>

            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              {t('header.insight')}
            </NavItem>

            <NavItem eventKey={1}>
              <span onClick={() => changeLanguage('en')}>
                <ReactCountryFlag code="gb" svg />
              </span>
              <span onClick={() => changeLanguage('fr')}>
                <ReactCountryFlag code="fr" svg />
              </span>
            </NavItem>
            {/*
           <NavItem eventKey={1} componentClass={Link} href="" to="">
            <ReactFlagsSelect
              defaultCountry="FR"
              countries={[ "GB", "FR", "ML", "CI","SN", "CN", "IN" ]}
            />
          </NavItem>
          */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withNamespaces('translation')(Header);

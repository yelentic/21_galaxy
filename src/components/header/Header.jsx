import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; 
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

export default class Header extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">21 Galaxy</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Découvrir 21Galaxy
            </NavItem>
              <NavDropdown eventKey={3} title="Vous êtes" id="vous-etes-id">
                <MenuItem eventKey={3.1}>Entreprise</MenuItem>
                <MenuItem eventKey={3.2}>Entrepreneur</MenuItem>
                <MenuItem eventKey={3.3}>Particulier</MenuItem>
              </NavDropdown>

            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Nos offres
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Insight
            </NavItem>
             <NavItem eventKey={1} componentClass={Link} href="/" to="/">

              <ReactFlagsSelect
                defaultCountry="FR"
                countries={[ "GB", "FR", "ML", "CI","SN", "CN", "IN" ]}


              />
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

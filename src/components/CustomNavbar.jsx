import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import SearchField from "react-search-field";

export default class CustomNavbar extends Component {
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
              Découvrir 21 Galaxy
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
              Localisation
              <ReactFlagsSelect
                defaultCountry="FR" 
                searchable={true}
                searchPlaceholder="Choisissez votre localisation"
                countries={["US", "GB", "FR", "ML", "CN", "IN"]}
                showSelectedLabel={false}
              />
            </NavItem>
            <NavItem>
            <SearchField
              placeholder="Rechercher"
              classNames="test-class"
            />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

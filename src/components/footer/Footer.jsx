import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="section-blue">
        <div>
          <span className="span-space" />
          <Grid className="maps">
            <Row className="show-grid text-center">
              <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h4>21 | Galaxy</h4>
                    <ul className="list-unstyled quick-links">
                      <li>Africa</li>
                      <li>Europe</li>
                      <li>Asia</li>
                      <li>Get Started</li>
                    </ul>
                  </div>

                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h4> Contact</h4>
                    <ul className="list-unstyled quick-links">
                      <li>contact@21galaxy.com</li>
                      <li> +(33) 6 12 34 56 78 </li>
                      <br />
                      <li>
                        {' '}
                        45 Bd Jourdan <br /> 75014 Paris
                      </li>
                      <br />

                      <li>
                        {' '}
                        <h4>
                          {' '}
                          <button className="Demande">
                            Demandez un devis en ligne{' '}
                          </button>
                        </h4>
                      </li>
                      <br />
                    </ul>
                  </div>

                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h4> Actualités </h4>
                    <ul className="list-unstyled quick-links">
                      <li>Insigh</li>
                      <li>Facebook</li>
                      <li>Twitter</li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h4> Légal </h4>
                    <ul className="list-unstyled quick-links">
                      <li>Mentions légales </li>
                      <li>Protection de la vie privée et cookies </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

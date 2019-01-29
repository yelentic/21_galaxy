import React, { Component } from 'react';
import './Mark_Com.css';
import { Image } from 'react-bootstrap';
import Footer from '../footer/Footer';

export default class Mark_Com extends Component {
  render() {
    return (
      <div>
        <div className="overlay image">
          <Image
            src="assets/Digital-Marketing.jpg"
            className="header-image"
            style={{ marginBottom: 0 }}
          />
        </div>
        <div>
          <h2>MARKETING ET COMMUNICATION, DIGITALE </h2>
        </div>
        <div>
          <p>
            L’objectif est de revitaliser votre activité par l’amélioration et
            la valorisation de votre image, et d’optimiser votre présence sur le
            numérique /Demeurer au cœur de l’innovation avec nos solutions
            numériques dans un monde de plus en plus digitalisé et
            dématérialisé.
            <br />
            <br />
            Nous vous proposons diverses solutions :<br />
            <br />
            <ul>
              <li>Business Intelligence</li>
              <li>Etude de marché</li>
              <li>Etude de satisfaction</li>
              <li>Etude de comportement de consommateurs</li>
              <li>Conseil en e-marketing</li>
              <li>Communication politique</li>
              <li>Cybersécurité</li>
              <li>Conseil en management IT</li>
              <li>Transformation digitale, Big Data</li>
              <li>Développementd’applications web et mobiles.</li>
            </ul>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

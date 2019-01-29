import React, { Component } from 'react';
import './Policy.css';
import { Image } from 'react-bootstrap';
import Footer from '../footer/Footer';

export default class Policy extends Component {
  render() {
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
          <h2>AFFAIRES PUBLIQUES</h2>
        </div>
        <div>
          <p>
            21 Galaxy vous accompagne dans l’élaboration, l’analyse,
            l’évaluation et la mise en œuvre des politiques publiques.
            <br />
            <br />
            <ul>
              <li>
                Exécution des missions des politiques et programmes publiques{' '}
              </li>
              <li>Relations avec les acteurs institutionnels</li>
              <li>Marchés -- commande publique -- appels d’offre </li>
              <li>Financements, Aide d’Etat, subventions</li>
              <li>Financements, Aide d’Etat, subventions</li>
              <li>Développement territorial</li>
              <li>Economie, Education, Environnement, Sport, Santé </li>
              <li>Conseil en Diplomatie et Relations internationales</li>
              <li>Diplomatie des affaires, Géopolitique, Géoéconomie </li>
              <li>
                OBOR -- CPCE -- Union Africaine, ASEAN; Pays émergents et à fort
                potentiels -- Nouveau pays Industrialisé{' '}
              </li>
            </ul>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

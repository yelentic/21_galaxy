import React, { Component } from 'react'
import './About.css';
import { Image } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div class="global">
        <div class="about-cover">
          <div class="container">

              <div className="row">
                <div className="col-md-12">
                  <h1 className="h1-title-content text-center">Qui sommes-nous ?</h1>
                  <h2 className="h2-subtitle text-center">21 Galaxy le partenaire de votre succès</h2>
                </div>
            </div>

          </div>
        </div>


          <div className="col-md-10">
            <Image src="assets/asie2.png" circle className="carte" />

            <h2 >21 Galaxy le partenaire de votre succès</h2>

              On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

          </div>
      <hr/>
        <div className="col-md-8  ">

          <h2 >Nos valeurs </h2>
          <p>
            <h3 className="slogan">Transparence</h3> <h3 className="slogan">Indépendance</h3> <h3 className="slogan">Innovations</h3>
          </p>
        </div>


        <div className="col-md-8  ">

          <h2 >Nos expertise </h2>
          <p>
            <h3 className="slogan">Transparence</h3> <h3 className="slogan">Indépendance</h3> <h3 className="slogan">Innovations</h3>
          </p>
        </div>

        <div>
          
        </div>
      </div>
    )
  }
}

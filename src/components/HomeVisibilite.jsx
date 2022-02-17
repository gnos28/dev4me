import React from "react";
import "./HomeVisibilite.scss";

class HomeVisibilite extends React.Component {
  render() {
    return (
      <div className="homeContent">
        <div className="bodyBlur bodyBlurWidth"></div>
        <span>
          <h3>Développement web & mobile sur mesure</h3>
          Chacune de nos applications web est conçue, pensée, architecturée et
          développée comme un produit unique. Nos équipes d’ingénieurs sont
          impliquées dès l’avant vente, puis dans la phase de vision des
          projets. S’appuyant sur la richesse de l’écosystème open-source, nos
          équipes vous recommandent les meilleures solutions en vous partageant
          leurs avantages et inconvénients. Vous devenez ainsi acteur des choix
          technologiques qui accompagneront votre entreprise pour plusieurs
          années.
        </span>
        <span>
          <h3>Développement itératif, évolutif & Agile</h3>
          Une feature team développe par petits lots un produit digital
          correspondant à vos priorités. Nous testons rapidement auprès des
          utilisateurs finaux pour recueillir leur feedback et vérifier la bonne
          réalisation des hypothèses de départ. Nous avons développé une méthode
          basée sur Scrum et le Lean Startup pour réussir votre projet tout en
          étant le plus efficace possible. Cette méthode se veut orientée sur le
          résultat et les interactions humaines, notamment en mettant en avant
          la transparence, l’esprit critique, la prise de recul et l’adaptation.
          L’équipe va travailler par « sprints », c’est à dire par itérations
          successives fonctionnalités testables de votre produit.
        </span>
        <span>
          Vous cherchez une solution pour optimiser vos activités, augmenter
          votre chiffre d’affaires et attirer davantage des clients ? Le
          développement d’un site web sur mesure est l’un des outils les plus
          efficaces pour réaliser vos objectifs. Nos sites web sont
          incontournables et vous apportent des clients qualifiés permettant de
          développer votre business. Notre équipe est composée de développeurs
          passionnés, capables de vous aider à créer un site internet
          personnalisé qui sera le support de vos activités.
        </span>
        <span>
          Nous créons des applications web et mobile robustes, ergonomiques,
          intuitives, centrées sur l’utilisateur, avec des technologies toujours
          innovantes.
        </span>
        <ul>
          <li>Application Web</li>
          <li>Application Métiers</li>
          <li>Back Offices Administrateurs</li>
          <li>E-Commerce</li>
          <li>Site Vitrine</li>
          <li>Définition de MVP</li>
        </ul>
        <span>
          + Back-end : développement et paramétrage de CMS open source ou
          propriétaire
        </span>
        <span>+ Front-end : intégration, responsive web design, animation</span>
        <h3>BACK-OFFICE & APIS</h3>
        <span>
          Nous construisons avec vous des interfaces de gestion personnalisées
          et développons des API RESTful & GraphQL pour gérer les échanges de
          données entres les services. Nos développements de sites web
          s’appuient sur des technologies fiables et sécurisées (SSL, oAuth...).
        </span>
        <button className="btn btn-primary homeButton">
          Demander un devis
        </button>
      </div>
    );
  }
}

export default HomeVisibilite;

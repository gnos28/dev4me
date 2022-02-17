import React from "react";
import Communication from "../img/communication.svg";
import CostSaving from "../img/costsaving.svg";
import Quality from "../img/quality.svg";
import TimeSaving from "../img/time saving.svg";
import DashBoard from "../img/dashboard.svg";
import "./HomeAutomatisation.scss";

class HomeAutomatisation extends React.Component {
  render() {
    return (
      <div className="homeContent">
        <div className="bodyBlur bodyBlurWidth"></div>
        <span>
          L'automatisation des processus permet aux entreprises d’automatiser
          les tâches répétitives, habituellement effectuées par les humains.
          Elle limite ainsi les actions des employés entre les différentes
          applications telles que : naviguer sur un écran, ouvrir et fermer des
          programmes, copier-coller, envoyer des e-mails, rechercher sur
          Internet, capturer et transférer des données, lire des fichiers PDF et
          bien plus encore !
        </span>
        <span>
          Elle touche toute la chaîne de votre modèle d’exploitation et concerne
          l’ensemble des métiers et services de votre entreprise (finances,
          comptabilité, RH, IT, service client, etc.).
        </span>
        <span>
          Automatisez vos processus pour libérer vos talents des tâches banales
          répétitives, construire une stratégie de long terme orientée sur la
          valeur et innover de façon rapide et agile dans un contexte
          concurrentiel en profonde transformation.
        </span>
        <span>Les avantages pour votre activité :</span>
        <div className="flexGrid">
          <div className="gridItem">
            <img src={CostSaving} alt="communication" draggable="false" />
            <span>Réduction des coûts</span>
          </div>
          <div className="gridItem">
            <img src={Communication} alt="communication" draggable="false" />
            <span>Communication fluidifiée</span>
          </div>
          <div className="gridItem">
            <img src={Quality} alt="communication" draggable="false" />
            <span>Qualité des traitements</span>
          </div>
          <div className="gridItem">
            <img src={TimeSaving} alt="communication" draggable="false" />
            <span>Gain de temps</span>
          </div>
          <div className="gridItem">
            <img src={DashBoard} alt="communication" draggable="false" />
            <span>Disponibilité des données</span>
          </div>
        </div>
        <ul>
          <li>Faciliter la gestion de son activité</li>
          <li>Augmenter la qualité de sa production</li>
          <li>Éviter les tâches chronophages</li>
          <li>Réduire les risques d’erreurs</li>
          <li>Améliorer la communication interne</li>
          <li>Suivre en temps réel sa production</li>
          <li>Faciliter le travail au quotidien</li>
        </ul>
        <span>
          <h1>
            D'ici 2040 32,8% des professions seront transformées par
            l’automatisation et la numérisation des tâches
          </h1>
        </span>
        <span>
          <h3>L’automatisation : véritable transformation du travail</h3>
          La révolution numérique a eu un impact sur de nombreux secteurs
          d’activité et vient redéfinir totalement les manières de travailler.
          Grâce aux différents logiciels utilisant l’IA, il est désormais plus
          simple de piloter son activité et d’augmenter sensiblement sa
          productivité en évitant les pertes de temps sur des tâches pouvant
          être automatisées. Adopter une stratégie d’automatisation, c’est être
          en accord avec l’époque et accepter d’être secondé sur des tâches qui
          peuvent être fastidieuses au quotidien. L’automatisation des processus
          est donc bien plus qu’un simple outil de gestion d’activité, c’est un
          mouvement qui redéfinit totalement la conception du travail.
        </span>
        <span>
          <h3>Une automatisation nécessaire pour rester compétitif</h3>
          Aujourd’hui, l’automatisation des processus est applicable dans de
          nombreux secteurs d’activité. En effet, différents logiciels et
          systèmes sont conçus et pensés selon les besoins de chaque secteur
          d’activité afin de répondre au mieux aux besoins des professionnels.
          Ce type d’outil offre donc de nombreux avantages pour mener son
          activité au quotidien et améliorer sa productivité. Cette recherche
          d’amélioration de sa production est nécessaire pour rester compétitif
          et anticiper au mieux les évolutions du marché. Une communication
          rapide et améliorée au sein de l’entreprise permettra de mieux
          s’adapter et ainsi de produire plus efficacement. L’automatisation des
          processus doit donc s’envisager comme une véritable aide pour piloter
          son activité. Une fois les tâches les plus répétitives automatisées,
          vous pourrez gagner un temps précieux et réduire également les
          éventuelles erreurs. Cette automatisation vous permet ainsi d’avoir
          rapidement accès à de nombreuses données et informations sur l’état de
          votre activité et les éventuels dysfonctionnements dans les processus
          de production. Les bénéfices que vous pouvez tirer de l’automatisation
          des processus sont donc multiples.
        </span>
        <span>
          DEV4ME s'appuie sur les technologies google cloud pour vous
          accompagner lors de cette transition.
        </span>
        <button className="btn btn-primary homeButton">
          Demander un devis
        </button>
      </div>
    );
  }
}

export default HomeAutomatisation;

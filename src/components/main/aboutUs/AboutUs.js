import React from "react";
import "./AboutUs.css";
import { AboutUsData } from "./AboutUsData";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>À propos</h1>
      <p>
        Étape importante et à ne pas négliger, nous avons décidé de dédier un
        espace du site à un onglet « À Propos », afin d’en savoir un peu plus
        sur les personnes qui se cachent derrière ces réalisations et ces codes
        sources. En réalité, nous sommes deux étudiants de 18 ans,
        respectivement passionnés par la photographie et le code. Meilleurs amis
        et échangeant, par conséquent, beaucoup d’idées nous traversant
        l’esprit, nous nous sommes arrêtés sur l’une d’entre elle : la création
        d’un site web destiné a héberger nos photos.
        <br />
        <br />
        Nous avons alors décidé de créer ce site internet, nommé Camera3off. Ce
        dernier représente l’aboutissement de deux passions réunies, formant
        ainsi un travail complémentaire.
        <br />
        <br />
        Après avoir tenu pendant plusieurs mois une page Instagram, nous avons
        décidé de passer au niveau supérieur. C’est ainsi, à l’été 2019, que ce
        site fut commencé à être fondé. Nous y avons consacré de nombreux mois,
        et, après plus d’un an à se chercher visuellement, nous sommes très
        heureux de vous présenter officiellement la quatrième version du site
        web Camera3off. Le temps passé nous a permit de murir et d’arriver à un
        design totalement repensé, plus esthétique et intuitif pour
        l’utilisateur.
        <br />
        Nous avons bien évidemment conscience que ce site pourrait en permanence
        être amélioré, c’est pourquoi nous vous suggérons de laisser un avis,
        une critique ou un conseil en cliquant ici.
        <br />
        <br />
        Ce site internet a pour but de diffuser notre travail personnel, celui
        que nous faisons dès que nous avons un temps libre, que ce soit entre
        les études ou en vacances scolaires. Afin de suivre notre évolution et
        d’aider à notre motivation, nous vous recommandons fortement de vous
        abonner à notre page Instagram, en cliquant{" "}
        <a
          href="https://www.instagram.com/camera3offp/"
          target="_blank"
          style={{ color: "white" }}
        >
          ici
        </a>
        .
        <br />
        <br />
        Merci à vous !
      </p>
    </div>
  );
}

export default AboutUs;

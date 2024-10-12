// import React from 'react'
import Logo from "../assets/logo.png";
// import { FaFolderOpen } from "react-icons/fa6";
import Icons from "../components/Icons";
import Calendar from "../assets/calendar.png";

import Folder from "../assets/folder.png";
import Menu from "../assets/le-menu.png";
import Image from "../assets/image.png";
import Sablier from "../assets/sablier.png";
import Prix from "../assets/prix.png";
import Dash from "../assets/dash.png";
// MY TRUST
import Mail from "../assets/mail.png";
import Medium from "../assets/medium.png";
import Microsoft from "../assets/microsoft.png";
import Ever from "../assets/ever.png";
import Drop from "../assets/drop.png";
import Section from "../layouts/Section";
import { CardData, FeaturesData } from "../constants/data";

// CARDS

function Home() {
  interface NavMenu {
    name: string;
    link: string;
  }

  const navMenuList: NavMenu[] = [
    {
      name: "Produit",
      link: "/",
    },
    {
      name: "Solutions",
      link: "/",
    },
    {
      name: "Ressources",
      link: "/",
    },
    {
      name: "Companies",
      link: "/",
    },
    {
      name: "Prix",
      link: "/",
    },
  ];
  const TrustList = [Ever, Drop, Mail, Medium, Microsoft];
  return (
    <div className="app">
      <section className="navigation">
        <div className="navigation--wrapper">
          <div className="navigation--logo">
            <img src={Logo} alt="logo" />
            <h4>Gantifly</h4>
          </div>
          <ul className="navigation--list">
            {navMenuList.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navigation--wrapper">
          <button>Connexion</button>
          <button>Démarrer</button>
        </div>
      </section>
      <section className="header">
        <div className="header__body">
          {/* <div className="header__container"></div> */}
          <p className="header__body--caption">
            Découvrez le tout nouveau Gantifly 2.0
          </p>
          <h1 className="header__body--title">
            Un seul outil pour tout faire ensemble
          </h1>
          <p className="header__body--text">
            Gantily vous permet d'obtenir des résultats clairs et significatifs
            à grande échelle en reliant les tâches et les flux de travail aux
            objectifs généraux de l'entreprise.
          </p>

          <div className="header__button">
            <button>Commencer</button>
            <button>Comment ça marche</button>
          </div>
          <img src={Dash} alt={Dash} className="header__body--dash" />
          <div className="header__icons">
            <Icons icon={Folder} />
            <Icons icon={Image} />
            <Icons icon={Menu} />
            <Icons icon={Calendar} />
            <Icons icon={Sablier} />
            <Icons icon={Prix} />
          </div>
        </div>
      </section>
      <section className="trust">
        <h5>La confiance de 2 millions d'équipes et plus</h5>
        <div className="trust__team">
          {TrustList.map((item) => (
            <img
              src={item}
              alt={item}
              key={item}
              className="trust__team--logo"
            />
          ))}
        </div>
      </section>
      <Section
        description="La flexibilité exceptionnelle de Gantifly permet de réaliser tous les types de travaux. Et nous ne cessons jamais d'innover"
        title="Tout ce que l'équipe recherche"
        subtitle="Features"
      >
        <div className="features">
          {FeaturesData.map((item, index) => (
            <div className="features__box">
              <div className="features__card" key={index}>
                <img src={item.image} alt={item.image} />
              </div>
              <div className="features__content">
                <div className="features__header">
                  <img
                    src={item.thumbnail}
                    alt={item.thumbnail}
                    className="features__thumbnail"
                  />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        subtitle="Pourquoi Gantifly"
        title="Augmenter la productivité et gagner du temps"
        description="Augmenter la productivité, rationaliser le travail en le faisant et en le voyant, en un seul endroit"
      >
        <div className="cards">
          {CardData.map((item, index) => (
            <div className="cards__card" key={index}>
              <img src={item.logo} alt={item.logo} className={`cards__card--${item.color}`} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Home;

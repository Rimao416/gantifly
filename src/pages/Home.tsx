// import React from 'react'
import Logo from "../assets/logo.png";
// import { FaFolderOpen } from "react-icons/fa6";
import Icons from "../components/Icons";
import Calendar from "../assets/calendar.png";

import Folder from "../assets/folder.png";
import Menu from "../assets/le-menu.png";
import Image from "../assets/image.png";
import Sablier from "../assets/sablier.png"
import Prix from "../assets/prix.png"
import Dash from "../assets/dash.png"
function Home() {
  interface NavMenu {
    name: string;
    link: string;
  }
  
  const navMenuList: NavMenu[] = [
    {
      name: "Produit",
      link: "/"
    },
    {
      name: "Solutions",
      link: "/"
    },
    {
      name: "Ressources",
      link: "/"
    },
    {
      name: "Companies",
      link: "/"
    },
    {
      name: "Prix",
      link: "/"
    }
  ];
  
  return (
    <div className="app">
      <section className="header">
        <div className="header__navigation">
          <div className="header__navigation--wrapper">
            <div className="header__navigation--logo">
              <img src={Logo} alt="logo" />
              <h4>Gantifly</h4>
            </div>
            <ul className="header__navigation--list">
              {navMenuList.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>

          </div>
          <div className="header__navigation--wrapper">
            <button>Connexion</button>
            <button>Démarrer</button>
          </div>
        </div>
        <div className="header__body">
          {/* <div className="header__container"></div> */}
          <p className="header__body--caption">Découvrez le tout nouveau Gantifly 2.0</p>
          <h1 className="header__body--title">Un seul outil pour tout faire ensemble</h1>
          <p className="header__body--text">Gantily vous permet d'obtenir des résultats clairs et significatifs à grande échelle en reliant les tâches et les flux de travail aux objectifs généraux de l'entreprise.</p>

          <div className="header__button">
            <button>Commencer</button>
            <button>Comment ça marche</button>
          </div>
          <img src={Dash} alt={Dash} className="header__body--dash"/>
          <div className="header__icons">
            <Icons icon={Folder} />
            <Icons icon={Image} />
            <Icons icon={Menu} />
            <Icons icon={Calendar} />
            <Icons icon={Sablier}/>
            <Icons icon={Prix}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

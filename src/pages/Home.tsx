// import React from 'react'
import Logo from "../assets/logo.png";

// import { FaFolderOpen } from "react-icons/fa6";
import Icons from "../components/Icons";
import { FiMenu, FiX } from "react-icons/fi"; // Menu et Close icons
import Calendar from "../assets/calendar.png";
import { FaCheck } from "react-icons/fa6";
import Folder from "../assets/folder.png";
import Menu from "../assets/le-menu.png";
import Image from "../assets/image.png";
import Sablier from "../assets/sablier.png";
import Prix from "../assets/prix.png";
import Dash from "../assets/dash.png";
import Pricing from "../assets/price.png";
// MY TRUST
import Mail from "../assets/mail.png";
import Medium from "../assets/medium.png";
import Microsoft from "../assets/microsoft.png";
import Ever from "../assets/ever.png";
import Drop from "../assets/drop.png";
import Customer from "../assets/customer.png";
import Section from "../layouts/Section";
import {
  CardData,
  FeaturesData,
  pricingData,
  TestimonialData,
} from "../constants/data";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// CARDS
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
function Home() {
  const [isOpen, setIsOpen] = useState(false); // État du menu burger

  const toggleMenu = () => setIsOpen(!isOpen); // Fonction pour basculer le menu
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => {
      return i < rating ? (
        <FaStar key={i} className="star star--filled" />
      ) : (
        <FaRegStar key={i} className="star star--empty" />
      );
    });
  };
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
      <section className={`navigation ${isOpen ? "open" : ""}`}>
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
        <span className="navigation--toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />} {/* Icône changeante */}
        </span>
        <div className={`navigation__dropdown ${isOpen ? "show" : ""}`}>
          <ul className="navigation__dropdown--list">
            {navMenuList.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="navigation__dropdown--button">
            <button>Connexion</button>
            <button>Démarrer</button>
          </div>
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
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          // effect={"slide"}
          speed={2000}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },

          }}

          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            stopOnLastSlide: true,
            // disableOnInteraction: false,

          }}
          loop={true}
          modules={[Autoplay]}
          className="trust__team"
        >
          {TrustList.map((item) => (
            <SwiperSlide>
              <img
                src={item}
                alt={item}
                key={item}
                className="trust__team--logo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
              <img
                src={item.logo}
                alt={item.logo}
                className={`cards__card--${item.color}`}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="pricing">
        <div className="pricing__header">
          <img src={Pricing} alt={Pricing} />
          <p>Tarification</p>
        </div>
        <div className="pricing__presentation">
          <div className="pricing__wrapper">
            <h1 className="pricing__title">
              Une tarification simple et flexible
            </h1>
          </div>
          <div className="pricing__wrapper">
            <p>Mensuel</p>
            <p>Annuel</p>
          </div>
        </div>
        <div className="pricing__body">
          {pricingData.map((item, index) => (
            <div
              className={
                index === 1
                  ? "pricing__card pricing__card--active"
                  : "pricing__card"
              }
              key={index}
            >
              <div className="pricing__up">
                <p className="pricing__type">{item.title}</p>
                <p className="pricing__price">
                  <span style={{ color: index === 1 ? "black" : "white" }}>
                    {item.price}
                  </span>{" "}
                  par mois
                </p>
                <p>{item.description}</p>
              </div>
              <div className="pricing__middle">
                <p
                  className="pricing__middle--header"
                  style={{ color: index === 1 ? "black" : "white" }}
                >
                  Ce plan inclut:{" "}
                </p>
                <div className="pricing__list">
                  {item.plans.map((plan, index) => (
                    <div key={`${index}-${index}`} className="pricing__item">
                      <span
                        className={`pricing__item ${
                          item.title === "Pro" ? "pricing__item--active" : ""
                        }`}
                      >
                        <FaCheck />
                      </span>
                      <p>{plan}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`pricing__button ${
                  index === 1 ? "pricing__button--active" : ""
                }`}
              >
                Choisir
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial__header">
          <div className="testimonial__main">
            <img src={Customer} alt="Customer" />
            Clients
          </div>
          <h1>Ce que Nos Clients disent sur nous</h1>
          <p>Here's what some of our customers say about platform</p>
        </div>
        <div className="testimonial__body">
          {TestimonialData.map((testimonial, index) => (
            <div className="testimonial__card" key={index}>
              <div className="testimonial__rating">
                {renderStars(testimonial.rating)}
                <span>{testimonial.rating}</span>
              </div>
              <p className="testimonial__description">
                {testimonial.description}
              </p>
              <div className="testimonial__authors">
                <img src={testimonial.image} alt={testimonial.image} />
                <div className="testimonial__person">
                  <p>{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="better">
        <h1>Une meilleure façon de travailler aujourd'hui, ensemble</h1>
        <p>
          Gantfly vous permet d'obtenir de la clarté et des résultats
          significatifs à grande échelle en reliant les tâches et les flux de
          travail aux objectifs d'ensemble de l'entreprise.
        </p>
        <div className="better__button">
          <button>Commencer</button>
          <button>Comment ça marche</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

import Workflow from "../assets/workflow.png";
import Projection from "../assets/projection.png";
import Box_1 from "../assets/box_1.jpg";
import Box_2 from "../assets/box_2.png";
// CARDS
import Equipe from "../assets/equipe.png";
import Energie from "../assets/energie.png";
import Parametres from "../assets/parametres.png";

import Temoignage_1 from "../assets/Temoignage_1.jpg";
import Temoignage_2 from "../assets/Temoignage_2.jpg";
import Temoignage_3 from "../assets/Temoignage_3.jpg";
import Temoignage_4 from "../assets/Temoignage_4.jpg";
import Temoignage_5 from "../assets/Temoignage_5.jpg";
import Temoignage_6 from "../assets/Temoignage_6.jpg";

interface FeaturesProps {
  title: string;
  thumbnail: string;
  image: string;
  description: string;
}
export const FeaturesData: FeaturesProps[] = [
  {
    title: "Gestion de projet",
    thumbnail: Projection,
    image: Box_1,
    description:
      "Gérez vos projets du début à la fin. Avec tous vos projets dans Gantifly, vous saurez toujours qui fait quoi et quand.",
  },
  {
    title: "Flux de travail et automatisations",
    thumbnail: Workflow,
    image: Box_2,
    description:
      "Créer des processus efficaces afin de pouvoir gérer les projets de manière transparente entre les départements et d'en faire plus en moins de temps.",
  },
  {
    title: "Gestion de projet",
    thumbnail: Projection,
    image: Box_1,
    description:
      "Gérez vos projets du début à la fin. Avec tous vos projets dans Gantifly, vous saurez toujours qui fait quoi et quand.",
  },
  {
    title: "Flux de travail et automatisations",
    thumbnail: Workflow,
    image: Box_2,
    description:
      "Créer des processus efficaces afin de pouvoir gérer les projets de manière transparente entre les départements et d'en faire plus en moins de temps.",
  },
];

interface CardProps {
  color: string;
  logo: string;
  title: string;
  description: string;
}

export const CardData: CardProps[] = [
  {
    title: "Améliorer la collaboration",
    description:
      "Stimulez le travail d'équipe et l'efficacité grâce à nos outils de collaboration faciles à utiliser. Communiquez clairement et partagez des documents en temps réel",
    logo: Equipe,
    color: "violet",
  },
  {
    title: "Améliorer la visibilité",
    description:
      "Suivez vos projets et vos tâches grâce à des mises à jour claires et en temps réel. Nos outils offrent une vue d'ensemble de vos progrès",
    logo: Energie,
    color: "blue",
  },
  {
    title: "Automatiser le travail",
    description:
      "Rationalisez votre flux de travail en automatisant les tâches répétitives. Nos solutions vous aident à mettre en place des processus automatiques",
    logo: Parametres,
    color: "green",
  },
];

interface pricingProps {
  title: string;
  price: string;
  description: string;
  features: string;
  plans: string[];
}
export const pricingData: pricingProps[] = [
  {
    title: "Essentiel",
    price: "19€",
    description:
      "Idéal pour les petites équipes qui veulent organiser leur travail efficacement.",
    features: "Accès aux fonctionnalités de base, collaboration simplifiée",
    plans: [
      "Gestion de projets basique",
      "5 utilisateurs",
      "Support par email",
      "Stockage de 10 Go",
    ],
  },
  {
    title: "Pro",
    price: "49€",
    description:
      "Parfait pour les équipes de taille moyenne nécessitant plus de contrôle et de visibilité.",
    features: "Fonctionnalités avancées avec automatisation",
    plans: [
      "10 utilisateurs",
      "Support prioritaire",
      "Intégration avec d'autres services",
      "Stockage de 100 Go",
    ],
  },
  {
    title: "Entreprise",
    price: "99€",
    description:
      "Conçu pour les grandes entreprises avec des besoins complexes et un contrôle total.",
    features: "Fonctionnalités complètes avec personnalisation avancée",
    plans: [
      "Utilisateurs illimités",
      "Gestion avancée des permissions",
      "Support dédié 24/7",
      "Stockage illimité",
    ],
  },
];

export interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  description: string;
  rating: number;
}

export const TestimonialData: TestimonialProps[] = [
  {
    name: "Alice Dupont",
    role: "Chef de projet",
    image: Temoignage_1,
    description:
      "Gantifly a transformé la manière dont notre équipe gère les projets. Nous avons réduit notre temps de planification de 30% !",
    rating: 5,
  },
  {
    name: "Marc Leroux",
    role: "Responsable Marketing",
    image: Temoignage_2,
    description:
      "Avec Gantifly, notre équipe reste alignée et productive. La gestion des tâches n'a jamais été aussi fluide.",
    rating: 4,
  },
  {
    name: "Sophie Martin",
    role: "Développeuse Full Stack",
    image: Temoignage_3,
    description:
      "L'intégration avec nos outils de développement est impeccable. Une solution parfaite pour les équipes techniques.",
    rating: 5,
  },
  {
    name: "Ahmed Belaid",
    role: "Product Owner",
    image: Temoignage_4,
    description:
      "Le suivi des sprints et la visibilité sur les tâches sont incroyables. Gantifly est devenu un outil indispensable.",
    rating: 4,
  },
  {
    name: "Claire Fournier",
    role: "Coach Agile",
    image: Temoignage_5,
    description:
      "Gantifly favorise une collaboration efficace entre toutes les parties prenantes, en restant fidèle aux principes Agile.",
    rating: 5,
  },
  {
    name: "Paul Roux",
    role: "Directeur Général",
    image: Temoignage_6,
    description:
      "Nous avons vu une amélioration immédiate de notre productivité et de la satisfaction de nos clients grâce à Gantifly.",
    rating: 5,
  },
];

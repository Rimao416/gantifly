import React from "react";
import Fonctionnalite from "../assets/fonctionnalite.png";
interface SectionProps {
  subtitle: string;
  title: string;
  description: string;
  children: React.ReactNode;
}
function Section({ subtitle, title, description, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section__header">
        <img src={Fonctionnalite} alt={Fonctionnalite} />
        {subtitle}
      </div>
      <div className="section__title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="section__body">{children}</div>
    </section>
  );
}

export default Section;

import React from "react";
import styles from "./Success.module.scss";
import Card from "../../components/Card/Card";

/*
 * Success Section to display success metrics or highlights
 */
const Success = () => {
  const cards = [
    {
      title: "Startups Onboarded",
      subtitle: "Startup founders & team members",
      description:
        "Startups have joined our platform to find investors and grow.",
      className: "card--startup",
      role: "region",
    },
    {
      title: "Investors Connected",
      subtitle: "VC Funds, Angel Syndicates & Networks",
      description: "Investors are actively connecting with startups on Coreup.",
      className: "card--investor",
      role: "region",
    },
  ];

  return (
    <section
      className={`${styles.success} container`}
      aria-label="Success Metrics"
    >
      {/* Cards List */}
      <div className={styles.success__cards}>
        {cards.map((card, index) => (
          <Card
            key={index}
            className={card.className}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            role={card.role}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Success);

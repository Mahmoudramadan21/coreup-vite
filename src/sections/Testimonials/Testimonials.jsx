import React, { lazy } from "react";
import styles from "./Testimonials.module.scss";

// Lazy load Testimonial component
const Testimonial = lazy(() =>
  import("../../components/Testimonial/Testimonial")
);

import avatar1 from "../../assets/avatars/avatar1.svg";
import avatar2 from "../../assets/avatars/avatar2.svg";
import avatar3 from "../../assets/avatars/avatar3.svg";

/*
 * Testimonials Section to display client testimonials
 * Performance Note: Lazy load Testimonial component and use WebP avatars to reduce payload
 */
const Testimonials = () => {
  const testimonials = [
    {
      avatar: avatar1,
      name: "John Doe",
      role: "Startup Founder",
      text: "Coreup helped me connect with the right investors to grow my startup. The platform is intuitive and efficient!",
      isFeatured: false,
    },
    {
      avatar: avatar2,
      name: "Jane Smith",
      role: "Investor",
      text: "I found amazing startups to invest in through Coreup. The matching algorithm is spot on.",
      isFeatured: true,
    },
    {
      avatar: avatar3,
      name: "Alex Brown",
      role: "Job Seeker",
      text: "Thanks to Coreup, I landed my dream job at a startup. Highly recommend this platform!",
      isFeatured: false,
    },
  ];

  return (
    <section
      className={`${styles.testimonials} container`}
      aria-label="Client Testimonials"
    >
      {/* Section Header */}
      <div className={styles.testimonials__header}>
        <h2 className={styles.testimonials__title}>What Our Clients Say</h2>
        <p className={styles.testimonials__description}>
          Hear from startups, investors, and job seekers who have succeeded with
          Coreup.
        </p>
      </div>
      {/* Testimonials List */}
      <React.Suspense fallback={<div>Loading testimonials...</div>}>
        <div className={styles.testimonials__list}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              isFeatured={testimonial.isFeatured}
              loading="lazy" // Defer avatar loading
            />
          ))}
        </div>
      </React.Suspense>
    </section>
  );
};

export default React.memo(Testimonials);

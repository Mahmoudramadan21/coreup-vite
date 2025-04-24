import React, { Suspense } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

// Lazy load sections to reduce initial bundle size and minimize main-thread work
const Hero = React.lazy(() => import("../../sections/Hero/Hero"));
const Success = React.lazy(() => import("../../sections/Success/Sucess"));
const HowItWorks = React.lazy(() =>
  import("../../sections/HowItWorks/HowItWorks")
);
const Testimonials = React.lazy(() =>
  import("../../sections/Testimonials/Testimonials")
);
const CTA = React.lazy(() => import("../../sections/CTA/CTA"));
const Pricing = React.lazy(() => import("../../sections/Pricing/Pricing"));

/*
 * Home Page component that renders all sections
 * Performance Note: Using React.lazy and Suspense to reduce initial JS bundle size and improve TBT
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div aria-live="polite">Loading...</div>}>
          <Hero />
          <Success />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

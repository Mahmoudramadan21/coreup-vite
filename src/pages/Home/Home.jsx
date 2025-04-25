import React, { Suspense } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

// Lazy load sections to reduce initial bundle size
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

// Home page component rendering all sections
export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
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
      {/* Footer */}
      <Footer />
    </>
  );
}

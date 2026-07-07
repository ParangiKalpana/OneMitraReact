import Hero from "../../Component/home/Hero";
import Services from "../../Component/home/Services";
import WhyOneMitra from "../../Component/home/WhyOneMitra";
import Industries from "../../Component/home/Industries";
import FeaturedInsights from "../../Component/home/FeaturedInsights";
import CaseStudies from "../../Component/home/CaseStudies";
import Testimonials from "../../Component/home/Testimonials";
import FAQ from "../../Component/home/FAQ";
import CTA from "../../Component/home/CTA";
import FooterCTA from "../../Component/home/FooterCTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyOneMitra />
      <Industries />
      <FeaturedInsights />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
      <FooterCTA />
    </>
  );
}

export default Home;
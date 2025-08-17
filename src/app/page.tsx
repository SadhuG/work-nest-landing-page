import Faq from "@/components/faq";
import Feature1 from "@/components/feature-1";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import IntegrationsShowcase from "@/components/integrations-showcase";
import Navbar from "@/components/navbar/navbar";
import ProductDemo from "@/components/product-demo";
import SocialProof from "@/components/social-proof";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <SocialProof />
        <Feature1 />
        <HowItWorks />
        <ProductDemo />
        <IntegrationsShowcase />
        <Faq />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;

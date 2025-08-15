import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import SocialProof from "@/components/social-proof";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="mx-auto max-w-[1536px]">
        <main>
          <SocialProof />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;

import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="max-w-[1536px]"></main>
      <footer className="max-w-[1536px]"></footer>
    </>
  );
};

export default Home;

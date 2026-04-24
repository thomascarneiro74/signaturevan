import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SavoirFaire } from "@/components/sections/SavoirFaire";
import { Services } from "@/components/sections/Services";
import { Realisations } from "@/components/sections/Realisations";
import { Processus } from "@/components/sections/Processus";
import { Temoignages } from "@/components/sections/Temoignages";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <SavoirFaire />
      <Services />
      <Realisations />
      <Processus />
      <Temoignages />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

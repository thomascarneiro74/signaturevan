import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import artisan from "@/assets/thomas-portrait.jpg";

const About = () => {
  return (
    <>
      <Seo
        title="À propos — artisan ébéniste aménageur de vans à Annecy | Signature Van"
        description="Signature Van, c'est l'histoire d'une reconversion : ancien infirmier devenu ébéniste, installé à Chapeiry près d'Annecy, j'aménage des vans sur mesure."
        path="/a-propos"
      />
      <PageHeader
        eyebrow="À propos"
        title={<>À propos de <em className="italic">Signature Van</em>.</>}
        intro="Une histoire de reconversion, de bois et de voyage — racontée depuis l'atelier de Chapeiry."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden sticky top-28">
              <img
                src={artisan}
                alt="Thomas Carneiro, artisan ébéniste aménageur de vans à Chapeiry près d'Annecy"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Mon parcours</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                D'infirmier à ébéniste, jusqu'au van.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Pendant dix ans, j'ai exercé comme infirmier. Un métier qui m'a appris l'écoute, la précision
                et l'attention au détail — qualités que je retrouve aujourd'hui, autrement, dans le travail du bois.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                En 2020, j'ai entamé une reconversion en ébénisterie. Formé en menuiserie traditionnelle,
                j'ai très vite rencontré un univers qui rassemblait tout ce que j'aime : l'artisanat, la nature,
                la montagne. L'aménagement de vans s'est imposé comme une évidence.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Ma manière de travailler</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Du temps, du bois et beaucoup d'écoute.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Chaque projet commence par un long échange. Comprendre votre van, vos voyages, votre rythme,
                vos manies. Puis viennent les plans, le choix des essences, des tissus, des laitons.
                Et enfin la fabrication, dans mon atelier — étape par étape, sans précipitation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Je travaille principalement le bois massif (chêne, frêne, noyer, peuplier), avec des finitions
                à l'huile naturelle. J'aime les matériaux qui vivent, qui se patinent, qui racontent quelque chose
                après quelques années d'usage.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Mon ancrage</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Chapeiry, Annecy, les Alpes.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                L'atelier est à Chapeiry, à 15 minutes au sud d'Annecy. C'est ici que je vis, que je cours,
                que je grimpe et que je pars en van. La montagne et le lac dictent une certaine manière
                de concevoir les choses : robuste, simple, vraie.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Travailler avec moi, c'est aussi profiter de cet ancrage : on se rencontre, on suit le projet
                ensemble, et on partage une certaine idée du voyage — proche, dépaysant, sans artifice.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <Link to="/contact" className="inline-flex items-center text-sm border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                Venir échanger à l'atelier →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

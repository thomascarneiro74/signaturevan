import { Link } from "react-router-dom";
import { Seo, localBusinessJsonLd } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { SavoirFaire } from "@/components/sections/SavoirFaire";
import { Temoignages } from "@/components/sections/Temoignages";
import vanAnnecy from "@/assets/van-annecy.jpg";
import vanKitchen from "@/assets/van-kitchen.jpg";
import vanBedroom from "@/assets/van-bedroom.jpg";

const offers = [
  {
    title: "Aménagement complet",
    desc: "Conception, isolation liège, électricité, mobilier bois et finitions — un van clé en main, pensé pour vous.",
    to: "/services",
    img: vanKitchen,
    alt: "Aménagement complet de van en bois sur mesure en Haute-Savoie",
  },
  {
    title: "Prestations à la carte",
    desc: "Isolation liège projeté, élec 12V/230V, ouvertures, menuiserie sur mesure, optimisation des rangements.",
    to: "/services",
    img: vanBedroom,
    alt: "Menuiserie et rangements sur mesure pour van à Annecy",
  },
  {
    title: "Location de van aménagé",
    desc: "Partez depuis Annecy avec un van prêt à vivre. Idéal pour les week-ends outdoor, vacances et offres CSE.",
    to: "/location-van-annecy",
    img: vanAnnecy,
    alt: "Location de van aménagé au départ d'Annecy avec vue sur le lac",
  },
];

const reasons = [
  {
    n: "01",
    title: "Un savoir-faire d'ébéniste",
    desc: "Chaque meuble est dessiné, ajusté et assemblé à la main. Bois massif, finitions douces, assemblages durables.",
  },
  {
    n: "02",
    title: "Un artisan local à Annecy",
    desc: "Atelier basé à Chapeiry (74). On se rencontre, on échange en direct, et on suit le projet ensemble.",
  },
  {
    n: "03",
    title: "Pensé pour la vraie vie",
    desc: "Rangements pour le matos de ski, vélo, trail. Un van qui s'adapte à votre pratique, pas l'inverse.",
  },
  {
    n: "04",
    title: "Sur mesure, vraiment",
    desc: "Pas de kit, pas de standard. Vos plans, vos couleurs, vos usages — un van qui vous ressemble.",
  },
];

const Index = () => {
  return (
    <>
      <Seo
        title="Aménagement et location de vans sur mesure à Annecy | Signature Van"
        description="Artisan aménageur de vans à Annecy (Haute-Savoie). Aménagement sur mesure, prestations à la carte et location de van aménagé pour particuliers et CSE."
        path="/"
        jsonLd={localBusinessJsonLd}
      />
      <Hero />
      <SavoirFaire />

      {/* Offre */}
      <section className="py-24 md:py-36 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
              — Ce que fait Signature Van
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Trois manières de <em className="italic">vivre</em> le van.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {offers.map((o) => (
              <Link
                key={o.title}
                to={o.to}
                className="group block bg-background hover:shadow-card transition-shadow duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={o.img}
                    alt={o.alt}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {o.desc}
                  </p>
                  <span className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-sage border-b border-sage/40 pb-1 group-hover:border-sage transition-colors">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24 md:py-36 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
              — Pourquoi nous choisir
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Travailler avec un artisan, <em className="italic">à Annecy</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {reasons.map((r) => (
              <article key={r.n} className="bg-background p-8 md:p-12">
                <p className="font-serif text-sage text-2xl">{r.n}</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-4">{r.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-forest mb-6">
            — Zone d'intervention
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            De l'atelier de Chapeiry à toute la <em className="italic">Haute-Savoie</em>.
          </h2>
          <p className="mt-8 text-foreground/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Signature Van intervient à Annecy, Annecy-le-Vieux, Seynod, Cran-Gevrier,
            Chapeiry, Rumilly, La Roche-sur-Foron, Thônes, Faverges, ainsi qu'en Savoie
            (Chambéry, Aix-les-Bains) et plus largement en Auvergne-Rhône-Alpes.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Annecy", "Annecy-le-Vieux", "Seynod", "Chapeiry", "Rumilly",
              "Thônes", "Faverges", "La Roche-sur-Foron", "Chambéry", "Aix-les-Bains",
            ].map((v) => (
              <span key={v} className="px-4 py-2 bg-background/70 border border-foreground/10 text-foreground/80">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Temoignages />

      {/* CTA final */}
      <section className="py-24 md:py-32 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Un projet de van ? <em className="italic">Parlons-en.</em>
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed">
            Aménagement complet, prestation à la carte ou location pour le week-end —
            on échange sans engagement, autour d'un café à l'atelier ou par téléphone.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-cream text-forest px-8 py-4 text-sm tracking-wide hover:bg-sand transition-colors">
              Démarrer un projet
            </Link>
            <Link to="/location-van-annecy" className="border border-cream/40 text-cream px-8 py-4 text-sm tracking-wide hover:bg-cream/10 transition-colors">
              Réserver un van
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

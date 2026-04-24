import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import craftImage from "@/assets/craft-detail.jpg";

const completeSteps = [
  { n: "01", t: "Échange & cahier des charges", d: "On comprend votre van, vos usages et vos envies — sports, voyages, famille, autonomie." },
  { n: "02", t: "Plans & devis détaillé", d: "Plans 2D, perspectives, choix des matériaux et fourchette budgétaire claire." },
  { n: "03", t: "Fabrication en atelier", d: "Isolation, menuiserie, électricité, plomberie, ouvertures — réalisés à Chapeiry." },
  { n: "04", t: "Livraison & prise en main", d: "Remise des clés, démonstration complète et accompagnement après livraison." },
];

const aLaCarte = [
  {
    t: "Isolation liège & phonique",
    d: "Liège projeté écologique, isolation thermique et acoustique, traitement de la condensation pour vivre confortablement été comme hiver.",
  },
  {
    t: "Électricité 12V / 230V",
    d: "Batteries lithium, panneaux solaires, convertisseur, prises USB et 220V, éclairage LED basse conso, tableau électrique sécurisé.",
  },
  {
    t: "Mobilier bois sur mesure",
    d: "Cuisine, banquettes, lits coulissants, dressings — en chêne, frêne ou peuplier massif, finitions huile naturelle.",
  },
  {
    t: "Ouvertures & lumière",
    d: "Pose de baies vitrées, lanterneaux, hublots latéraux : plus de luminosité, plus d'air, plus de vues.",
  },
  {
    t: "Optimisation des rangements",
    d: "Tiroirs sous-banquettes, soutes garages, fixations matos outdoor (skis, vélos, trail) — chaque cm² compte.",
  },
  {
    t: "Chauffage & autonomie",
    d: "Chauffage stationnaire diesel, eau chaude, douche extérieure, gestion d'eau propre/grise — pour vivre toute l'année.",
  },
];

const Services = () => {
  return (
    <>
      <Seo
        title="Aménagement de van sur mesure à Annecy | Services Signature Van"
        description="Aménagement complet de van et prestations à la carte à Annecy : isolation liège, électricité 12V/230V, menuiserie bois, ouvertures et rangements sur mesure."
        path="/services"
      />
      <PageHeader
        eyebrow="Services"
        title={<>Nos services d'aménagement <em className="italic">de vans</em>.</>}
        intro="Du projet clé en main à la prestation ciblée, Signature Van intervient sur tous types de fourgons aménagés en Haute-Savoie."
      />

      {/* Aménagement complet */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden sticky top-28">
              <img
                src={craftImage}
                alt="Aménagement complet de van en bois sur mesure à Annecy"
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— 01 / Aménagement complet</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Un van pensé, dessiné et fabriqué <em className="italic">pour vous</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              L'aménagement complet, c'est un projet sur mesure de A à Z. On part d'un fourgon vide
              (Sprinter, Crafter, Ducato, Trafic, Vivaro, T6…) et on en fait un véritable lieu de vie :
              isolation, mobilier, électricité, eau, ouvertures et finitions.
            </p>

            <ol className="mt-12 space-y-8">
              {completeSteps.map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 pb-8 border-b border-border last:border-0">
                  <span className="font-serif text-3xl text-sage">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 p-8 bg-muted/60 border-l-2 border-sage">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Fourchette indicative</p>
              <p className="mt-3 font-serif text-3xl">À partir de 18 000 € — jusqu'à 45 000 €</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Selon le véhicule, le niveau d'équipement et les finitions. Devis détaillé gratuit après notre premier échange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prestations à la carte */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— 02 / Prestations à la carte</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Une intervention ciblée, sans <em className="italic">tout refaire</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Vous avez déjà un van et souhaitez améliorer un point précis ? On intervient à la carte —
              isolation, élec, menuiserie ou ouvertures — avec le même soin qu'un projet complet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {aLaCarte.map((s) => (
              <article key={s.t} className="bg-background p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">{s.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Un projet précis en tête ? <em className="italic">Parlons-en.</em>
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            Premier échange sans engagement à l'atelier de Chapeiry, ou par téléphone.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center bg-cream text-forest px-8 py-4 text-sm tracking-wide hover:bg-sand transition-colors">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;

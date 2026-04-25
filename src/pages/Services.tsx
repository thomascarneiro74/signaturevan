import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import craftImage from "@/assets/copeaux-rabot.jpg";
import traficSalon from "@/assets/realisations/trafic-confort/trafic-confort-salon-velours-vert.jpg";
import vanAnnecy from "@/assets/van-annecy.jpg";

const completeSteps = [
  { n: "01", t: "Échange & cahier des charges", d: "On comprend votre van, vos usages et vos envies — sports, voyages, famille, autonomie." },
  { n: "02", t: "Plans & devis détaillé", d: "Plans 2D, perspectives, choix des matériaux et fourchette budgétaire claire." },
  { n: "03", t: "Fabrication en atelier", d: "Isolation, menuiserie, électricité, plomberie, ouvertures — réalisés à Chapeiry." },
  { n: "04", t: "Livraison & prise en main", d: "Remise des clés, démonstration complète et accompagnement après livraison." },
];

const formules = [
  {
    name: "Formule Confort",
    price: "11 900 €",
    priceNote: "TTC, hors véhicule",
    tagline: "L'essentiel, parfaitement exécuté.",
    description:
      "Un aménagement complet et prêt à partir, fondé sur un agencement éprouvé : deux banquettes face à face convertibles, cuisine inox, électricité 12V, finitions soignées.",
    features: [
      "2 banquettes face à face + couchage 2 places",
      "Cuisine inox & plan de travail bois",
      "Électricité 12V intégrée (USB, LED)",
      "Mobilier en contreplaqué stratifié & assises Bultex avec housse tissu au choix",
      "Compatible Renault Trafic, Vivaro, Talento L2H1",
    ],
    image: traficSalon,
    href: "/formule-confort",
    cta: "Découvrir la Formule Confort",
    available: true,
  },
  {
    name: "Formule Liberté",
    price: "Sur devis",
    priceNote: "à partir de 19 900 €",
    tagline: "Pour partir loin, longtemps, hors-réseau.",
    description:
      "L'aménagement complet pensé pour l'autonomie : eau, énergie solaire, chauffage, douche. Tout pour vivre en van plusieurs semaines, partout.",
    features: [
      "Tout l'équipement Confort, en plus complet",
      "Eau chaude & circuit propre/grise",
      "Solaire + batterie lithium",
      "Chauffage stationnaire diesel",
      "Douche & WC sec en option",
    ],
    image: vanAnnecy,
    href: "/formule-liberte",
    cta: "Découvrir la Formule Liberté",
    available: true,
  },
];

const aLaCarte = [
  { t: "Isolation liège & phonique", d: "Liège projeté écologique, isolation thermique et acoustique, traitement de la condensation pour vivre confortablement été comme hiver." },
  { t: "Électricité 12V / 230V", d: "Batteries lithium, panneaux solaires, convertisseur, prises USB et 220V, éclairage LED basse conso, tableau électrique sécurisé." },
  { t: "Mobilier bois sur mesure", d: "Cuisine, banquettes, lits coulissants, dressings — mobilier en contreplaqué, stratifié ou habillage bois selon le projet." },
  { t: "Ouvertures & lumière", d: "Pose de baies vitrées, lanterneaux, hublots latéraux : plus de luminosité, plus d'air, plus de vues." },
  { t: "Optimisation des rangements", d: "Tiroirs sous-banquettes, soutes garages, fixations matos outdoor (skis, vélos, trail) — chaque cm² compte." },
  { t: "Chauffage & autonomie", d: "Chauffage stationnaire diesel, eau chaude, douche extérieure, gestion d'eau propre/grise — pour vivre toute l'année." },
];

const Services = () => {
  return (
    <>
      <Seo
        title="Aménagement de van à Annecy — Sur mesure & Formules | Signature Van"
        description="Aménagement de van à Annecy : projets sur mesure, Formule Confort à 11 900 € et Formule Liberté pour l'autonomie. Prestations à la carte : isolation, électricité, menuiserie."
        path="/services"
      />
      <PageHeader
        eyebrow="Services"
        title={<>Trois façons d'aménager <em className="italic">votre van</em>.</>}
        intro="Sur mesure de A à Z, formule prête à partir, ou intervention ciblée — Signature Van adapte sa méthode à votre projet, en Haute-Savoie."
      />

      {/* 01 — Sur-mesure */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden sticky top-28">
              <img
                src={craftImage}
                alt="Détail d'un rabot et copeaux de bois — savoir-faire d'ébéniste"
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— 01 / Aménagement sur mesure</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Un van pensé, dessiné et fabriqué <em className="italic">pour vous</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Le sur-mesure, c'est un projet unique de A à Z. On part d'un fourgon vide
              (Sprinter, Crafter, Ducato, Trafic, Vivaro, T6…) et on en fait un véritable lieu de vie :
              isolation, mobilier, électricité, eau, ouvertures et finitions — tout est dessiné pour vos usages.
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
              <p className="mt-3 font-serif text-3xl">À partir de 11 900 € — ensuite, à vous de choisir</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Selon vos envies, votre véhicule et le niveau d'équipement souhaité. Devis détaillé gratuit après notre premier échange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Formules */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— 02 / Nos formules</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Deux aménagements <em className="italic">prêts à partir</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Pour qui veut un van bien aménagé sans entrer dans un projet sur-mesure complet,
              nous avons construit deux formules abouties — pensées pour les véhicules les plus courants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formules.map((f) => (
              <article key={f.name} className="bg-background flex flex-col overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={f.image}
                    alt={`${f.name} — aménagement van Signature Van Annecy`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.25em] text-sage mb-3">{f.name}</p>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
                    {f.tagline}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{f.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-sage shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-foreground/85">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border flex items-end justify-between gap-4">
                    <div>
                      <p className="font-serif text-3xl">{f.price}</p>
                      <p className="text-xs text-muted-foreground mt-1">{f.priceNote}</p>
                    </div>
                    <Link
                      to={f.href}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-forest border-b border-forest pb-1 hover:gap-3 transition-all"
                    >
                      En savoir plus <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — À la carte */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— 03 / Prestations à la carte</p>
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

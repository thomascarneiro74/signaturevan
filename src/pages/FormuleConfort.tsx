import { Link } from "react-router-dom";
import { Check, ArrowRight, Bed, ChefHat, Zap, Sofa, Hammer, Move } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";

import traficSalon from "@/assets/realisations/trafic-confort/trafic-confort-salon-velours-vert.jpg";
import traficVelours from "@/assets/realisations/trafic-confort/trafic-confort-detail-velours-cotele.jpg";
import traficCuisine from "@/assets/realisations/trafic-confort/trafic-confort-cuisine-evier-inox.jpg";
import traficElec from "@/assets/realisations/trafic-confort/trafic-confort-tableau-electrique.jpg";
import traficMobilier from "@/assets/realisations/trafic-confort/trafic-confort-mobilier-vert.jpg";
import traficDetail from "@/assets/realisations/trafic-confort/trafic-confort-detail-mobilier.jpg";
import traficPortes from "@/assets/realisations/trafic-confort/trafic-confort-portes-arriere-ouvertes.jpg";

const inclus = [
  {
    icon: Sofa,
    label: "Salon convertible",
    value: "Banquettes en U autour d'une table centrale, conversion en couchage 2 places le soir — sans démontage d'outil.",
  },
  {
    icon: Bed,
    label: "Couchage 2 places",
    value: "Système « peigne » dépliable, mousse haute densité, housses velours côtelé déhoussables.",
  },
  {
    icon: ChefHat,
    label: "Cuisine équipée",
    value: "Évier inox encastré, robinet, plan de travail bois, rangements optimisés sous plan, espace pour réchaud.",
  },
  {
    icon: Zap,
    label: "Électricité 12V",
    value: "Tableau électrique intégré, batterie auxiliaire, prises 12V & USB, éclairage LED basse consommation.",
  },
  {
    icon: Hammer,
    label: "Menuiserie & finitions",
    value: "Mobilier contreplaqué + stratifié vert sauge, chants soignés, assemblages durables.",
  },
  {
    icon: Move,
    label: "Modularité",
    value: "Configuration salon le jour, couchage la nuit, espace cargo libéré — pour le quotidien comme pour les week-ends.",
  },
];

const compatibles = [
  "Renault Trafic L2H1",
  "Opel Vivaro L2H1",
  "Fiat Talento L2H1",
  "Nissan NV300 L2H1",
];

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Formule Confort — Aménagement van Renault Trafic / Vivaro / Talento",
  description:
    "Formule d'aménagement complète Signature Van pour vans L2H1 : banquettes en U convertibles, cuisine inox, électricité 12V, mobilier stratifié vert sauge.",
  brand: { "@type": "Brand", name: "Signature Van" },
  image: "https://signaturevan.fr/og-image.jpg",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "11900",
    availability: "https://schema.org/InStock",
    url: "https://signaturevan.fr/formule-confort",
    seller: { "@type": "LocalBusiness", name: "Signature Van" },
  },
};

const FormuleConfort = () => {
  return (
    <>
      <Seo
        title="Formule Confort — Aménagement van à 11 900 € | Signature Van Annecy"
        description="Formule Confort : aménagement complet de van L2H1 (Renault Trafic, Vivaro, Talento) à 11 900 €. Banquettes en U convertibles, cuisine inox, électricité 12V. Atelier à Annecy."
        path="/formule-confort"
        jsonLd={offerJsonLd}
      />
      <PageHeader
        eyebrow="Formule Confort"
        title={<>L'essentiel, <em className="italic">parfaitement exécuté</em>.</>}
        intro="Un aménagement complet et abouti pour vans L2H1, à un tarif maîtrisé. Pour celles et ceux qui veulent un beau van, prêt à partir, sans entrer dans un projet sur-mesure complet."
      />

      {/* Hero visuel + prix */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={traficSalon}
                  alt="Aménagement Formule Confort Renault Trafic — salon velours vert sauge — Signature Van Annecy"
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1440}
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Tarif Formule Confort</p>
              <p className="font-serif text-6xl md:text-7xl leading-none">11 900 €</p>
              <p className="mt-3 text-sm text-muted-foreground">TTC, hors véhicule. Délai indicatif : 6 à 8 semaines.</p>

              <div className="mt-10 pt-10 border-t border-border">
                <p className="text-xs uppercase tracking-[0.25em] text-sage mb-4">Véhicules compatibles</p>
                <ul className="space-y-2">
                  {compatibles.map((v) => (
                    <li key={v} className="flex items-center gap-3 text-sm">
                      <Check size={16} className="text-sage" strokeWidth={2} />
                      <span className="text-foreground/85">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors"
              >
                Réserver un créneau atelier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            <figure className="md:col-span-8 overflow-hidden bg-muted">
              <div className="aspect-[3/2]">
                <img src={traficCuisine} alt="Cuisine inox aménagement van Formule Confort" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <figure className="md:col-span-4 overflow-hidden bg-muted">
              <div className="aspect-[3/4]">
                <img src={traficVelours} alt="Détail velours côtelé vert sauge — Formule Confort" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <figure className="md:col-span-4 overflow-hidden bg-muted">
              <div className="aspect-[4/5]">
                <img src={traficMobilier} alt="Mobilier stratifié vert — Formule Confort van Annecy" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <figure className="md:col-span-4 overflow-hidden bg-muted">
              <div className="aspect-[4/5]">
                <img src={traficDetail} alt="Détail finitions menuiserie — Formule Confort" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <figure className="md:col-span-4 overflow-hidden bg-muted">
              <div className="aspect-[4/5]">
                <img src={traficElec} alt="Tableau électrique 12V intégré — Formule Confort" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <figure className="md:col-span-12 overflow-hidden bg-muted">
              <div className="aspect-[16/9]">
                <img src={traficPortes} alt="Renault Trafic Formule Confort vue arrière portes ouvertes" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Ce qui est inclus</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Tout ce qu'il faut pour <em className="italic">partir bien</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              La Formule Confort, c'est un agencement éprouvé sur véhicule L2H1, exécuté avec
              les mêmes matériaux et le même soin que nos projets sur-mesure.
            </p>
          </div>

          <dl className="grid md:grid-cols-2 gap-px bg-border">
            {inclus.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-background p-6 md:p-8 flex gap-5">
                <div className="shrink-0">
                  <div className="h-11 w-11 flex items-center justify-center bg-sage/15 text-sage">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</dt>
                  <dd className="text-foreground/85 leading-relaxed">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Pour qui ?</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
              Le bon van, au bon prix, <em className="italic">sans concession</em> sur la qualité.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              La Formule Confort s'adresse à celles et ceux qui possèdent un fourgon L2H1 et veulent
              un aménagement complet, beau et fonctionnel — week-ends nature, escapades sportives,
              vacances en famille, déplacements pro avec confort.
            </p>
            <p>
              C'est aussi le bon choix pour un premier van : le couple banquettes-cuisine couvre 90 %
              des usages, et l'agencement modulable laisse une vraie place pour vélo, skis ou matos outdoor.
            </p>
            <p>
              Besoin de plus d'autonomie (eau chaude, solaire, chauffage) ? Découvrez notre{" "}
              <Link to="/formule-liberte" className="text-forest underline underline-offset-4 hover:no-underline">
                Formule Liberté
              </Link>
              , pensée pour les voyages au long cours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Prêt à <em className="italic">embarquer</em> ?
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed">
            Premier échange à l'atelier de Chapeiry pour valider la compatibilité véhicule
            et caler le planning de fabrication.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-cream text-forest px-8 py-4 text-sm tracking-wide hover:bg-sand transition-colors"
            >
              Réserver un créneau
            </Link>
            <Link
              to="/realisations"
              className="inline-flex items-center justify-center gap-2 text-cream border border-cream/40 px-8 py-4 text-sm tracking-wide hover:bg-cream/10 transition-colors"
            >
              Voir le van livré <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormuleConfort;

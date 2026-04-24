import { Link } from "react-router-dom";
import { Snowflake, Hammer, Bed, Zap, Droplet, Wind, Move } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";

import tribuExterieur from "@/assets/realisations/tribu/tribu-fiat-talento-exterieur.jpg";
import tribuCuisine from "@/assets/realisations/tribu/tribu-cuisine-arriere-frene.jpg";
import tribuSalon from "@/assets/realisations/tribu/tribu-salon-velours-cotele.jpg";
import tribuCouchageParents from "@/assets/realisations/tribu/tribu-couchage-parents-140x200.jpg";
import tribuCouchageCabine from "@/assets/realisations/tribu/tribu-couchage-enfant-cabine.jpg";
import tribuDetailArrondi from "@/assets/realisations/tribu/tribu-detail-arrondi-meuble-entree.jpg";

const tribu = {
  name: "Tribu",
  vehicle: "Fiat Talento L2H1 — 2019",
  tagline: "Compact, mais 3 vrais couchages.",
  highlights: [
    "3 couchages — 140×200 + 140×70 cabine",
    "Cuisine arrière indoor / outdoor",
    "Détail ébéniste : meuble d'entrée arrondi",
  ],
  story: [
    "Une famille de 3 nous a confié son Fiat Talento avec une demande claire : partir en van sans renoncer au confort, dans un véhicule compact qui reste facile à conduire au quotidien.",
    "Le défi tenait dans peu de mètres carrés : faire dormir trois personnes confortablement, intégrer une vraie cuisine, et garder un esprit chaleureux. Nous avons pensé l'aménagement autour du couchage parental 140×200 à l'arrière, avec un lit enfant amovible 140×70 qui se cale entre les sièges avant de la cabine — une astuce d'ébéniste qui change tout.",
    "La cuisine, placée tout à l'arrière, s'utilise indifféremment portes fermées ou grand ouvertes face à la nature. Le plan de travail en frêne massif, le stratifié vert de gris des meubles, le velours côtelé blanc cassé des assises et le détail arrondi du meuble d'entrée donnent au van une signature visuelle douce, naturelle, faite pour durer.",
  ],
};

const gallery = [
  {
    src: tribuExterieur,
    alt: "Fiat Talento L2H1 aménagé Tribu vue extérieure au coucher du soleil — Signature Van Annecy",
    span: "md:col-span-8 md:row-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    src: tribuCuisine,
    alt: "Cuisine arrière en frêne et meubles vert de gris — aménagement Fiat Talento à Annecy",
    span: "md:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    src: tribuDetailArrondi,
    alt: "Détail ébéniste : meuble d'entrée arrondi en stratifié vert de gris — Signature Van",
    span: "md:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    src: tribuSalon,
    alt: "Espace salon avec banquettes en velours côtelé et table en frêne — aménagement van Haute-Savoie",
    span: "md:col-span-6",
    ratio: "aspect-[3/2]",
  },
  {
    src: tribuCouchageParents,
    alt: "Couchage parents 140×200 déplié à l'arrière du Fiat Talento — Signature Van Annecy",
    span: "md:col-span-6",
    ratio: "aspect-[3/2]",
  },
  {
    src: tribuCouchageCabine,
    alt: "Couchage enfant 140×70 amovible installé en cabine — aménagement famille van Annecy",
    span: "md:col-span-12",
    ratio: "aspect-[16/10]",
  },
];

const specs = [
  {
    icon: Snowflake,
    label: "Isolation",
    value: "Liège projeté, parois et plafond habillés en feutrine.",
  },
  {
    icon: Hammer,
    label: "Menuiserie",
    value: "Contreplaqué + stratifié haut de gamme vert de gris, plan de travail frêne massif.",
  },
  {
    icon: Bed,
    label: "Couchages",
    value: "Lit parents 140×200 (mousse Bultex, housse velours côtelé blanc cassé) + lit enfant 140×70 amovible en cabine.",
  },
  {
    icon: Zap,
    label: "Électricité",
    value: "Batterie AGM 140Ah, panneau solaire, chargeur DC/DC. 100 % 12V — USB, allume-cigare, spots LED.",
  },
  {
    icon: Droplet,
    label: "Circuit d'eau",
    value: "Évier inox, robinet à douchette extensible, chauffe-eau électrique, réservoir propre 54L, eaux usées 28L sous châssis.",
  },
  {
    icon: Wind,
    label: "Ouvertures",
    value: "Deux fenêtres aux portes arrière, lanterneau de toit, aération basse — flux d'air permanent.",
  },
  {
    icon: Move,
    label: "Mobilier amovible",
    value: "Table en frêne démontable, lit cabine clipsable — modularité totale entre jour et nuit.",
  },
];

const projectJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Tribu — Aménagement Fiat Talento L2H1",
  creator: {
    "@type": "LocalBusiness",
    name: "Signature Van",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chapeiry",
      postalCode: "74540",
      addressRegion: "Haute-Savoie",
      addressCountry: "FR",
    },
  },
  description:
    "Aménagement sur mesure d'un Fiat Talento L2H1 pour une famille de 3 : isolation liège projeté, mobilier contreplaqué stratifié vert de gris, plan de travail frêne, 3 couchages, cuisine arrière indoor/outdoor.",
  image: "https://signaturevan.fr/og-tribu.jpg",
  dateCreated: "2024",
  locationCreated: {
    "@type": "Place",
    name: "Atelier Signature Van, Chapeiry, Haute-Savoie",
  },
};

const Realisations = () => {
  return (
    <>
      <Seo
        title="« Tribu » — Aménagement Fiat Talento sur mesure à Annecy | Signature Van"
        description="Découvrez Tribu, notre aménagement Fiat Talento L2H1 pour une famille de 3 : cuisine arrière en frêne, isolation liège, 3 couchages. Artisan ébéniste à Chapeiry, près d'Annecy."
        path="/realisations"
        jsonLd={projectJsonLd}
      />
      <PageHeader
        eyebrow="Réalisations"
        title={<>Nos aménagements de vans <em className="italic">sur mesure</em>.</>}
        intro="Chaque van est unique : véhicule, matériaux, ergonomie, usages. Découvrez nos projets livrés depuis l'atelier de Chapeiry, près d'Annecy."
      />

      {/* Hero projet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={tribuExterieur}
                  alt="Fiat Talento aménagé Tribu — Signature Van, artisan aménageur à Annecy"
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1440}
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">
                {tribu.vehicle}
              </p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
                « {tribu.name} »
              </h2>
              <p className="mt-6 font-serif text-2xl md:text-3xl text-muted-foreground italic leading-snug">
                {tribu.tagline}
              </p>
              <ul className="mt-10 space-y-3">
                {tribu.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-px w-6 bg-sage shrink-0" />
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie bento */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            {gallery.map((img, i) => (
              <figure key={i} className={`${img.span} group overflow-hidden bg-muted`}>
                <div className={img.ratio}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-[1500ms]"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Narration / Histoire du projet */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
              — L'histoire
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
              Une famille, un van compact, <em className="italic">trois couchages</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-muted-foreground text-lg leading-relaxed">
            {tribu.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Fiche technique */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
              — Fiche technique
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
              Le projet, dans <em className="italic">le détail</em>.
            </h2>
          </div>
          <dl className="grid md:grid-cols-2 gap-px bg-border">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-background p-6 md:p-8 flex gap-5">
                <div className="shrink-0">
                  <div className="h-11 w-11 flex items-center justify-center bg-sage/15 text-sage">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    {label}
                  </dt>
                  <dd className="text-foreground/85 leading-relaxed">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bandeau honnêteté */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-forest mb-6">
            — En toute transparence
          </p>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground text-balance">
            « Tribu » est notre première réalisation livrée. L'atelier est jeune,
            <em className="italic"> l'exigence est intacte</em> — chaque détail
            a été pensé, ajusté, ré-ajusté. D'autres projets sont déjà en cours :
            ils rejoindront bientôt cette page.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Votre van sera <em className="italic">le prochain</em>.
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed">
            Chaque projet commence par un échange. Racontez-nous le vôtre,
            on en discute autour d'un café à l'atelier.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center bg-cream text-forest px-8 py-4 text-sm tracking-wide hover:bg-sand transition-colors"
          >
            Discutons de votre projet
          </Link>
        </div>
      </section>
    </>
  );
};

export default Realisations;

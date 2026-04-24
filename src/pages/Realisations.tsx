import { Link } from "react-router-dom";
import { Snowflake, Hammer, Bed, Zap, Droplet, Wind, Move, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";

// Talento — sur-mesure
import talentoExterieur from "@/assets/realisations/tribu/tribu-fiat-talento-exterieur.jpg";
import talentoCuisine from "@/assets/realisations/tribu/tribu-cuisine-arriere-frene.jpg";
import talentoSalon from "@/assets/realisations/tribu/tribu-salon-velours-cotele.jpg";
import talentoCouchageParents from "@/assets/realisations/tribu/tribu-couchage-parents-140x200.jpg";
import talentoCouchageCabine from "@/assets/realisations/tribu/tribu-couchage-enfant-cabine.jpg";
import talentoDetailArrondi from "@/assets/realisations/tribu/tribu-detail-arrondi-meuble-entree.jpg";

// Trafic — Formule Confort
import traficSalon from "@/assets/realisations/trafic-confort/trafic-confort-salon-velours-vert.jpg";
import traficVelours from "@/assets/realisations/trafic-confort/trafic-confort-detail-velours-cotele.jpg";
import traficCuisine from "@/assets/realisations/trafic-confort/trafic-confort-cuisine-evier-inox.jpg";
import traficElec from "@/assets/realisations/trafic-confort/trafic-confort-tableau-electrique.jpg";
import traficMobilier from "@/assets/realisations/trafic-confort/trafic-confort-mobilier-vert.jpg";
import traficDetail from "@/assets/realisations/trafic-confort/trafic-confort-detail-mobilier.jpg";
import traficPortes from "@/assets/realisations/trafic-confort/trafic-confort-portes-arriere-ouvertes.jpg";

/* ================================================================
   PROJET 1 — Fiat Talento L2H1 (sur-mesure)
================================================================ */
const talento = {
  vehicle: "Fiat Talento L2H1 — 2019",
  category: "Aménagement sur mesure",
  title: "Aménagement Fiat Talento sur mesure — couple + 1 enfant",
  tagline: "Compact, mais 3 vrais couchages.",
  highlights: [
    "3 couchages — 140×200 + 140×70 cabine",
    "Cuisine arrière indoor / outdoor",
    "Détail ébéniste : meuble d'entrée arrondi",
  ],
  story: [
    "Un couple avec un jeune enfant nous a confié son Fiat Talento avec une demande claire : partir en van sans renoncer au confort, dans un véhicule compact qui reste facile à conduire au quotidien.",
    "Le défi tenait dans peu de mètres carrés : faire dormir trois personnes confortablement, intégrer une vraie cuisine, et garder un esprit chaleureux. Nous avons pensé l'aménagement autour du couchage parental 140×200 à l'arrière, avec un lit enfant amovible 140×70 qui se cale entre les sièges avant de la cabine.",
    "La cuisine, placée tout à l'arrière, permet de cuisiner aussi bien à l'intérieur qu'à l'extérieur. Le plan de travail en frêne massif, le stratifié vert de gris des meubles, le velours côtelé blanc cassé des assises et le détail arrondi du meuble d'entrée donnent au van une signature visuelle douce, naturelle, faite pour durer.",
  ],
  gallery: [
    { src: talentoExterieur, alt: "Fiat Talento L2H1 aménagé sur mesure vue extérieure au coucher du soleil — Signature Van Annecy", span: "md:col-span-8 md:row-span-2", ratio: "aspect-[4/3]" },
    { src: talentoCuisine, alt: "Cuisine arrière en frêne et meubles vert de gris — aménagement Fiat Talento à Annecy", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: talentoDetailArrondi, alt: "Détail ébéniste : meuble d'entrée arrondi en stratifié vert de gris — Signature Van", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: talentoSalon, alt: "Espace salon avec banquettes en velours côtelé et table en frêne — aménagement van Haute-Savoie", span: "md:col-span-6", ratio: "aspect-[3/2]" },
    { src: talentoCouchageParents, alt: "Couchage parents 140×200 déplié à l'arrière du Fiat Talento — Signature Van Annecy", span: "md:col-span-6", ratio: "aspect-[3/2]" },
    { src: talentoCouchageCabine, alt: "Couchage enfant 140×70 amovible installé en cabine — aménagement famille van Annecy", span: "md:col-span-12", ratio: "aspect-[16/10]" },
  ],
  specs: [
    { icon: Snowflake, label: "Isolation", value: "Liège projeté, parois et plafond habillés en feutrine." },
    { icon: Hammer, label: "Menuiserie", value: "Contreplaqué + stratifié haut de gamme vert de gris, plan de travail frêne massif." },
    { icon: Bed, label: "Couchages", value: "Lit parents 140×200 dépliable « en peigne » (mousse Bultex, housse velours côtelé blanc cassé) + lit enfant 140×70 amovible en cabine." },
    { icon: Zap, label: "Électricité", value: "Batterie AGM 140Ah, panneau solaire, chargeur DC/DC. 100 % 12V — USB, allume-cigare, spots LED." },
    { icon: Droplet, label: "Circuit d'eau", value: "Évier inox, robinet à douchette extensible, chauffe-eau électrique, réservoir propre 54L, eaux usées 28L sous châssis." },
    { icon: Wind, label: "Ouvertures", value: "Deux fenêtres aux portes arrière, lanterneau de toit, aération basse — flux d'air permanent." },
    { icon: Move, label: "Mobilier amovible", value: "Table en frêne démontable, lit cabine clipsable — modularité totale entre jour et nuit." },
  ],
};

/* ================================================================
   PROJET 2 — Renault Trafic L2H1 (Formule Confort)
================================================================ */
const trafic = {
  vehicle: "Renault Trafic L2H1 — 2019",
  category: "Formule Confort",
  title: "Aménagement Renault Trafic L2H1 — Formule Confort",
  tagline: "L'essentiel, parfaitement exécuté.",
  highlights: [
    "Banquettes en U — couchage 2 places dépliable",
    "Cuisine inox + plan de travail bois",
    "Velours côtelé vert sauge & stratifié assorti",
  ],
  story: [
    "Sur ce Renault Trafic L2H1 de 2019, nous avons appliqué notre Formule Confort : un aménagement complet, prêt à partir, fondé sur un agencement éprouvé et des matériaux choisis pour durer.",
    "Le parti pris : un grand salon convivial avec banquettes en U autour d'une table centrale, qui se transforme en couchage 2 places le soir venu. À l'avant du module, une cuisine compacte avec évier inox encastré, plan de travail bois et rangements optimisés permet de cuisiner réellement — pas seulement de réchauffer.",
    "Le velours côtelé vert sauge des assises répond au stratifié des meubles dans un camaïeu doux et naturel. Côté technique, tableau électrique soigné, prises USB et 12V intégrées, éclairage LED basse consommation : tout fonctionne, tout se voit, rien ne dépasse.",
  ],
  gallery: [
    { src: traficSalon, alt: "Salon Renault Trafic L2H1 avec banquettes velours vert sauge et table centrale — Formule Confort Signature Van", span: "md:col-span-8 md:row-span-2", ratio: "aspect-[4/3]" },
    { src: traficCuisine, alt: "Cuisine compacte avec évier inox et plan de travail bois — aménagement Renault Trafic Annecy", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: traficVelours, alt: "Détail finition velours côtelé vert sauge — Formule Confort Signature Van", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: traficMobilier, alt: "Mobilier sur mesure stratifié vert et bois clair — Renault Trafic aménagé Annecy", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: traficDetail, alt: "Détail des assemblages mobilier — Formule Confort Renault Trafic Signature Van", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: traficElec, alt: "Tableau électrique 12V/USB intégré au mobilier — Renault Trafic Formule Confort", span: "md:col-span-4", ratio: "aspect-[4/5]" },
    { src: traficPortes, alt: "Vue arrière portes ouvertes — Renault Trafic L2H1 aménagé Formule Confort en Haute-Savoie", span: "md:col-span-12", ratio: "aspect-[16/9]" },
  ],
  specs: [
    { icon: Snowflake, label: "Isolation", value: "Isolation thermique et acoustique complète, parois habillées." },
    { icon: Hammer, label: "Menuiserie", value: "Contreplaqué + stratifié vert sauge, chants soignés, plan de travail bois clair." },
    { icon: Bed, label: "Couchage", value: "Banquettes en U convertibles — couchage 2 places dépliable « en peigne » avec coussins velours côtelé." },
    { icon: Zap, label: "Électricité", value: "Tableau électrique intégré, batterie auxiliaire, prises 12V & USB, éclairage LED basse conso." },
    { icon: Droplet, label: "Cuisine", value: "Évier inox encastré, robinet, plan de travail bois, rangements optimisés sous plan." },
    { icon: Move, label: "Modularité", value: "Configuration salon le jour, couchage la nuit — transformation rapide sans démontage d'outil." },
  ],
};

/* ================================================================
   JSON-LD
================================================================ */
const projectsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: talento.title,
    description:
      "Aménagement sur mesure d'un Fiat Talento L2H1 pour une famille de 3 : isolation liège, mobilier stratifié vert de gris, plan de travail frêne, 3 couchages, cuisine arrière indoor/outdoor.",
    image: "https://signaturevan.fr/og-image.jpg",
    creator: { "@type": "LocalBusiness", name: "Signature Van" },
    locationCreated: { "@type": "Place", name: "Atelier Signature Van, Chapeiry, Haute-Savoie" },
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: trafic.title,
    description:
      "Aménagement complet d'un Renault Trafic L2H1 selon notre Formule Confort : banquettes en U convertibles, cuisine inox, mobilier stratifié vert sauge, électricité 12V intégrée.",
    image: "https://signaturevan.fr/og-image.jpg",
    creator: { "@type": "LocalBusiness", name: "Signature Van" },
    locationCreated: { "@type": "Place", name: "Atelier Signature Van, Chapeiry, Haute-Savoie" },
  },
];

/* ================================================================
   Bloc projet réutilisable
================================================================ */
type Project = typeof talento;

const ProjectBlock = ({
  project,
  heroImage,
  index,
  ctaHref,
  ctaLabel,
}: {
  project: Project;
  heroImage: string;
  index: string;
  ctaHref?: string;
  ctaLabel?: string;
}) => (
  <>
    {/* Hero projet */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={heroImage}
                alt={`${project.title} — Signature Van, artisan aménageur à Annecy`}
                className="h-full w-full object-cover"
                width={1920}
                height={1440}
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
              — Projet {index} · {project.category}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-sage mb-4">
              {project.vehicle}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.98] text-balance">
              {project.title}
            </h2>
            <p className="mt-6 font-serif text-2xl md:text-3xl text-muted-foreground italic leading-snug">
              {project.tagline}
            </p>
            <ul className="mt-10 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-px w-6 bg-sage shrink-0" />
                  <span className="text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
            {ctaHref && ctaLabel && (
              <Link
                to={ctaHref}
                className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-forest border-b border-forest pb-1 hover:gap-3 transition-all"
              >
                {ctaLabel} <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* Galerie bento */}
    <section className="pb-16 md:pb-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {project.gallery.map((img, i) => (
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

    {/* Narration */}
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            — L'histoire
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
            {project.tagline}
          </h3>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-muted-foreground text-lg leading-relaxed">
          {project.story.map((p, i) => (
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
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
            Le projet, dans <em className="italic">le détail</em>.
          </h3>
        </div>
        <dl className="grid md:grid-cols-2 gap-px bg-border">
          {project.specs.map(({ icon: Icon, label, value }) => (
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
  </>
);

/* ================================================================
   Page
================================================================ */
const Realisations = () => {
  return (
    <>
      <Seo
        title="Réalisations — Aménagements de vans à Annecy | Signature Van"
        description="Découvrez nos aménagements de vans livrés depuis l'atelier de Chapeiry, près d'Annecy : Fiat Talento sur mesure pour couple + enfant et Renault Trafic Formule Confort."
        path="/realisations"
        jsonLd={projectsJsonLd}
      />
      <PageHeader
        eyebrow="Réalisations"
        title={<>Nos aménagements de vans <em className="italic">livrés</em>.</>}
        intro="Du sur-mesure pour un couple avec enfant à notre Formule Confort prête à partir : chaque van raconte une manière de voyager. Découvrez nos projets sortis de l'atelier de Chapeiry."
      />

      <ProjectBlock
        project={talento}
        heroImage={talentoExterieur}
        index="01"
      />

      {/* Séparateur */}
      <div className="bg-background py-8">
        <div className="container mx-auto">
          <div className="h-px bg-border" />
        </div>
      </div>

      <ProjectBlock
        project={trafic}
        heroImage={traficSalon}
        index="02"
        ctaHref="/formule-confort"
        ctaLabel="Découvrir la Formule Confort"
      />

      {/* CTA final */}
      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Votre van sera <em className="italic">le prochain</em>.
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed">
            Sur mesure ou Formule Confort — racontez-nous votre projet,
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

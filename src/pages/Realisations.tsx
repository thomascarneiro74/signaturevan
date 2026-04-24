import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import van1 from "@/assets/van-exterior.jpg";
import van2 from "@/assets/van-kitchen.jpg";
import van3 from "@/assets/van-bedroom.jpg";
import van4 from "@/assets/hero-van.jpg";
import van5 from "@/assets/craft-detail.jpg";
import van6 from "@/assets/van-annecy.jpg";

const projects = [
  {
    img: van1, ratio: "aspect-[4/3]",
    vehicle: "Mercedes Sprinter L2H2",
    title: "« Borealis » — couple grands voyageurs",
    needs: "Vivre 6 mois par an en van, en autonomie complète, été comme hiver.",
    solutions: "Isolation liège projeté, batterie 200Ah + 300W solaire, chauffage diesel, douche intérieure, lit transversal et garage à vélos.",
    materials: "Chêne massif, liège, lin, laiton",
    alt: "Aménagement Mercedes Sprinter sur mesure à Annecy",
  },
  {
    img: van2, ratio: "aspect-[3/4]",
    vehicle: "Volkswagen Crafter",
    title: "« Nordica » — cuisine intégrée",
    needs: "Une vraie cuisine pour cuisiner partout, sans sacrifier le couchage.",
    solutions: "Plan de travail noyer, évier inox, gaz 2 feux, frigo 90L à tiroir, crédence carrelage sage.",
    materials: "Noyer, frêne, faïence, cuivre",
    alt: "Cuisine intégrée d'aménagement de van en Haute-Savoie",
  },
  {
    img: van3, ratio: "aspect-[3/4]",
    vehicle: "Fiat Ducato L3H2",
    title: "« Refuge » — cellule nuit cosy",
    needs: "Un cocon douillet pour les week-ends en montagne en couple.",
    solutions: "Lit fixe 140×200, vue arrière panoramique, liseuses orientables, rangements sous-coffre.",
    materials: "Pin maritime, lin écru, laine sage",
    alt: "Cellule nuit aménagement van Fiat Ducato à Annecy",
  },
  {
    img: van4, ratio: "aspect-[4/3]",
    vehicle: "Renault Master L2H2",
    title: "« Aravis » — famille outdoor",
    needs: "Faire dormir 2 adultes + 2 enfants, avec rangements pour ski et VTT.",
    solutions: "Lit pavillon 140×190, banquette-lit 120×190, garage XL avec rails ski et fixations vélos.",
    materials: "Bouleau, OSB filmé, tissus techniques",
    alt: "Aménagement van familial pour la montagne en Haute-Savoie",
  },
  {
    img: van5, ratio: "aspect-[3/4]",
    vehicle: "Citroën Jumper L3H2",
    title: "« Atelier mobile » — artisan voyageur",
    needs: "Un van qui sert à la fois d'atelier itinérant et de lieu de vie.",
    solutions: "Établi escamotable, rangements outils sécurisés, modules amovibles pour basculer mode atelier / nuit.",
    materials: "Multiplis bouleau, acier brossé",
    alt: "Aménagement van professionnel atelier mobile à Annecy",
  },
  {
    img: van6, ratio: "aspect-[4/3]",
    vehicle: "Ford Transit Custom",
    title: "« Léman » — week-ender lac",
    needs: "Un petit van compact, facile à conduire en ville, parfait pour 2.",
    solutions: "Lit déployable, kitchenette compacte, rangements muraux verticaux pour gain d'espace.",
    materials: "Frêne huilé, liège, lin sable",
    alt: "Petit van aménagé compact pour les bords du lac d'Annecy",
  },
];

const Realisations = () => {
  return (
    <>
      <Seo
        title="Réalisations — Aménagements de vans sur mesure | Signature Van Annecy"
        description="Découvrez nos aménagements de vans réalisés en Haute-Savoie : Sprinter, Crafter, Ducato, Master… Bois massif, isolation liège et solutions sur mesure."
        path="/realisations"
      />
      <PageHeader
        eyebrow="Portfolio"
        title={<>Réalisations — aménagements de vans <em className="italic">sur mesure</em>.</>}
        intro="Quelques projets d'aménagement réalisés à l'atelier de Chapeiry, près d'Annecy. Chaque van est unique : véhicule, matériaux, ergonomie, usages."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <article key={p.title} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className={`${p.ratio} overflow-hidden bg-muted`}>
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-[1800ms]"
                  />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">{p.vehicle}</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
                  {p.title}
                </h2>
                <dl className="mt-8 space-y-5 text-sm">
                  <div>
                    <dt className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-1">Besoins</dt>
                    <dd className="text-foreground/85 leading-relaxed">{p.needs}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-1">Solutions apportées</dt>
                    <dd className="text-foreground/85 leading-relaxed">{p.solutions}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-1">Matériaux principaux</dt>
                    <dd className="text-foreground/85 leading-relaxed">{p.materials}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Votre van sera <em className="italic">le prochain</em>.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            Chaque projet commence par un échange. Racontez-nous le vôtre.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center bg-cream text-forest px-8 py-4 text-sm tracking-wide hover:bg-sand transition-colors">
            Démarrer un projet
          </Link>
        </div>
      </section>
    </>
  );
};

export default Realisations;

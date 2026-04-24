import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import vanAnnecy from "@/assets/van-annecy.jpg";
import vanInterior from "@/assets/hero-van.jpg";

const equipment = [
  "2 places assises homologuées + 2 couchages",
  "Coin cuisine équipé (réchaud 2 feux, évier, frigo 12V)",
  "Lit fixe 140×200 avec rangements intégrés",
  "Chauffage stationnaire diesel (toutes saisons)",
  "Panneaux solaires + batterie auxiliaire",
  "Réservoir eau propre 80L + douche extérieure",
  "Auvent, table d'extérieur, vaisselle complète",
  "Porte-vélos, barres de toit pour skis & paddle",
];

const cseAdvantages = [
  {
    t: "Une remise dédiée CSE",
    d: "Tarif préférentiel négocié pour les salariés de votre entreprise — sur tous les week-ends et semaines.",
  },
  {
    t: "Un avantage qui sort du lot",
    d: "Plus original qu'une carte cadeau. Un week-end vanlife dans les Alpes : un cadeau dont on se souvient.",
  },
  {
    t: "100 % adapté au public outdoor",
    d: "Idéal pour les entreprises ancrées en montagne — Salomon, Mavic, Rossignol, NTN-SNR, Téfal, hôpital d'Annecy…",
  },
  {
    t: "Une mise en place simple",
    d: "Code promo dédié, affiche / PDF de communication interne, processus de réservation clair pour vos salariés.",
  },
];

const Location = () => {
  return (
    <>
      <Seo
        title="Location de van aménagé à Annecy (Haute-Savoie) | Signature Van"
        description="Louez un van aménagé au départ d'Annecy. Idéal week-end dans les Alpes. Offre dédiée CSE et comités d'entreprise. Van prêt à partir, prise en main complète."
        path="/location-van-annecy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Location de van aménagé",
          provider: { "@type": "LocalBusiness", name: "Signature Van" },
          areaServed: "Annecy, Haute-Savoie",
          description:
            "Location de van aménagé à Annecy pour week-end et vacances, avec offre dédiée aux CSE.",
        }}
      />
      <PageHeader
        eyebrow="Location"
        title={<>Location de van aménagé <em className="italic">à Annecy</em>.</>}
        intro="Un van prêt à partir au départ d'Annecy / Chapeiry. Pour vivre la vanlife le temps d'un week-end, d'une semaine ou d'un grand voyage — et tester avant un projet d'aménagement."
      />

      {/* Présentation du van */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={vanAnnecy}
                alt="Location de van aménagé au départ d'Annecy avec vue sur les Alpes"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Le van</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Un van pensé pour <em className="italic">la montagne</em> et les week-ends outdoor.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Notre van de location a été aménagé dans notre atelier — bois massif, isolation liège,
              équipements complets. Il s'adresse aux couples, aux amis ou aux familles qui veulent partir
              facilement, sans rien préparer, depuis Annecy.
            </p>
            <ul className="mt-8 space-y-3">
              {equipment.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-px w-4 bg-sage shrink-0" />
                  <span className="text-foreground/85">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Pour qui</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              À qui s'adresse <em className="italic">la location ?</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                t: "Couples & amis",
                d: "Pour un week-end dans les Aravis, un tour du Mont-Blanc ou une virée dans le Jura — partez léger, dormez où vous voulez.",
              },
              {
                t: "Familles outdoor",
                d: "Vélo, escalade, ski de rando, lacs : un van pour suivre vos enfants partout, à votre rythme.",
              },
              {
                t: "Futurs vanlifers",
                d: "Vous hésitez à faire aménager un van ? Testez la vie en van quelques jours, on en reparle après.",
              },
            ].map((c) => (
              <article key={c.t} className="bg-background p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl">{c.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages location */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Pourquoi nous</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Un van prêt à partir, <em className="italic">depuis Annecy</em>.
            </h2>
          </div>
          <ul className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {[
              { t: "Départ Annecy / Chapeiry", d: "À 15 min de l'A41, accès facile depuis toute la Haute-Savoie." },
              { t: "Prise en main complète", d: "1h sur place avant le départ — eau, élec, conduite, conseils itinéraires." },
              { t: "Van bichonné", d: "Entretien suivi par l'artisan qui l'a aménagé. Aucune mauvaise surprise." },
              { t: "Idéal sports outdoor", d: "Porte-vélos, barres ski, espace matos pensé pour la rando, le trail, le VTT." },
            ].map((a) => (
              <li key={a.t} className="bg-background p-6 md:p-8">
                <p className="font-serif text-xl">{a.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section CSE — la vedette */}
      <section className="py-24 md:py-36 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={vanInterior}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative container mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sage-light mb-6">
              — Offre dédiée
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream text-balance">
              Une offre vanlife pour votre <em className="italic">CSE / comité d'entreprise</em>.
            </h2>
            <p className="mt-8 text-cream/80 text-lg leading-relaxed max-w-2xl">
              Signature Van propose aux comités d'entreprise de la région d'Annecy un partenariat
              clé en main : remise dédiée, communication interne et un avantage salarié original,
              parfaitement aligné avec une culture montagne et outdoor.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-cream/15">
            {cseAdvantages.map((a) => (
              <article key={a.t} className="bg-forest p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl text-cream">{a.t}</h3>
                <p className="mt-4 text-cream/75 leading-relaxed">{a.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 p-10 md:p-12 bg-cream text-forest">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">— Responsable CSE ?</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                  Construisons ensemble un avantage <em className="italic">qui marque les esprits</em>.
                </h3>
                <p className="mt-4 text-forest/75 leading-relaxed max-w-xl">
                  Contactez-nous pour recevoir notre dossier partenariat CSE :
                  grille tarifaire dédiée, supports de communication et exemples
                  de partenariats existants en Haute-Savoie.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors whitespace-nowrap"
              >
                Demander l'offre CSE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA particulier */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            Prêt à <em className="italic">partir</em> ?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Réservez votre van pour un week-end ou une semaine — on vous répond sous 48h.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors">
            Réserver le van
          </Link>
        </div>
      </section>
    </>
  );
};

export default Location;

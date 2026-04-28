import {
  ArrowRight,
  CalendarDays,
  Check,
  Compass,
  Fuel,
  Mountain,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import vanAnnecy from "@/assets/van-annecy.jpg";
import coconNomadeInterieur from "@/assets/cocon-nomade-interieur.jpg";
import echappeeBelleInterieur from "@/assets/echappee-belle-interieur.jpg";

const yescapaUrl =
  "https://www.yescapa.fr/campers/113054?date_from=2026-05-15&date_to=2026-05-18&hour_from=14&hour_to=12";

const fleet = [
  {
    name: "Le Cocon Nomade",
    vehicle: "Fiat Talento aménagé",
    tag: "Escapades en duo ou en famille",
    image: coconNomadeInterieur,
    wikicampersUrl:
      "https://www.wikicampers.fr/location/van/chapeiry/fiat-fiat-talento-1-6-ecojet-125-ch-eu6-3-0t/380559",
    alt: "Intérieur du van Cocon Nomade au coucher du soleil — coin repas et cuisine",
    summary:
      "Un van compact, chaleureux et facile à prendre en main pour les week-ends impro, les lacs alpins et les premières virées vanlife.",
    specs: [
      "2 adultes + 1 enfant max. 10 ans",
      "Lit principal 140 × 200 + couchage cabine enfant",
      "Cuisine équipée, glacière compression, vaisselle complète, réserve eau propre 54 L, ballon eau chaude, robinet douchette extensible, réchaud amovible double feux",
      "Hauteur 2,06 m · permis B",
    ],
    meta: [
      { label: "Transmission", value: "Manuelle" },
      { label: "Énergie", value: "Diesel" },
      { label: "Autonomie", value: "Recharge en roulant + panneau solaire · prises USB et 12V" },
      { label: "Esprit", value: "Petit cocon prêt à partir" },
    ],
  },
  {
    name: "L'Échappée Belle",
    vehicle: "Renault Trafic L2H1 — 2019",
    tag: "",
    image: echappeeBelleInterieur,
    wikicampersUrl:
      "https://www.wikicampers.fr/location/van/chapeiry/fiat-fiat-talento-1-6-multijet-120-ch-eu6-lh1-1200-3-0t/380688",
    alt: "Intérieur de L'Échappée Belle — meuble cuisine et porte latérale ouverte sur prairie et montagnes",
    summary:
      "Le van signature pour partir léger avec un vrai confort à bord : salon accueillant, lit principal généreux et couchage cabine enfant.",
    specs: [
      "3 places route · 2 adultes + 1 enfant",
      "Lit arrière 140 × 200 + lit cabine 60 × 140",
      "Réserve d'eau par jerricans : 36 L eau propre + 12 L eaux usées · 1 feu gaz amovible · vaisselle complète",
      "Hauteur env. 2,10 m · caution 2 000 € · permis B",
    ],
    meta: [
      { label: "Transmission", value: "Manuelle" },
      { label: "Énergie", value: "Diesel" },
      { label: "Autonomie", value: "Batterie auxiliaire rechargée en roulant · prises USB et 12V" },
      { label: "Usage", value: "Road trips Annecy & Alpes" },
    ],
  },
] as const;

const seasons = [
  { name: "Basse saison", price: "65 €", period: "de novembre à mars", minNights: "2 nuits min." },
  { name: "Moyenne saison", price: "85 €", period: "avril, mai, juin, septembre, octobre", minNights: "2 nuits min." },
  { name: "Haute saison", price: "105 €", period: "juillet - août", minNights: "5 nuits min." },
] as const;

const included = [
  "Assurance et assistance gérées par la plateforme de réservation choisie",
  "Paiement sécurisé et conditions centralisées avant validation",
  "Calendrier de disponibilités consultable en ligne",
  "Vaisselle, batterie de cuisine, cafetière et consommables de base",
  "Couette et oreillers fournis pour chaque couchage",
  "Prise en main complète avant départ depuis Chapeiry / Annecy",
  "Éclairage LED, prises USB, rangements et table de repas",
  "Conseils d'itinéraires lacs, montagnes et spots nuit autour des Alpes",
];

const advantages = [
  {
    title: "Assurance simplifiée",
    text: "La couverture, l'assistance et la franchise sont cadrées directement par Yescapa ou Wikicampers au moment de réserver.",
  },
  {
    title: "Réservation sécurisée",
    text: "Les paiements, cautions, disponibilités et conditions d'annulation sont centralisés sur des plateformes reconnues.",
  },
  {
    title: "Vans suivis par l'artisan",
    text: "Même via plateforme, vous partez avec des véhicules que l'on connaît dans le détail : aménagement, entretien et prise en main.",
  },
];

const personas = [
  {
    title: "Couples & amis",
    text: "Un week-end au lac, une nuit en altitude, trois jours dans les Aravis : le bon format pour partir vite, sans logistique lourde.",
    icon: Compass,
  },
  {
    title: "Petites familles outdoor",
    text: "Deux adultes et un enfant peuvent dormir confortablement, avec un couchage cabine pensé pour les jeunes aventuriers.",
    icon: Users,
  },
  {
    title: "Futurs vanlifers",
    text: "Avant de lancer votre propre aménagement, testez un usage réel : circulation, couchage, cuisine, autonomie, météo.",
    icon: Mountain,
  },
];

const faq = [
  {
    q: "Quelle assurance est incluse ?",
    a: "L'assurance et l'assistance sont gérées par la plateforme choisie, Yescapa ou Wikicampers. Le niveau de franchise dépend de l'option sélectionnée au moment de la réservation.",
  },
  {
    q: "Les animaux sont-ils acceptés ?",
    a: "Non, les deux vans sont proposés sans animaux afin de préserver les textiles, les finitions et le confort des voyageurs suivants.",
  },
  {
    q: "Comment se passent la prise en charge et la restitution ?",
    a: "Le départ se fait autour d'Annecy / Chapeiry avec une vraie prise en main du van. Au retour, un état des lieux est réalisé ensemble et les frais de nettoyage sont offerts si le van est rendu propre.",
  },
  {
    q: "Quelles sont les conditions d'annulation ?",
    a: "Les conditions d'annulation suivent la politique de réservation appliquée par Yescapa ou Wikicampers. Elles sont rappelées avant validation de la réservation.",
  },
  {
    q: "Faut-il passer obligatoirement par une plateforme ?",
    a: "Oui, les réservations se font désormais via Yescapa ou Wikicampers pour simplifier l'assurance, le paiement sécurisé et les conditions de location.",
  },
];

const productJsonLd = fleet.map((van) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${van.name} — ${van.vehicle}`,
  description: van.summary,
  brand: { "@type": "Brand", name: "Signature Van" },
  areaServed: "Annecy",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "EUR",
      minPrice: 65,
      maxPrice: 105,
      unitText: "DAY",
    },
    priceValidUntil: "2026-12-31",
  },
}));

const Location = () => {
  return (
    <>
      <Seo
        title="Location de van à Annecy — tarifs et flotte | Signature Van"
        description="Découvrez nos vans aménagés au départ d'Annecy : flotte, tarifs indicatifs, kilomètres inclus et réservation via Yescapa ou Wikicampers."
        path="/location-van-annecy"
        jsonLd={productJsonLd}
      />

      <PageHeader
        eyebrow="Location"
        title={<>Location de vans aménagés <em className="italic">à Annecy</em>.</>}
        intro="Deux vans prêts à partir, pensés pour les week-ends alpins, les micro-aventures et les premières escapades en petite famille."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-7 overflow-hidden bg-muted">
            <div className="aspect-[16/10]">
              <img
                src={vanAnnecy}
                alt="Van aménagé Signature Van au départ d'Annecy face aux montagnes"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— En ce moment</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Une flotte courte, claire, <em className="italic">facile à réserver</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Pas de catalogue interminable : deux vans que l'on connaît parfaitement, avec une lecture simple des tarifs,
              des kilomètres inclus et une réservation centralisée via Yescapa ou Wikicampers.
            </p>
            <div className="mt-8 grid gap-px bg-border">
              {[
                { icon: CalendarDays, label: "Réservation", value: "week-end, semaine, road trip" },
                { icon: Fuel, label: "Kilométrage", value: "100 km / jour inclus" },
                { icon: Shield, label: "Caution", value: "2 000 €" },
                { icon: Sparkles, label: "Nettoyage", value: "39 € · offert si rendu propre" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-background p-5 flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 bg-sage/15 text-sage flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm text-foreground/85">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— La flotte</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Deux vans, deux façons de partir, <em className="italic">un même niveau de soin</em>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-border">
            {fleet.map((van) => (
              <article key={van.name} className="bg-background">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={van.image} alt={van.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-8 md:p-10">
                  {van.tag && (
                    <p className="text-xs uppercase tracking-[0.25em] text-sage">{van.tag}</p>
                  )}
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">{van.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{van.vehicle}</p>
                  <p className="mt-6 text-muted-foreground leading-relaxed">{van.summary}</p>

                  <ul className="mt-8 space-y-3">
                    {van.specs.map((spec) => (
                      <li key={spec} className="flex gap-3 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 grid sm:grid-cols-2 gap-px bg-border">
                    {van.meta.map((item) => (
                      <div key={item.label} className="bg-background p-4">
                        <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</dt>
                        <dd className="mt-1 text-sm text-foreground/85">{item.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <Button asChild className="mt-8 w-full sm:w-auto">
                    <a href={van.wikicampersUrl} target="_blank" rel="noreferrer">
                      Réserver sur Wikicampers <ArrowRight />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Tarifs</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Des repères simples, à confirmer <em className="italic">sur les plateformes</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {seasons.map((season) => (
              <article key={season.name} className="relative border border-border bg-muted/20 p-8">
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-sage/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-sage">
                  {season.minNights}
                </span>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{season.name}</p>
                <p className="mt-4 font-serif text-5xl leading-none">dès {season.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{season.period}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.2em] text-sage">par nuit · indicatif</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-6 md:p-8">
              <h3 className="font-serif text-2xl">Kilométrage</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li>100 km / jour inclus</li>
                <li>200 km / jour : +15 € / jour</li>
                <li>Au-delà : 0,15 € / km</li>
              </ul>
            </div>
            <div className="bg-background p-6 md:p-8">
              <h3 className="font-serif text-2xl">Frais</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li>Nettoyage : 39 €</li>
                <li>Offert si le van revient propre</li>
                <li>Caution : 2 000 €</li>
              </ul>
            </div>
            <div className="bg-background p-6 md:p-8">
              <h3 className="font-serif text-2xl">Plateformes</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li>Tarifs finaux affichés avant paiement</li>
                <li>Assurance et assistance selon l'option choisie</li>
                <li>Conditions et disponibilités mises à jour en ligne</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Les prix restent indicatifs : le montant final, l'assurance et les éventuelles options sont confirmés sur Yescapa ou Wikicampers avant validation.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Inclus & avantages</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Tout ce qu'il faut pour partir <em className="italic">sans friction</em>.
            </h2>
            <div className="mt-10 aspect-[4/5] overflow-hidden bg-muted hidden md:block">
              <img src={coconNomadeInterieur} alt="Intérieur cosy du Cocon Nomade au coucher du soleil" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-10">
            <div className="grid gap-px bg-border">
              {included.map((item) => (
                <div key={item} className="bg-background px-6 py-5 flex gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border">
              {advantages.map((item) => (
                <article key={item.title} className="bg-background p-6 md:p-7">
                  <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Pour qui</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Pensé pour les usages que l'on voit vraiment <em className="italic">autour d'Annecy</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {personas.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border border-border p-8 bg-muted/10">
                <div className="h-11 w-11 bg-sage/15 text-sage flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-serif text-3xl leading-tight">{title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-sage-light mb-4">— Plateformes partenaires</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Réservez en ligne, avec assurance et paiement <em className="italic">sécurisés</em>.
            </h2>
            <p className="mt-6 text-cream/75 text-lg leading-relaxed max-w-3xl">
              Pour simplifier l'assurance, la caution et les conditions de location, les réservations passent désormais par Yescapa ou Wikicampers. Vous gardez un cadre clair, des disponibilités en ligne et une prise en main soignée au départ.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <Button asChild size="lg" className="bg-cream text-forest hover:bg-muted">
              <a href={yescapaUrl} target="_blank" rel="noreferrer">
                Voir sur Yescapa <ArrowRight />
              </a>
            </Button>
            {fleet.map((van) => (
              <Button key={van.name} asChild size="lg" variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
                <a href={van.wikicampersUrl} target="_blank" rel="noreferrer">
                  {van.name} sur Wikicampers <ArrowRight />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Comment réserver</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Choisissez votre van, puis finalisez <em className="italic">sur la plateforme</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Les disponibilités, options d'assurance, paiement et conditions sont confirmés directement sur Yescapa ou Wikicampers.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-border">
            {fleet.map((van) => (
              <article key={van.name} className="bg-muted/10 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-sage">Wikicampers</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{van.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{van.vehicle}</p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                  Accédez au calendrier, aux tarifs actualisés et aux conditions d'assurance de ce van.
                </p>
                <Button asChild className="mt-6 w-full">
                  <a href={van.wikicampersUrl} target="_blank" rel="noreferrer">
                    Ouvrir l'annonce <ArrowRight />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— FAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Les réponses aux questions qui reviennent <em className="italic">avant le départ</em>.
            </h2>
          </div>
          <div className="lg:col-span-8 border-t border-border">
            <Accordion type="single" collapsible>
              {faq.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="text-left text-lg font-serif hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

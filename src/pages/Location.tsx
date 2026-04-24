import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import vanAnnecy from "@/assets/van-annecy.jpg";
import coconNomadeInterieur from "@/assets/cocon-nomade-interieur.jpg";
import echappeeBelleInterieur from "@/assets/echappee-belle-interieur.jpg";

const fleet = [
  {
    name: "Le Cocon Nomade",
    vehicle: "Fiat Talento aménagé",
    tag: "Escapades en duo ou en famille",
    image: coconNomadeInterieur,
    alt: "Intérieur du van Cocon Nomade au coucher du soleil — coin repas et cuisine",
    summary:
      "Un van compact, chaleureux et facile à prendre en main pour les week-ends impro, les lacs alpins et les premières virées vanlife.",
    specs: [
      "2 adultes + 1 enfant max. 10 ans",
      "Lit principal 140 × 200 + couchage cabine enfant",
      "Cuisine équipée, glacière compression, vaisselle complète, réserve eau propre 54 L, ballon eau chaude, robinet douchette extensible, réchaud amovible double feux",
      "Hauteur 2,06 m · permis B · dépassement 0,15 €/km",
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
  { name: "Basse saison", price: "55 €", period: "de novembre à mars", minNights: "2 nuits min." },
  { name: "Moyenne saison", price: "72 €", period: "avril, mai, juin, septembre, octobre", minNights: "2 nuits min." },
  { name: "Haute saison", price: "94 €", period: "juillet - août", minNights: "5 nuits min." },
] as const;

const included = [
  "Assurance multirisques et assistance 24h/24",
  "Vaisselle, batterie de cuisine, cafetière et consommables de base",
  "Couette et oreillers fournis pour chaque couchage",
  "Prise en main complète avant départ depuis Chapeiry / Annecy",
  "Éclairage LED, prises USB, rangements et table de repas",
  "Conseils d'itinéraires lacs, montagnes et spots nuit autour des Alpes",
  "Support propriétaire réactif pendant le séjour",
];

const advantages = [
  {
    title: "Réservation directe valorisée",
    text: "Jusqu'à -15 % par rapport au tarif affiché sur Yescapa, avec un échange direct et des conseils sur mesure avant le départ.",
  },
  {
    title: "Avantage CE / CSE",
    text: "Réduction dédiée pour les salariés via leur comité d'entreprise, sur demande. Cumulable uniquement avec la remise réservation directe.",
  },
  {
    title: "Vans pensés par l'artisan qui les loue",
    text: "Vous partez dans des véhicules que l'on connaît dans le détail : aménagement, entretien, astuces d'usage, tout est maîtrisé.",
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
    a: "L'assurance multirisques Yescapa et l'assistance sont incluses. Le niveau de franchise dépend de la formule choisie au moment de la réservation.",
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
    a: "Les conditions d'annulation suivent la politique de réservation appliquée par Yescapa ou le mode de réservation retenu. Elles sont rappelées au moment du devis.",
  },
  {
    q: "Proposez-vous une remise CE / CSE ?",
    a: "Oui, selon l'organisme. Cette remise est étudiée sur demande et n'est cumulable qu'avec l'offre de réservation directe à -15 %, jamais avec le dégressif longue durée ni l'early booking.",
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
      minPrice: 55,
      maxPrice: 94,
      unitText: "DAY",
    },
    priceValidUntil: "2026-12-31",
  },
}));

const bookingSchema = z.object({
  name: z.string().min(2, "Indiquez votre nom."),
  email: z.string().email("Renseignez un email valide."),
  phone: z.string().min(6, "Renseignez un téléphone valide."),
  van: z.string().min(1, "Choisissez un van."),
  startDate: z.string().min(1, "Choisissez une date de départ."),
  endDate: z.string().min(1, "Choisissez une date de retour."),
  travellers: z.string().min(1, "Indiquez le nombre de voyageurs."),
  cse: z.boolean().default(false),
  message: z.string().min(12, "Ajoutez quelques détails sur votre séjour."),
});

type BookingValues = z.infer<typeof bookingSchema>;

const Location = () => {
  const [sending, setSending] = useState(false);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      van: "",
      startDate: "",
      endDate: "",
      travellers: "",
      cse: false,
      message: "",
    },
  });

  const onSubmit = async (values: BookingValues) => {
    setSending(true);

    const subject = `Demande location van — ${values.van}`;
    const body = [
      `Nom : ${values.name}`,
      `Email : ${values.email}`,
      `Téléphone : ${values.phone}`,
      `Van souhaité : ${values.van}`,
      `Dates : du ${values.startDate} au ${values.endDate}`,
      `Voyageurs : ${values.travellers}`,
      `CE / CSE : ${values.cse ? "Oui" : "Non"}`,
      "",
      "Message :",
      values.message,
    ].join("\n");

    window.location.href = `mailto:contact@signaturevan.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Votre demande est prête à être envoyée.");
    form.reset();
    setSending(false);
  };

  return (
    <>
      <Seo
        title="Location de van à Annecy — tarifs et flotte | Signature Van"
        description="Découvrez nos vans aménagés au départ d'Annecy : flotte, tarifs, kilomètres inclus, avantage CE/CSE et demande de réservation directe."
        path="/location-van-annecy"
        jsonLd={productJsonLd}
      />

      <PageHeader
        eyebrow="Location"
        title={<>Location de vans aménagés <em className="italic">à Annecy</em>.</>}
        intro="Deux vans prêts à partir depuis Chapeiry, pensés pour les week-ends alpins, les micro-aventures et les premières escapades en petite famille."
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
              des kilomètres inclus et une vraie alternative à la réservation plateforme.
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
                  <p className="text-xs uppercase tracking-[0.25em] text-sage">{van.tag}</p>
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
              Une grille simple, pensée pour être <em className="italic">lue en un coup d'œil</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {seasons.map((season) => (
              <article key={season.name} className="border border-border bg-muted/20 p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{season.name}</p>
                <p className="mt-4 font-serif text-5xl leading-none">{season.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{season.period}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.2em] text-sage">par jour</p>
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
              <h3 className="font-serif text-2xl">Remises</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li>-10 % dès 7 jours</li>
                <li>-15 % dès 14 jours</li>
                <li>-20 % dès 21 jours</li>
                <li>Early booking : -5 % à +4 mois</li>
                <li>Réservation directe : -15 % vs Yescapa</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            💼 Salarié avec un CE / CSE ? Une remise complémentaire est possible — précisez-le lors de votre demande.
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
              <img src={vanBedroom} alt="Coin couchage dans un van Signature Van" loading="lazy" className="h-full w-full object-cover" />
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
            <p className="text-xs uppercase tracking-[0.3em] text-sage-light mb-4">— Réservation hybride</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Réserver en direct quand c'est possible, garder Yescapa comme <em className="italic">point d'appui</em>.
            </h2>
            <p className="mt-6 text-cream/75 text-lg leading-relaxed max-w-3xl">
              Si vos dates sont définies, la réservation directe reste la meilleure option pour bénéficier de l'échange le plus fluide
              et de l'avantage tarifaire de -15 % par rapport à la plateforme. Yescapa reste disponible comme alternative de réservation.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <Button asChild size="lg" className="bg-cream text-forest hover:bg-muted">
              <Link to="/contact">Demander une réservation directe</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
              <a href="https://www.yescapa.fr/campers/113054?date_from=2026-05-15&date_to=2026-05-18&hour_from=14&hour_to=12" target="_blank" rel="noreferrer">
                Voir les annonces Yescapa <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Demande de réservation</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Racontez-nous votre <em className="italic">prochain départ</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              En quelques infos, on peut vous orienter vers le bon van, vérifier les disponibilités et intégrer votre avantage CE / CSE si besoin.
            </p>
          </div>

          <div className="lg:col-span-8 border border-border p-6 md:p-8 bg-muted/10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="vous@email.fr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="06 00 00 00 00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="van"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Van souhaité</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choisir un van" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Le Cocon Nomade">Le Cocon Nomade</SelectItem>
                            <SelectItem value="L'Échappée Belle">L'Échappée Belle</SelectItem>
                            <SelectItem value="Je ne sais pas encore">Je ne sais pas encore</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date de départ</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date de retour</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="travellers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Voyageurs</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex. 2 adultes + 1 enfant" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Dates souples, destination envisagée, âge de l'enfant, besoin CE / CSE, questions sur les équipements..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Plus votre demande est précise, plus le retour sera utile.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cse"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-md border border-border p-4 bg-background">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(Boolean(checked))} />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel>Je dispose d'un CE / CSE</FormLabel>
                        <FormDescription>
                          Précisez le nom de l'organisme dans votre message pour que l'on regarde la remise possible.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={sending}>
                  {sending ? "Préparation…" : "Préparer mon email de réservation"}
                </Button>
              </form>
            </Form>
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

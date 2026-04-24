import { Link } from "react-router-dom";
import { Check, Sun, Droplet, Flame, Battery, ShowerHead, Compass } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import vanAnnecy from "@/assets/van-annecy.jpg";
import vanBedroom from "@/assets/van-bedroom.jpg";
import vanKitchen from "@/assets/van-kitchen.jpg";

const inclus = [
  { icon: Sun, label: "Énergie solaire", value: "Panneau solaire toit, régulateur MPPT, batterie lithium haute capacité — autonomie électrique multi-jours." },
  { icon: Battery, label: "Batterie lithium", value: "Stockage lithium longue durée, chargeur DC/DC, gestion intelligente — recharge en roulant ou au soleil." },
  { icon: Droplet, label: "Circuit d'eau complet", value: "Réservoir eau propre, eaux grises, pompe, chauffe-eau électrique ou gaz — eau chaude en permanence." },
  { icon: Flame, label: "Chauffage stationnaire", value: "Chauffage diesel ou essence, programmable — pour vivre dans le van en hiver, à la montagne." },
  { icon: ShowerHead, label: "Douche & WC sec", value: "Douche intérieure ou extérieure, WC sec en option — autonomie sanitaire totale, hors-réseau." },
  { icon: Compass, label: "Hors-réseau prolongé", value: "Pensé pour vivre 1, 2, 3 semaines sans branchement extérieur — partout en Europe." },
];

const FormuleLiberte = () => {
  return (
    <>
      <Seo
        title="Formule Liberté — Aménagement van autonome | Signature Van Annecy"
        description="Formule Liberté : aménagement van complet pensé pour l'autonomie longue durée. Solaire, lithium, chauffage, douche. À partir de 19 900 €. Atelier à Annecy, Haute-Savoie."
        path="/formule-liberte"
      />
      <PageHeader
        eyebrow="Formule Liberté"
        title={<>Pour partir <em className="italic">loin, longtemps, partout</em>.</>}
        intro="L'aménagement complet pensé pour l'autonomie : eau chaude, énergie solaire, chauffage, douche. Tout pour vivre en van plusieurs semaines, hors-réseau, dans n'importe quelle saison."
      />

      {/* Hero visuel + prix */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={vanAnnecy}
                  alt="Formule Liberté — van aménagé pour l'autonomie longue durée — Signature Van Annecy"
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1440}
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Tarif Formule Liberté</p>
              <p className="font-serif text-5xl md:text-6xl leading-none">À partir de 19 900 €</p>
              <p className="mt-3 text-sm text-muted-foreground">
                TTC, hors véhicule. Devis personnalisé selon le niveau d'autonomie souhaité.
              </p>

              <div className="mt-10 pt-10 border-t border-border">
                <p className="text-xs uppercase tracking-[0.25em] text-sage mb-4">L'esprit Liberté</p>
                <ul className="space-y-2 text-sm text-foreground/85">
                  <li className="flex items-start gap-3"><Check size={16} className="text-sage mt-0.5 shrink-0" strokeWidth={2} /><span>Tout l'équipement Confort, en plus complet</span></li>
                  <li className="flex items-start gap-3"><Check size={16} className="text-sage mt-0.5 shrink-0" strokeWidth={2} /><span>Énergie & eau dimensionnées pour le voyage</span></li>
                  <li className="flex items-start gap-3"><Check size={16} className="text-sage mt-0.5 shrink-0" strokeWidth={2} /><span>Chauffage pour vivre l'hiver à la montagne</span></li>
                  <li className="flex items-start gap-3"><Check size={16} className="text-sage mt-0.5 shrink-0" strokeWidth={2} /><span>Compatible véhicules L2H2 et grand volume</span></li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie placeholder (en attendant photos dédiées) */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <figure className="overflow-hidden bg-muted">
              <div className="aspect-[4/3]">
                <img src={vanBedroom} alt="Couchage van aménagé pour l'autonomie — Signature Van" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <figure className="overflow-hidden bg-muted">
              <div className="aspect-[4/3]">
                <img src={vanKitchen} alt="Cuisine van complète avec eau chaude — Formule Liberté" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
          </div>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            — Premier van Formule Liberté en cours d'aménagement à l'atelier
          </p>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Équipements clés</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Le van, comme une <em className="italic">vraie maison nomade</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              La Formule Liberté ajoute à l'aménagement Confort tout ce qui rend le van
              véritablement autonome : énergie, eau chaude, chauffage, sanitaires.
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            On en discute <em className="italic">à l'atelier</em> ?
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed">
            Chaque Formule Liberté est calibrée selon votre véhicule et votre projet de voyage.
            Premier échange sans engagement à Chapeiry.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center bg-cream text-forest px-8 py-4 text-sm tracking-wide hover:bg-sand transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
};

export default FormuleLiberte;

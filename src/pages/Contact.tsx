import { useState } from "react";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

type ProjectType = "amenagement" | "location" | "cse" | "autre";

const Contact = () => {
  const [type, setType] = useState<ProjectType>("amenagement");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Merci ! Nous revenons vers vous sous 48 heures.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <>
      <Seo
        title="Contact — Aménagement et location de van à Annecy | Signature Van"
        description="Contactez Signature Van à Chapeiry (Annecy, Haute-Savoie) pour un aménagement sur mesure, une location de van ou un partenariat CSE. Réponse sous 48h."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title={<>Contactez <em className="italic">Signature Van</em>.</>}
        intro="Aménagement, location ou partenariat CSE — décrivez votre projet en quelques mots, on revient vers vous sous 48 heures. Premier échange toujours sans engagement."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="space-y-8 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Atelier</p>
                <p className="text-foreground text-base">
                  Signature Van<br />
                  74540 Chapeiry<br />
                  Haute-Savoie (à 15 min d'Annecy)
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Email</p>
                <a href="mailto:contact@signaturevan.fr" className="text-foreground text-base hover:text-sage transition-colors">
                  contact@signaturevan.fr
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Téléphone</p>
                <a href="tel:+33600000000" className="text-foreground text-base hover:text-sage transition-colors">
                  +33 6 00 00 00 00
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Du lundi au vendredi, 9h–18h</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Contact CSE</p>
                <a href="mailto:cse@signaturevan.fr" className="text-foreground text-base hover:text-sage transition-colors">
                  cse@signaturevan.fr
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Pour les responsables comité d'entreprise</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-muted/60 border-l-2 border-sage">
              <p className="font-serif text-xl">Premier échange toujours sans engagement.</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Que vous ayez un projet précis ou juste une idée, on prend le temps de discuter —
                à l'atelier autour d'un café, en visio ou par téléphone.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border-b border-border pb-3">
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Nom *
                </label>
                <input id="name" name="name" type="text" required
                  className="w-full bg-transparent outline-none text-foreground"
                />
              </div>
              <div className="border-b border-border pb-3">
                <label htmlFor="phone" className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Téléphone
                </label>
                <input id="phone" name="phone" type="tel"
                  className="w-full bg-transparent outline-none text-foreground"
                />
              </div>
            </div>

            <div className="border-b border-border pb-3">
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Email *
              </label>
              <input id="email" name="email" type="email" required
                className="w-full bg-transparent outline-none text-foreground"
              />
            </div>

            <fieldset>
              <legend className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Type de projet *
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {([
                  { v: "amenagement", l: "Aménagement" },
                  { v: "location", l: "Location" },
                  { v: "cse", l: "Partenariat CSE" },
                  { v: "autre", l: "Autre" },
                ] as { v: ProjectType; l: string }[]).map((opt) => (
                  <label key={opt.v} className={`cursor-pointer text-center text-sm py-3 border transition-colors ${
                    type === opt.v
                      ? "bg-forest text-cream border-forest"
                      : "border-border hover:border-foreground/40"
                  }`}>
                    <input
                      type="radio"
                      name="type"
                      value={opt.v}
                      checked={type === opt.v}
                      onChange={() => setType(opt.v)}
                      className="sr-only"
                    />
                    {opt.l}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="border-b border-border pb-3">
              <label htmlFor="msg" className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Votre projet *
              </label>
              <textarea id="msg" name="message" rows={5} required
                className="w-full bg-transparent outline-none resize-none text-foreground"
                placeholder="Véhicule, usages prévus, dates de location, taille de l'entreprise pour un partenariat CSE…"
              />
            </div>

            <p className="text-xs text-muted-foreground">
              En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour répondre à votre demande.
              Voir notre <a href="/confidentialite" className="underline hover:text-foreground">politique de confidentialité</a>.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors disabled:opacity-60"
            >
              {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

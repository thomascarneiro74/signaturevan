import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact — Aménagement et location de van à Annecy | Signature Van"
        description="Contactez Signature Van à Chapeiry (Annecy, Haute-Savoie) pour un aménagement sur mesure ou une location de van. Réponse sous 48h."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title={<>Contactez <em className="italic">Signature Van</em>.</>}
        intro="Aménagement ou location — écrivez-nous directement par email ou appelez-nous. On revient vers vous sous 48 heures, premier échange toujours sans engagement."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Écrivez-nous</p>
            <a
              href="mailto:signature.van@gmail.com"
              className="font-serif text-3xl md:text-5xl text-foreground hover:text-sage transition-colors break-words"
            >
              signature.van@gmail.com
            </a>
            <div className="mt-10">
              <a
                href="mailto:signature.van@gmail.com"
                className="inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors"
              >
                Écrire un email
              </a>
            </div>
          </div>

          <div className="mt-20 grid sm:grid-cols-3 gap-10 text-sm border-t border-border pt-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Téléphone</p>
              <a href="tel:+33760421804" className="text-foreground text-base hover:text-sage transition-colors">
                +33 7 60 42 18 04
              </a>
              <p className="mt-1 text-xs text-muted-foreground">Lun–ven, 9h–18h</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Atelier</p>
              <p className="text-foreground text-base">
                74540 Chapeiry<br />
                Haute-Savoie (15 min d'Annecy)
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/signature.van"
                target="_blank"
                rel="noreferrer"
                className="text-foreground text-base hover:text-sage transition-colors"
              >
                @signature.van
              </a>
            </div>
          </div>

          <div className="mt-16 p-6 bg-muted/60 border-l-2 border-sage">
            <p className="font-serif text-xl">Premier échange toujours sans engagement.</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Que vous ayez un projet précis ou juste une idée, on prend le temps de discuter —
              à l'atelier autour d'un café, en visio ou par téléphone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

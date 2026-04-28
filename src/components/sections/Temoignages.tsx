import { useState } from "react";

const quotes = [
  {
    q: "Nous avons confié l'aménagement complet de notre van à Signature Van et nous sommes vraiment très satisfaits du résultat. Thomas a pris le temps de comprendre notre façon de voyager et a tout conçu sur mesure : isolation, habillage, mobilier très bien pensé et surtout pratique, avec de nombreux rangements. Les finitions en bois sont soignées, rien ne bouge sur la route et l'espace est agréable à vivre au quotidien. Communication claire, délais respectés, et un van rendu prêt à partir. Nous recommandons sans hésiter.",
    excerpt:
      "Thomas a pris le temps de comprendre notre façon de voyager et a tout conçu sur mesure. Les finitions sont soignées, rien ne bouge sur la route.",
    a: "Noémie DURIER",
    p: "Avis Google · 5 étoiles · Aménagement complet",
  },
  {
    q: "Nous avons fait appel à Van Signature pour la pose d'une ouverture (baie coulissante) sur notre fourgon. Travail très sérieux, finition propre. Thomas a tout expliqué, a respecté les délais et il a trouvé des solutions adaptées à notre van. Artisan à l'écoute, basé près d'Annecy (Haute-Savoie), que je recommande pour l'aménagement ou les modifications de van.",
    excerpt:
      "Travail très sérieux, finition propre. Thomas a tout expliqué, a respecté les délais et trouvé des solutions adaptées à notre van.",
    a: "Olivier TARDY",
    p: "Avis Google · 5 étoiles · Prestation à la carte",
  },
  {
    q: "Super expérience avec Thomas de Signature Van ! Très pro, nous avions loué son van pour un petit séjour de quelques jours en famille et nous sommes ravis. Le van était très propre, bien aménagé, très pratique et Thomas a été super arrangeant avec nous. À très vite j'espère !",
    excerpt:
      "Super expérience avec Thomas de Signature Van ! Très pro, nous avions loué son van pour un petit séjour de quelques jours en famille et nous sommes ravis.",
    a: "Christophe Havard",
    p: "Avis Google · 5 étoiles · Location de van",
  },
];

export const Temoignages = () => {
  const [openQuotes, setOpenQuotes] = useState<string[]>([]);

  const toggleQuote = (author: string) => {
    setOpenQuotes((current) =>
      current.includes(author)
        ? current.filter((item) => item !== author)
        : [...current, author],
    );
  };

  return (
    <section className="py-24 md:py-36 bg-sand">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-forest mb-16 text-center">
          — Ce qu'ils en disent
        </p>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {quotes.map((t) => {
            const isOpen = openQuotes.includes(t.a);

            return (
            <blockquote key={t.a} className="flex flex-col">
              <p className="font-serif text-2xl leading-[1.35] text-foreground text-balance">
                « {isOpen ? t.q : t.excerpt} »
              </p>
              <button
                type="button"
                onClick={() => toggleQuote(t.a)}
                className="mt-5 w-fit text-xs uppercase tracking-[0.22em] text-forest transition-colors hover:text-foreground"
              >
                {isOpen ? "Réduire" : "Lire la suite"}
              </button>
              <footer className="mt-8 pt-6 border-t border-foreground/15">
                <p className="text-sm font-medium text-foreground">{t.a}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {t.p}
                </p>
              </footer>
            </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};

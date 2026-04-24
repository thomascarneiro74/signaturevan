const quotes = [
  {
    q: "Un travail d'orfèvre. Chaque détail a été pensé pour la vie sur la route, sans jamais sacrifier l'esthétique.",
    a: "Camille & Léo",
    p: "Sprinter Borealis — 2024",
  },
  {
    q: "Six mois sur les routes d'Europe, et tout fonctionne encore comme au premier jour. Une vraie maison nomade.",
    a: "Sophie M.",
    p: "Crafter Refuge — 2023",
  },
];

export const Temoignages = () => {
  return (
    <section className="py-24 md:py-36 bg-sand">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-forest mb-16 text-center">
          — Ce qu'ils en disent
        </p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
          {quotes.map((t) => (
            <blockquote key={t.a} className="flex flex-col">
              <p className="font-serif text-2xl md:text-3xl leading-[1.3] text-foreground text-balance">
                « {t.q} »
              </p>
              <footer className="mt-8 pt-6 border-t border-foreground/15">
                <p className="text-sm font-medium text-foreground">{t.a}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {t.p}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

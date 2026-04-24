const services = [
  {
    n: "01",
    title: "Aménagement complet",
    desc: "De l'isolation à la finition, un projet clé en main pensé pour vivre durablement à bord.",
    items: ["Isolation liège & laine", "Mobilier sur-mesure", "Électricité solaire"],
  },
  {
    n: "02",
    title: "Conception sur-mesure",
    desc: "Chaque plan est dessiné selon votre usage, vos trajets et votre manière d'habiter le van.",
    items: ["Plans 3D", "Choix des matériaux", "Ergonomie & rangements"],
  },
  {
    n: "03",
    title: "Restauration & upgrade",
    desc: "Redonner vie à un van existant, optimiser un aménagement ancien, retoucher des finitions.",
    items: ["Diagnostic atelier", "Pièces sur-mesure", "Réfection mobilier"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-muted/40">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
            — 02 / Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Trois manières de <em className="italic">façonner</em> votre van.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article
              key={s.n}
              className="group bg-background p-8 md:p-10 lg:p-12 hover:bg-card transition-colors duration-500"
            >
              <p className="font-serif text-sage text-2xl">{s.n}</p>
              <h3 className="font-serif text-3xl md:text-4xl mt-6 leading-tight">
                {s.title}
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/80 flex items-center gap-3"
                  >
                    <span className="h-px w-4 bg-sage" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

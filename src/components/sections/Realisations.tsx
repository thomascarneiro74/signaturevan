import van1 from "@/assets/van-exterior.jpg";
import van2 from "@/assets/van-kitchen.jpg";
import van3 from "@/assets/van-bedroom.jpg";

const projects = [
  {
    img: van1,
    title: "Mercedes Sprinter — « Borealis »",
    place: "Vosges, 2024",
    tag: "Aménagement complet",
    span: "md:col-span-7",
    ratio: "aspect-[4/3]",
  },
  {
    img: van2,
    title: "Cuisine intégrée — « Nordica »",
    place: "Bretagne, 2024",
    tag: "Sur-mesure",
    span: "md:col-span-5",
    ratio: "aspect-[3/4]",
  },
  {
    img: van3,
    title: "Cellule nuit — « Refuge »",
    place: "Pyrénées, 2023",
    tag: "Restauration",
    span: "md:col-span-12",
    ratio: "aspect-[16/9]",
  },
];

export const Realisations = () => {
  return (
    <section id="realisations" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
              — 03 / Réalisations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Quelques <em className="italic">histoires</em> sur roues.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm border-b border-foreground/40 pb-1 hover:border-foreground transition-colors self-start md:self-end"
          >
            Voir le portfolio complet →
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p) => (
            <figure key={p.title} className={`${p.span} group`}>
              <div className={`${p.ratio} overflow-hidden bg-muted`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-[1800ms]"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-tight">
                    {p.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{p.place}</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-sage shrink-0">
                  {p.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

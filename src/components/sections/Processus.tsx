const steps = [
  {
    n: "I",
    title: "Rencontre",
    desc: "Un échange à l'atelier ou en visio pour comprendre vos usages, vos envies et votre van.",
  },
  {
    n: "II",
    title: "Conception",
    desc: "Plans 2D et perspectives 3D, choix des essences de bois, des tissus et des finitions.",
  },
  {
    n: "III",
    title: "Fabrication",
    desc: "Six à huit semaines en atelier — menuiserie, électricité, plomberie, finitions main.",
  },
  {
    n: "IV",
    title: "Livraison",
    desc: "Remise des clés et accompagnement complet pour prendre en main votre nouveau van.",
  },
];

export const Processus = () => {
  return (
    <section id="processus" className="py-24 md:py-36 bg-forest text-cream">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-light mb-6">
            — 04 / Processus
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Quatre étapes, <em className="italic">un seul artisan</em>.
          </h2>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed">
            De la première idée jusqu'à la remise des clés, vous échangez
            avec un seul interlocuteur. Tout est fait dans notre atelier.
          </p>
        </div>

        <ol className="grid md:grid-cols-4 gap-px bg-cream/15">
          {steps.map((s) => (
            <li
              key={s.n}
              className="bg-forest p-8 md:p-10 hover:bg-forest-deep transition-colors duration-500"
            >
              <p className="font-serif text-sage-light text-3xl">{s.n}</p>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 text-cream">
                {s.title}
              </h3>
              <p className="mt-4 text-cream/70 text-sm leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

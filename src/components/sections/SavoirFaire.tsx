import craftImage from "@/assets/thomas-atelier.jpg";

export const SavoirFaire = () => {
  return (
    <section id="savoir-faire" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={craftImage}
              alt="Thomas au rabot dans son atelier d'aménagement de vans"
              loading="lazy"
              width={1080}
              height={1350}
              className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-[2000ms]"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
            — 01 / Notre atelier
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Un savoir-faire <em className="italic">artisanal</em>,
            pensé pour la route.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-lg">
            Nos bois sont sélectionnés auprès de filières responsables,
            avec des essences certifiées et autant que possible locales.
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {[
              { v: "5", l: "vans aménagés" },
              { v: "5 semaines", l: "de fabrication" },
              { v: "5 ans", l: "de garantie" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl md:text-4xl text-foreground">
                  {s.v}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

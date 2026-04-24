import heroImage from "@/assets/hero-van.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Intérieur d'un van aménagé sur-mesure par Signature Van"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-3xl animate-drift-up">
          <p className="text-cream/80 text-xs uppercase tracking-[0.4em] mb-6">
            — Atelier d'aménagement, depuis 2018
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            Le van, repensé <em className="italic font-serif">comme un refuge.</em>
          </h1>
          <p className="text-cream/85 text-lg md:text-xl mt-8 max-w-xl font-light leading-relaxed">
            Signature Van conçoit et fabrique des aménagements sur-mesure,
            pensés pour durer et vivre au plus près de la nature.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center bg-cream text-forest px-7 py-4 text-sm tracking-wide hover:bg-sand transition-colors"
            >
              Concevoir mon van
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center text-cream/90 text-sm tracking-wide border-b border-cream/40 pb-1 hover:border-cream transition-colors"
            >
              Voir nos réalisations →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-3 text-cream/70 text-xs">
        <span className="h-px w-12 bg-cream/40" />
        <span className="uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
};

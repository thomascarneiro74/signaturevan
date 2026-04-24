import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-van.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aménagement de van sur mesure réalisé par Signature Van à Annecy"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-3xl animate-drift-up">
          <p className="text-cream/80 text-xs uppercase tracking-[0.4em] mb-6">
            — Artisan ébéniste · Chapeiry, Annecy (74)
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            Aménagement et location de vans <em className="italic font-serif">sur mesure</em> à Annecy.
          </h1>
          <p className="text-cream/85 text-lg md:text-xl mt-8 max-w-xl font-light leading-relaxed">
            Un travail d'ébéniste, des matériaux nobles et des vans pensés
            pour la vraie vie en Haute-Savoie — montagne, lac et grands départs.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-cream text-forest px-7 py-4 text-sm tracking-wide hover:bg-sand transition-colors"
            >
              Parler de mon projet d'aménagement
            </Link>
            <Link
              to="/location-van-annecy"
              className="inline-flex items-center text-cream border border-cream/40 px-7 py-4 text-sm tracking-wide hover:bg-cream/10 transition-colors"
            >
              Découvrir la location
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-cream/80 py-16">
      <div className="container mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-serif text-4xl md:text-5xl text-cream leading-tight">
            Signature <em className="italic">Van</em>
          </p>
          <p className="mt-4 text-cream/60 max-w-sm text-sm leading-relaxed">
            Atelier d'aménagement et location de vans sur mesure.
            Chapeiry, près d'Annecy — Haute-Savoie.
          </p>
          <address className="mt-6 not-italic text-sm text-cream/70 space-y-1">
            <p>Atelier Signature Van</p>
            <p>74540 Chapeiry, Haute-Savoie</p>
            <p>contact@signaturevan.fr</p>
            <p>+33 6 00 00 00 00</p>
          </address>
        </div>

        <nav className="md:col-span-3 md:col-start-7 flex flex-col gap-3 text-sm" aria-label="Navigation">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-2">Site</p>
          <Link to="/" className="hover:text-cream transition-colors">Accueil</Link>
          <Link to="/services" className="hover:text-cream transition-colors">Services</Link>
          <Link to="/location-van-annecy" className="hover:text-cream transition-colors">Location de van</Link>
          <Link to="/realisations" className="hover:text-cream transition-colors">Réalisations</Link>
          <Link to="/a-propos" className="hover:text-cream transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-cream transition-colors">Contact</Link>
        </nav>

        <div className="md:col-span-3 flex flex-col gap-3 text-sm">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-2">Suivez-nous</p>
          <a href="#" className="hover:text-cream transition-colors">Instagram</a>
          <a href="#" className="hover:text-cream transition-colors">Pinterest</a>
          <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-2 mt-6">Légal</p>
          <Link to="/mentions-legales" className="hover:text-cream transition-colors">Mentions légales</Link>
          <Link to="/confidentialite" className="hover:text-cream transition-colors">Confidentialité</Link>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Signature Van — Artisan aménageur de vans à Annecy</p>
        <p>Made with care in Haute-Savoie.</p>
      </div>
    </footer>
  );
};

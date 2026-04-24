export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-cream/80 py-16">
      <div className="container mx-auto grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-6">
          <p className="font-serif text-4xl md:text-5xl text-cream leading-tight">
            Signature <em className="italic">Van</em>
          </p>
          <p className="mt-4 text-cream/60 max-w-sm">
            Atelier d'aménagement de vans sur-mesure. Made in France.
          </p>
        </div>
        <nav className="md:col-span-3 flex flex-col gap-3 text-sm">
          <a href="#savoir-faire" className="hover:text-cream transition-colors">Savoir-faire</a>
          <a href="#services" className="hover:text-cream transition-colors">Services</a>
          <a href="#realisations" className="hover:text-cream transition-colors">Réalisations</a>
          <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
        </nav>
        <div className="md:col-span-3 flex flex-col gap-3 text-sm">
          <a href="#" className="hover:text-cream transition-colors">Instagram</a>
          <a href="#" className="hover:text-cream transition-colors">Pinterest</a>
          <a href="#" className="hover:text-cream transition-colors">Newsletter</a>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Signature Van — Tous droits réservés</p>
        <p>Mentions légales · Politique de confidentialité</p>
      </div>
    </footer>
  );
};

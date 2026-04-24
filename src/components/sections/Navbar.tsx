import { useEffect, useState } from "react";

const links = [
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#processus", label: "Processus" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Signature
          </span>
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">
            Van
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Démarrer un projet
        </a>
      </div>
    </header>
  );
};

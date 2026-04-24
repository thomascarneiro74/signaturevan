import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/location-van-annecy", label: "Location" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;
  const logoSrc = transparent ? logoLight : logoDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="flex items-center" aria-label="Retour à l'accueil Signature Van">
          <img
            src={logoSrc}
            alt="Signature Van"
            className="h-9 md:h-10 w-auto object-contain"
            loading="eager"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  transparent
                    ? "text-cream/85 hover:text-cream"
                    : "text-foreground/70 hover:text-foreground"
                } ${isActive ? "!text-foreground !font-medium" : ""} ${
                  isActive && transparent ? "!text-cream" : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center text-sm border px-5 py-2.5 transition-colors ${
            transparent
              ? "border-cream/40 text-cream hover:bg-cream hover:text-forest"
              : "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
          }`}
        >
          Démarrer un projet
        </Link>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden p-2 -mr-2 ${
            transparent ? "text-cream" : "text-foreground"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col py-6 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `py-3 text-base ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-foreground/70"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center bg-forest text-cream px-5 py-3 text-sm"
            >
              Démarrer un projet
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

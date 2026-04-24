export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
            — 05 / Contact
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
            Parlons de votre <em className="italic">prochain</em> van.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-md">
            Décrivez votre projet en quelques mots — nous revenons vers vous
            sous 48&nbsp;heures avec une première proposition.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Atelier</p>
              <p className="mt-2 text-foreground">12 chemin des Charpentiers, 38000 Grenoble</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
              <p className="mt-2 text-foreground">bonjour@signaturevan.fr</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Téléphone</p>
              <p className="mt-2 text-foreground">+33 4 76 00 00 00</p>
            </div>
          </div>
        </div>

        <form
          className="md:col-span-6 md:col-start-8 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { id: "name", label: "Nom", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "vehicle", label: "Type de véhicule", type: "text" },
          ].map((f) => (
            <div key={f.id} className="border-b border-border pb-3">
              <label
                htmlFor={f.id}
                className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
                placeholder=" "
              />
            </div>
          ))}
          <div className="border-b border-border pb-3">
            <label
              htmlFor="msg"
              className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2"
            >
              Votre projet
            </label>
            <textarea
              id="msg"
              rows={4}
              className="w-full bg-transparent outline-none resize-none text-foreground placeholder:text-muted-foreground/50"
              placeholder=" "
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center bg-forest text-cream px-8 py-4 text-sm tracking-wide hover:bg-forest-deep transition-colors"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
};

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}

export const PageHeader = ({ eyebrow, title, intro }: PageHeaderProps) => {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-gradient-warm border-b border-border/60">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6">
          — {eyebrow}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
};

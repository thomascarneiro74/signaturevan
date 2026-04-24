import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import artisan from "@/assets/thomas-portrait.jpg";

const About = () => {
  return (
    <>
      <Seo
        title="À propos — artisan ébéniste aménageur de vans à Annecy | Signature Van"
        description="Signature Van, c'est l'histoire d'une reconversion : ancien infirmier devenu ébéniste, originaire de Normandie et installé à Chapeiry près d'Annecy, j'aménage des vans pensés pour la vraie vie à bord."
        path="/a-propos"
      />
      <PageHeader
        eyebrow="À propos"
        title={<>À propos de <em className="italic">Signature Van</em>.</>}
        intro="Une histoire de reconversion, de bois et de voyage — racontée depuis l'atelier de Chapeiry."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden sticky top-28">
              <img
                src={artisan}
                alt="Thomas Carneiro, artisan ébéniste aménageur de vans à Chapeiry près d'Annecy"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Mon parcours</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                D'infirmier à ébéniste, puis au van.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Pendant dix ans, j'ai exercé comme infirmier. Un métier qui m'a appris l'écoute, la précision
                et l'attention au détail — des qualités que je mets aujourd'hui au service du travail du bois
                et de l'aménagement de vans.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                En 2022, j'ai entamé une reconversion en ébénisterie et j'ai très vite trouvé un univers
                qui rassemblait tout ce que j'aime : l'artisanat, la nature et le voyage en van.
                L'aménagement de vans s'est imposé comme une évidence.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Je voyage moi-même en van depuis plusieurs années, été comme hiver. Cette expérience
                personnelle me permet de bien connaître les vrais besoins à bord : circulation, rangements,
                confort de couchage, isolation, lumières, petits détails qui changent tout au quotidien.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Ma manière de travailler</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Du temps, du bois et beaucoup d'écoute.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Chaque projet commence par un échange. Comprendre votre van, vos voyages, votre rythme
                de vie et vos envies. Puis viennent les plans, le choix des essences, des tissus,
                des stratifiés… Et enfin la fabrication, dans mon atelier, étape par étape, sans précipitation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La base de mes meubles est en contreplaqué pour gagner en légèreté. Les faces visibles
                sont en stratifié pour la résistance au quotidien, et j'apporte des touches de bois massif
                (chêne, frêne, noyer…), avec des finitions adaptées (vernis pour les plans de travail,
                protections là où il faut).
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                L'objectif : un aménagement solide, pratique et agréable à vivre, qui reste beau dans le temps.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">— Mon ancrage</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                De la Normandie à la Haute-Savoie.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Originaire de Normandie, je me suis installé en Haute-Savoie en 2012 et je suis littéralement
                tombé amoureux de cette région. L'atelier Signature Van est à Chapeiry, à 15 minutes
                au sud d'Annecy.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Je conçois des aménagements pensés pour la vraie vie en van, quels que soient vos projets :
                road trips en solo avec un vélo dans la soute, voyages en couple, vacances en famille
                ou usage mixte pro / perso.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                L'idée, à chaque fois, est de créer un van :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 marker:text-secondary">
                <li>robuste, qui supporte les années d'usage,</li>
                <li>simple et efficace, sans gadgets inutiles,</li>
                <li>
                  adapté à votre manière de voyager : rangement du matériel (sport, travail, enfants),
                  circulation à bord, couchage confortable, gestion de l'humidité et de la lumière.
                </li>
              </ul>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Travailler avec moi, c'est :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 marker:text-secondary">
                <li>rencontrer l'artisan qui va s'occuper de votre véhicule,</li>
                <li>suivre votre projet d'aménagement du premier croquis à la dernière vis,</li>
                <li>
                  bénéficier de l'expérience de quelqu'un qui utilise lui-même un van et sait ce que
                  cela demande au quotidien.
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-border">
              <Link to="/contact" className="inline-flex items-center text-sm border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                Venir échanger à l'atelier →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

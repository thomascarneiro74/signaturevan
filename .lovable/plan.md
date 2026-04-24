## Réécriture complète du contenu de la page À propos

Modifications uniquement textuelles dans `src/pages/About.tsx`. Image, structure visuelle (grille 5/7 cols, sticky photo, espacements, CTA final) et balise `Seo` conservés tels quels — sauf la `description` SEO mise à jour pour rester cohérente.

### Section 1 — « Mon parcours »

**Titre** : `D'infirmier à ébéniste, puis au van.` (au lieu de « jusqu'au van »)

**Contenu** : remplacer les 2 paragraphes actuels par 3 paragraphes :

1. Pendant dix ans, j'ai exercé comme infirmier. Un métier qui m'a appris l'écoute, la précision et l'attention au détail — des qualités que je mets aujourd'hui au service du travail du bois et de l'aménagement de vans.
2. En 2022, j'ai entamé une reconversion en ébénisterie et j'ai très vite trouvé un univers qui rassemblait tout ce que j'aime : l'artisanat, la nature et le voyage en van. L'aménagement de vans s'est imposé comme une évidence.
3. Je voyage moi-même en van depuis plusieurs années, été comme hiver. Cette expérience personnelle me permet de bien connaître les vrais besoins à bord : circulation, rangements, confort de couchage, isolation, lumières, petits détails qui changent tout au quotidien.

(Date : 2020 → **2022**, ajout d'un 3ᵉ paragraphe.)

### Section 2 — « Ma manière de travailler »

**Titre conservé** : `Du temps, du bois et beaucoup d'écoute.`

**Contenu** : remplacer par 3 paragraphes :

1. Chaque projet commence par un échange. Comprendre votre van, vos voyages, votre rythme de vie et vos envies. Puis viennent les plans, le choix des essences, des tissus, des stratifiés… Et enfin la fabrication, dans mon atelier, étape par étape, sans précipitation.
2. La base de mes meubles est en contreplaqué pour gagner en légèreté. Les faces visibles sont en stratifié pour la résistance au quotidien, et j'apporte des touches de bois massif (chêne, frêne, noyer…), avec des finitions adaptées (vernis pour les plans de travail, protections là où il faut).
3. L'objectif : un aménagement solide, pratique et agréable à vivre, qui reste beau dans le temps.

(On retire la mention « bois massif + huile naturelle » au profit de la nouvelle approche contreplaqué + stratifié + touches de massif.)

### Section 3 — « Mon ancrage »

**Nouveau titre** : `De la Normandie à la Haute-Savoie.` (l'ancien titre « Chapeiry, Annecy, les Alpes » ne reflète plus le nouveau texte qui parle de la Normandie d'origine)

**Structure proposée** : 2 paragraphes d'intro puis 2 mini-blocs avec listes à puces, dans un style éditorial sobre cohérent avec le reste du site.

1. Paragraphe : Originaire de Normandie, je me suis installé en Haute-Savoie en 2012 et je suis littéralement tombé amoureux de cette région. L'atelier Signature Van est à Chapeiry, à 15 minutes au sud d'Annecy.
2. Paragraphe : Je conçois des aménagements pensés pour la vraie vie en van, quels que soient vos projets : road trips en solo avec un vélo dans la soute, voyages en couple, vacances en famille ou usage mixte pro / perso.
3. Bloc liste #1 — intro : « L'idée, à chaque fois, est de créer un van : »
   - robuste, qui supporte les années d'usage,
   - simple et efficace, sans gadgets inutiles,
   - adapté à votre manière de voyager : rangement du matériel (sport, travail, enfants), circulation à bord, couchage confortable, gestion de l'humidité et de la lumière.
4. Bloc liste #2 — intro : « Travailler avec moi, c'est : »
   - rencontrer l'artisan qui va s'occuper de votre véhicule,
   - suivre votre projet d'aménagement du premier croquis à la dernière vis,
   - bénéficier de l'expérience de quelqu'un qui utilise lui-même un van et sait ce que cela demande au quotidien.

### Bloc CTA final
Conservé : lien « Venir échanger à l'atelier → » vers `/contact`.

### SEO — balise `<Seo />`
- `title` inchangé.
- `description` mise à jour : « Signature Van, c'est l'histoire d'une reconversion : ancien infirmier devenu ébéniste, originaire de Normandie et installé à Chapeiry près d'Annecy, j'aménage des vans pensés pour la vraie vie à bord. »

---

### Détails techniques (un seul fichier touché)
- Fichier : `src/pages/About.tsx`.
- Listes à puces : `<ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 marker:text-secondary">` pour rester sobre.
- Petite intro de chaque liste : `<p className="mt-6 text-muted-foreground leading-relaxed">…</p>`.
- Aucun nouveau composant, aucun changement de styles globaux, aucune modif d'image ni de grille.

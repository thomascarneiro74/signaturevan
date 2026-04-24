
# Plan d'exécution — Logo Signature Van + Page Location complète

## 🎨 Identité (inchangée — verrouillé)
- Typo : Instrument Serif (titres) + Work Sans (texte)
- Palette : sand / forest / sage / cream / ink

---

## 1. Intégration logo Signature Van (2 versions)

**Assets**
- Copier `user-uploads://logo_sans_fond.png` (noir) → `src/assets/logo-dark.png` + `public/favicon.png` + `public/apple-touch-icon.png` + `public/og-image.png`
- Copier `user-uploads://logo_sans_fond_2.png` (clair) → `src/assets/logo-light.png`
- Supprimer `public/favicon.ico` existant

**`index.html`**
- Remplacer favicon par `/favicon.png` (type image/png)
- Ajouter `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
- Mettre à jour meta `og:image` et `twitter:image` vers `/og-image.png`
- JSON-LD Organization avec logo (si applicable globalement)

**`src/components/layout/Navbar.tsx`**
- Importer les 2 logos
- Remplacer le bloc texte "Signature / Van" par `<img>` adaptatif
  - Logo clair quand `transparent === true` (Hero homepage)
  - Logo noir sinon (scrollé / pages intérieures / menu mobile ouvert)
- Hauteur ~40px desktop, ~36px mobile, `w-auto`
- `alt="Signature Van"`
- Conserver toute la logique de scroll/navigation existante

**`src/components/layout/Footer.tsx`**
- Ajouter le logo version claire en tête (hauteur ~48px)
- Conserver la structure existante

---

## 2. Page Location — refonte complète (`src/pages/Location.tsx`)

### Sections (dans l'ordre)

**1. Hero** — via `PageHeader` existant, baseline réécrite (location vans aménagés Annecy, esprit signature)

**2. Flotte — 2 cards** (style `gap-px` cohérent avec Realisations)
- **Le Cocon Nomade** (Renault Talento) — 2 couchages, cuisine équipée, douche extérieure, 4 places carte grise, idéal duo
- **L'Échappée Belle** (Renault Trafic) — 4 couchages, lit haut + banquette convertible, idéal famille / amis
- Specs Yescapa réelles : longueur, hauteur, conso, transmission, équipement clé

**3. Tarifs — Cards + grilles structurées**
- 3 cards saisons côte à côte (responsive : stack mobile)
  - **Basse saison** — 55 €/jour
  - **Moyenne saison** — 72 €/jour
  - **Haute saison** — 94 €/jour
- Grille **Kilométrage** : 100 km/j inclus · 200 km/j +15 € · au-delà 0,15 €/km
- Grille **Frais** : Nettoyage 39 € (offert si rendu propre) · Caution 2 000 €
- Grille **Remises** : Dégressif -10% (7j+) / -15% (14j+) / -20% (21j+) · Early booking -5% (>4 mois) · Direct -15% vs Yescapa
- **Note CE/CSE** discrète sous la grille : *"💼 Salarié avec un CE/CSE ? Une remise complémentaire est possible — précisez-le lors de votre demande."*

**4. Inclus & Avantages**
- Liste équipement inclus (linge, vaisselle, GPS, assistance, assurance tous risques, etc.)
- Bloc avantages avec ligne dédiée :
  - **🎁 Avantage CE / CSE** — *Réduction dédiée pour les salariés via leur comité d'entreprise. Sur demande, cumulable uniquement avec la remise -15% en réservation directe.*

**5. Personas** — 3 cards : Couples & amis · Familles outdoor · Futurs vanlifers (essai avant achat)

**6. Réservation hybride** — encart valorisant la réservation directe (-15% vs Yescapa) avec CTA contact + lien Yescapa secondaire

**7. Formulaire de contact** (Zod + react-hook-form, soumission mailto)
- Champs : nom, email, téléphone, van souhaité (select), dates (du / au), nombre de voyageurs, message
- **Checkbox optionnelle** : *"Je dispose d'un CE / CSE (préciser le nom dans le message)"*
- Validation Zod, états loading/success, accessibilité

**8. FAQ** (Accordion shadcn) — inclut notamment :
- Quelle assurance / quelle franchise ?
- Animaux acceptés ?
- Conditions de prise en charge / restitution ?
- Annulation ?
- **Proposez-vous une remise CE / CSE ?** → *Oui, sur demande selon l'organisme. Cumulable uniquement avec l'offre -15% en réservation directe (non cumulable avec dégressif longue durée ni early booking).*

**9. SEO** — composant `Seo` + JSON-LD `Product` ×2 (un par van) avec `offers`, `priceRange`, `areaServed: Annecy`

---

## 3. Bonus — renommages
- `src/pages/Realisations.tsx` → remplacer "famille" par "couple + 1 enfant" là où pertinent
- `src/pages/FormuleConfort.tsx` → reformulation cible : "escapades en duo ou en couple + enfant"

---

## 4. Mémoire projet — `mem://index.md`

Création des règles core :
- Typo Instrument Serif (titres) + Work Sans (texte) — ne pas changer
- Palette sand / forest / sage / cream / ink — ne pas changer
- Logo Signature Van : version claire sur fonds foncés (Hero transparent, Footer forest), version noire ailleurs ; texte "Signature Van" supprimé de la navbar
- Naming flotte : Le Cocon Nomade (Renault Talento) + L'Échappée Belle (Renault Trafic)
- Tarifs : 55 / 72 / 94 € (basse / moyenne / haute) · Caution 2 000 € · Nettoyage 39 €
- Stratégie : -15% en réservation directe vs Yescapa (à valoriser)
- CE/CSE : montant sur demande, cumulable **uniquement** avec -15% direct (jamais avec dégressif longue durée ni early booking)
- Réalisations : positionnement "couple + 1 enfant" (pas "famille" générique)

---

## ✅ Critères d'acceptation
- Logo visible et lisible sur Hero homepage (clair) et toutes pages intérieures (noir)
- Favicon mis à jour (plus d'icône Lovable par défaut)
- Page Location : tarifs lisibles en cards responsive sur viewport 458px
- Mention CE/CSE présente aux 3 emplacements + checkbox formulaire
- FAQ CE/CSE explicite sur la non-cumulabilité
- Aucune régression sur les autres pages (Hero, Services, Réalisations, About, Contact, Formules)

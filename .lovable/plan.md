## 🎯 Objectif

Remplacer les 6 projets fictifs par votre **vraie première réalisation : « Tribu » — Fiat Talento L2H1 (2019)**, avec une fiche projet riche (galerie 6 photos, fiche technique détaillée, narration), et propager les vraies photos sur la page d'accueil. Ton artisan honnête (jeune atelier qui assume ses débuts), SEO local Annecy/Chapeiry renforcé.

---

## 1. 📁 Import des photos

Création du dossier `src/assets/realisations/tribu/` avec les 5 photos renommées proprement (SEO-friendly) :

| Fichier source | Nouveau nom | Usage |
|---|---|---|
| IMG_5828.JPG | `tribu-cuisine-arriere-frene.jpg` | Cuisine arrière (plan travail frêne) |
| IMG_5844.JPG | `tribu-salon-velours-cotele.jpg` | Salon convivial (assise velours) |
| IMG_5857.JPG | `tribu-fiat-talento-exterieur.jpg` | Vue extérieure du Talento |
| IMG_5888.JPG | `tribu-detail-arrondi-meuble-entree.jpg` | Détail signature ébéniste |
| IMG20260402185235.jpg | `tribu-couchage-parents-140x200.jpg` | Lit parents déplié |
| IMG20260402092213.jpg | `tribu-couchage-enfant-cabine.jpg` | Lit enfant cabine 140×70 |

Les **alt** seront tous structurés avec mots-clés locaux : *« [sujet] — aménagement Fiat Talento à Annecy par Signature Van »*.

---

## 2. 🛠 Refonte de `src/pages/Realisations.tsx`

### Nouveau modèle de données enrichi

```ts
const tribu = {
  slug: "tribu-fiat-talento",
  name: "Tribu",
  vehicle: "Fiat Talento L2H1 — 2019",
  tagline: "Compact, mais 3 vrais couchages.",
  story: "Une famille de 3 voulait un van compact, facile à conduire au quotidien…",
  gallery: [ /* 6 photos avec légendes + alt */ ],
  highlights: [
    "3 couchages : 140×200 parents + 140×70 enfant en cabine",
    "Cuisine arrière indoor / outdoor portes ouvertes",
    "Détail ébéniste : meuble d'entrée arrondi"
  ],
  specs: {
    isolation: "Liège projeté, habillage parois et plafond en feutrine",
    menuiserie: "Contreplaqué + stratifié haut de gamme vert de gris, plan de travail frêne massif",
    couchage: "Lit parents 140×200 (mousse Bultex, housse velours côtelé blanc cassé) + lit enfant 140×70 amovible en cabine",
    electricite: "Batterie AGM 140Ah, panneau solaire, chargeur DC/DC, 100% 12V — USB, allume-cigare, spots LED",
    eau: "Évier inox + douchette extensible, chauffe-eau électrique, réservoir propre 54L, eaux usées 28L sous châssis",
    ouvertures: "2 fenêtres portes arrière, lanterneau de toit, aération basse (flux d'air permanent)",
    mobilier_amovible: "Table en frêne démontable",
  }
};
```

### Nouveau layout de la page

- **Hero projet** : grande photo extérieur + nom « Tribu » + tagline + 3 highlights en chips
- **Galerie 6 photos** en grille bento (mix portrait/paysage, hover zoom doux)
- **Section narration** : le besoin client → la réponse artisan (texte long pour le SEO)
- **Fiche technique** : 7 specs en grille 2 colonnes avec petits pictos (Lucide : `Snowflake`, `Hammer`, `Bed`, `Zap`, `Droplet`, `Wind`, `Move`)
- **Bandeau honnêteté** sobre : *« Tribu est notre première réalisation livrée. L'atelier est jeune, l'exigence est intacte — chaque détail a été pensé, ajusté, ré-ajusté. »*
- **CTA** : « Discutons de votre projet » → /contact

### Suppression
Suppression des 6 projets fictifs (Borealis, Nordica, Refuge, Aravis fictif, Atelier mobile, Léman) et des imports `van1-van6` non utilisés.

---

## 3. 🏠 Mise à jour de la page d'accueil (`Index.tsx`)

Remplacement des 3 images du bloc « Trois manières de vivre le van » :

| Carte | Avant | Après |
|---|---|---|
| Aménagement complet | `van-kitchen.jpg` | `tribu-cuisine-arriere-frene.jpg` |
| Prestations à la carte | `van-bedroom.jpg` | `tribu-detail-arrondi-meuble-entree.jpg` |
| Location de van aménagé | `van-annecy.jpg` | *(inchangée — pas une vraie photo location)* |

Mise à jour des `alt` correspondants avec mots-clés locaux.

---

## 4. 🔍 SEO

### `Seo.tsx` — page Réalisations
- **Title** : `« Tribu » — Aménagement Fiat Talento sur mesure à Annecy | Signature Van`
- **Description** : *« Découvrez Tribu, notre aménagement Fiat Talento L2H1 pour une famille de 3 : cuisine arrière en frêne, isolation liège, 3 couchages. Artisan ébéniste à Chapeiry, près d'Annecy. »*

### JSON-LD `CreativeWork`
Ajout d'un schéma structuré pour le projet (type `CreativeWork`, `creator: LocalBusiness`, image principale) → meilleure indexation Google Images + rich results.

---

## 5. ✅ Récapitulatif des fichiers touchés

| Fichier | Action |
|---|---|
| `src/assets/realisations/tribu/*.jpg` (×6) | **Créés** (import des uploads) |
| `src/pages/Realisations.tsx` | **Réécrit** (nouveau modèle + layout galerie/specs) |
| `src/pages/Index.tsx` | **Modifié** (2 images remplacées + alt SEO) |
| `src/components/Seo.tsx` | **Inchangé** (utilisé tel quel) |

Aucun composant cassé, aucune route modifiée, aucune dépendance ajoutée.

---

## ⏭ Après approbation

Je passe en mode build et j'enchaîne dans l'ordre : import images → refonte Realisations → maj Index → vérif visuelle. Vous pourrez voir le résultat dans le preview en moins de 2 min.

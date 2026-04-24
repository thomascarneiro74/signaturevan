## Remplacement des photos d'artisan par tes vraies photos

Tu as fourni 3 photos noir et blanc authentiques. Je propose de les utiliser à 3 endroits cohérents du site (et pas seulement la page À propos), pour remplacer les images IA actuelles partout où l'on voit « l'artisan ».

### 1. Copier les 3 photos dans le projet

Copier les fichiers depuis `user-uploads://` vers `src/assets/` avec des noms propres :

- `user-uploads://portrait_aménageur_de_van_carneiro_thomas.JPG` → `src/assets/thomas-portrait.jpg`
  (le portrait souriant devant le mur en bois — chaleureux, parfait pour la page À propos)
- `user-uploads://portrait_aménageur_de_van_annecy.JPG` → `src/assets/thomas-atelier.jpg`
  (toi en train de raboter, atmosphérique — parfait pour la section « Notre atelier » de la home)
- `user-uploads://IMG_6013.JPG` → `src/assets/copeaux-rabot.jpg`
  (gros plan copeaux — parfait pour la page Services qui parle du savoir-faire)

### 2. Remplacer les images dans 3 fichiers

**`src/pages/About.tsx`** (page À propos)
- Remplacer `artisan.jpg` par `thomas-portrait.jpg` (le portrait souriant) : c'est ta photo, on te voit toi.
- Mettre à jour l'attribut `alt` : « Thomas Carneiro, artisan ébéniste aménageur de vans à Chapeiry près d'Annecy ».

**`src/components/sections/SavoirFaire.tsx`** (section « Notre atelier » sur la page d'accueil)
- Remplacer `craft-detail.jpg` par `thomas-atelier.jpg` (toi en train de raboter).
- Mettre à jour l'`alt` : « Thomas au rabot dans son atelier d'aménagement de vans ».

**`src/pages/Services.tsx`** (page Services)
- Remplacer `craft-detail.jpg` par `copeaux-rabot.jpg` (gros plan copeaux de bois) : ça illustre parfaitement le savoir-faire artisanal.
- Mettre à jour l'`alt` : « Détail d'un rabot et copeaux de bois — savoir-faire d'ébéniste ».

### 3. Conserver les anciennes images
On garde `artisan.jpg` et `craft-detail.jpg` dans `src/assets/` pour ne rien casser, mais elles ne seront plus référencées. Tu pourras les supprimer plus tard si tu veux.

### Note sur le rendu noir et blanc
Tes photos sont déjà en noir et blanc — elles s'intègrent très bien avec l'esthétique sobre du site (palette terreuse + serif éditoriale). Aucun filtre CSS supplémentaire à appliquer.

Aucun changement de structure, de mise en page ni de styles — uniquement le remplacement des fichiers d'image et de leurs `alt`.

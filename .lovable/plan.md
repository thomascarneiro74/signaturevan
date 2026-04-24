## Modifications dans `src/pages/Location.tsx`

### 1. PageHeader
- Retirer `"depuis Chapeiry"` de l'intro

### 2. Le Cocon Nomade
- **Tag** → `"Escapades en duo ou en famille"`
- **Hauteur** → `2,06 m`
- **Cuisine équipée** → ajout : `, réserve eau propre 54 L, ballon eau chaude, robinet douchette extensible, réchaud amovible double feux`
- **Autonomie** → `"Recharge en roulant + panneau solaire · prises USB et 12V"`
- **Photo** → remplacer par `cocon-nomade-interieur.jpg` (copie depuis `user-uploads://IMG_5844-2.JPG` vers `src/assets/`)
  - Alt : `"Intérieur du van Cocon Nomade au coucher du soleil — coin repas et cuisine"`

### 3. L'Échappée Belle
- **Tag** → vidé (suppression `"Petite famille outdoor"`)
- **Lit cabine** → `60 × 140`
- **Cuisine / eau** → `"Réserve d'eau par jerricans : 36 L eau propre + 12 L eaux usées · 1 feu gaz amovible · vaisselle complète"`
- **Autonomie** → `"Batterie auxiliaire rechargée en roulant · prises USB et 12V"` (suppression panneau solaire)
- **Photo** → remplacer par `echappee-belle-interieur.jpg` (copie depuis `user-uploads://IMG20260416085659.jpg` vers `src/assets/`)
  - Alt : `"Intérieur de L'Échappée Belle — meuble cuisine et porte latérale ouverte sur prairie et montagnes"`

### 4. Liste "Tout ce qu'il faut pour partir sans friction"
- Ajout après `"Vaisselle, batterie de cuisine, cafetière et consommables de base"` :
  → `"Couette et oreillers fournis pour chaque couchage"`

### 5. Grille tarifaire
- **Basse saison** : `period` → `"de novembre à mars"` · **badge en haut de carte** : `2 nuits min.`
- **Moyenne saison** : `period` → `"avril, mai, juin, septembre, octobre"` · **badge** : `2 nuits min.`
- **Haute saison** : `period` → `"juillet - août"` · **badge** : `5 nuits min.`
- Remplacer `"par jour"` → `"par nuit"` dans les **3 cartes tarifs**
- Section **Kilométrage** → reste inchangée (`/ jour`)

### 6. Imports
- Mettre à jour les imports d'images en haut du fichier pour pointer vers les 2 nouveaux fichiers.

---

✅ Une seule passe d'édition couvrira l'ensemble.
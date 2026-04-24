## Agrandir le logo dans la Navbar

### Fichier : `src/components/layout/Navbar.tsx`

**Modification du `<img>` du logo (ligne 49)**

Actuellement :
```tsx
className="h-9 md:h-10 w-auto object-contain"
```

Nouveau :
```tsx
className="h-14 md:h-16 w-auto object-contain"
```

**Détails techniques** :
- Mobile : `h-9` (36px) → `h-14` (56px) — soit ~55% plus grand
- Desktop : `h-10` (40px) → `h-16` (64px) — soit +60%
- Le `py-5` du conteneur parent (`<div className="container mx-auto flex items-center justify-between py-5">`) reste suffisant pour absorber la hauteur supplémentaire sans casser l'alignement vertical avec les liens de navigation.
- La nav reste centrée verticalement grâce à `items-center`.

### Pourquoi ces valeurs
- `h-14`/`h-16` correspondent à un standard "logo bien lisible" sur la plupart des sites éditoriaux haut de gamme.
- Si après application tu trouves que c'est encore trop petit ou trop grand, on pourra ajuster facilement (par ex. `h-12 md:h-14` pour plus modéré, ou `h-16 md:h-20` pour plus imposant).

---

✅ Une seule ligne modifiée, aucun risque de régression sur le reste de la mise en page.

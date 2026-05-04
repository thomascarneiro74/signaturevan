## Objectif

Supprimer le formulaire de contact (qui ne fonctionne pas réellement) sur la page `/contact` et mettre en avant les coordonnées directes : **signature.van@gmail.com** et le téléphone.

## Modifications — `src/pages/Contact.tsx`

1. **Supprimer le formulaire complet** (champs Nom, Téléphone, Email, Type de projet, Message, bouton Envoyer) et toute la logique associée (`useState`, `handleSubmit`, `toast`, `setTimeout`).

2. **Restructurer la page en une seule colonne centrée** (au lieu de la grille 5/7) avec une mise en avant visuelle forte :
   - Bloc principal avec **l'adresse email cliquable en grand format** (typographie sérif, taille généreuse) — `signature.van@gmail.com` en `mailto:` 
   - Bouton CTA principal "Écrire un email" pointant vers `mailto:signature.van@gmail.com`
   - Bloc téléphone secondaire avec lien `tel:` cliquable et horaires (lun–ven, 9h–18h)
   - Bloc atelier (adresse Chapeiry / Haute-Savoie)
   - Bloc Instagram `@signature.van`

3. **Conserver** :
   - Le `Seo` (titres / description)
   - Le `PageHeader` (eyebrow, titre, intro) — on ajustera l'intro pour inviter à écrire/appeler directement plutôt que remplir un formulaire
   - L'encart "Premier échange toujours sans engagement"

4. **Nettoyer les imports** inutilisés : `useState`, `toast`.

## Rendu attendu

```text
┌─────────────────────────────────────────┐
│  PageHeader (Contact / titre / intro)   │
├─────────────────────────────────────────┤
│                                         │
│         EMAIL                           │
│   signature.van@gmail.com  (grand)      │
│   [ Écrire un email ]                   │
│                                         │
│   ─────────────                         │
│   Téléphone   +33 7 60 42 18 04         │
│   Atelier     74540 Chapeiry            │
│   Instagram   @signature.van            │
│                                         │
│   « Premier échange sans engagement »   │
│                                         │
└─────────────────────────────────────────┘
```

Aucune autre page n'est impactée — les liens vers `/contact` dans la navbar et le footer restent valides.

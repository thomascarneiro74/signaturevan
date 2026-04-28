Plan de modification — uniformisation des liens de réservation

1. Réduire les boutons répétés
- Supprimer les boutons Wikicampers présents directement dans chaque fiche van de la section “La flotte”.
- Garder les fiches véhicules centrées sur la présentation : photos, caractéristiques, équipements et détails.

2. Fusionner les zones de réservation
- Supprimer la section séparée “Comment réserver” qui répète uniquement Wikicampers.
- Conserver une seule section claire “Plateformes partenaires / Réservez en ligne”.
- Dans cette section, afficher chaque van avec exactement deux boutons au même endroit :
  - “Voir sur Yescapa”
  - “Voir sur Wikicampers”

3. Rendre la lecture plus équilibrée
- Présenter les deux plateformes avec la même importance visuelle, pour éviter l’impression que Wikicampers est partout.
- Ajouter un court texte du type : “Choisissez votre van, puis ouvrez l’annonce sur la plateforme de votre choix.”
- Garder les liens externes uniquement dans cette zone de réservation, pour une page plus propre.

Détail technique
- Fichier concerné : `src/pages/Location.tsx`.
- Les URLs déjà renseignées dans `fleet` restent conservées pour chaque van : `yescapaUrl` et `wikicampersUrl`.
- Les boutons externes resteront en `target="_blank"` et `rel="noreferrer"`.
- La structure finale sera : présentation des vans → tarifs indicatifs → inclus/avantages → pour qui → réservation en ligne unique → FAQ.
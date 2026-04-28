Plan de modification — page location

1. Supprimer la logique de réservation directe
- Retirer le formulaire de demande de réservation par email.
- Retirer les mentions qui valorisent la réservation directe ou la remise directe de -15 %.
- Adapter les textes pour expliquer que les réservations passent uniquement par les plateformes, afin de simplifier l’assurance, le paiement et les conditions.

2. Ajouter Yescapa + Wikicampers comme canaux officiels
- Conserver le lien Yescapa existant comme option plateforme.
- Ajouter les deux liens Wikicampers fournis :
  - Van 1 / Le Cocon Nomade : `https://www.wikicampers.fr/location/van/chapeiry/fiat-fiat-talento-1-6-ecojet-125-ch-eu6-3-0t/380559`
  - Van 2 / L’Échappée Belle : `https://www.wikicampers.fr/location/van/chapeiry/fiat-fiat-talento-1-6-multijet-120-ch-eu6-lh1-1200-3-0t/380688`
- Ajouter des boutons “Réserver sur Wikicampers” sur chaque fiche van, avec le bon lien selon le véhicule.

3. Repenser l’appel à l’action principal
- Remplacer le bloc “Réservation hybride” par un bloc plus clair du type : “Réservez via nos plateformes partenaires”.
- Mettre en avant les bénéfices : assurance plateforme, paiement sécurisé, calendrier de disponibilités, conditions centralisées.
- Proposer deux actions : voir Yescapa et voir Wikicampers / ou des boutons par van si plus clair visuellement.

4. Adapter tarifs, avantages et FAQ
- Modifier les sections “Tarifs”, “Inclus & avantages” et “FAQ” pour éviter toute contradiction :
  - Les tarifs affichés deviennent indicatifs ou “à partir de”, selon les plateformes.
  - Les remises directes / CE-CSE sont retirées ou reformulées si elles ne s’appliquent plus.
  - Les conditions d’annulation et d’assurance renvoient aux plateformes Yescapa/Wikicampers.

Détail technique
- Fichier principal : `src/pages/Location.tsx`.
- Retirer les imports et la logique inutiles liés au formulaire : `useState`, `zod`, `react-hook-form`, `zodResolver`, `Form`, `Input`, `Textarea`, `Checkbox`, `Select`, `toast`, etc., si plus utilisés.
- Ajouter les URLs de réservation dans les données `fleet` pour associer chaque van à son lien Wikicampers.
- Vérifier que les boutons externes utilisent `target="_blank"` et `rel="noreferrer"`.
- Mettre à jour le SEO description si besoin pour refléter la réservation via plateformes partenaires.
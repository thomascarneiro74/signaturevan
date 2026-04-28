Plan de modification

1. Remplacer les avis fictifs
- Dans la section « Ce qu’ils en disent », remplacer les 2 témoignages actuels par les 3 vrais avis Google fournis :
  - Noémie DURIER : aménagement complet sur mesure.
  - Olivier TARDY : prestation à la carte / pose d’une baie coulissante.
  - Christophe Havard : location de van en famille.
- Supprimer le doublon de Christophe et ne garder qu’un seul avis.

2. Affichage version 2 : extrait + avis complet
- Afficher chaque avis sous forme d’extrait court pour garder une section légère et élégante.
- Ajouter un bouton « Lire la suite » sur chaque avis long.
- Quand l’avis est ouvert, afficher le texte complet avec un bouton « Réduire ».

3. Mise en valeur de l’origine Google
- Ajouter une mention discrète du type « Avis Google · 5 étoiles » pour renforcer l’authenticité.
- Conserver le style premium actuel de la page, sans transformer la section en gros bloc de texte.

Détail technique
- Fichier principal : `src/components/sections/Temoignages.tsx`.
- Importer `useState` depuis React pour gérer les avis ouverts/fermés.
- Adapter la structure des avis avec : auteur, note, contexte, texte complet.
- Ajouter une petite fonction d’extrait ou un champ d’extrait pour chaque avis.
- Conserver la grille responsive actuelle, en l’adaptant proprement à 3 avis.
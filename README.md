# Révisions Brevet 2027 · Lycée Français International Molière (Saragosse)

Web de fiches de révision pour préparer le **Diplôme National du Brevet (DNB) 2027**.
125 fiches couvrant tout le programme du cycle 4 (5ᵉ–4ᵉ–3ᵉ) dans 8 matières.

## ✨ Fonctionnalités

- **8 matières** : Mathématiques, Français, Histoire, Géographie, EMC, SVT, Physique-Chimie, Technologie.
- **125 fiches** style « fiche de révision » : Objectifs · Notions clés · L'essentiel · Méthode · Exemple · À retenir · Mots-clés.
- **Recherche par mots-clés** (insensible aux accents, pas besoin du titre exact).
- **Fiche du jour** qui change chaque jour — pour avoir tout revu avant l'épreuve.
- **Suivi de progression** (fiches révisées enregistrées dans le navigateur).

## 🚀 Utilisation

- **En ligne** : voir la page publiée via GitHub Pages.
- **Hors ligne / double-clic** : ouvrir **`brevet-2027.html`** — un fichier autonome (CSS + JS + fiches inclus), fonctionne sans serveur ni internet.
- **Version modulaire** (pour éditer) : `index.html` + `styles.css` + `app.js` + `data/`. À servir via un serveur local :
  ```bash
  python3 -m http.server 8123
  ```

## 🧩 Ajouter ou modifier des fiches

Chaque matière a son fichier dans `data/<matière>.js`. Après modification, régénérer le fichier autonome :

```bash
python3 build.py   # met à jour brevet-2027.html
```

## 📝 Note « centre étranger »

Le Lycée Molière est un établissement AEFE/Mlf : les élèves passent le DNB comme **centre étranger (groupe 1)** — même programme et même structure, mais sujets spécifiques et calendrier propre (mi-juin).

---

*Programmes officiels du cycle 4 · session 2027.*

# 📘 Guide du Design System & Architecture UI/UX - Tinitz Redesign

Ce document analyse la hiérarchie visuelle et les composants utilisés pour la refonte du site marketing et de l'interface d'administration de Tinitz.

---

## 🏗️ 1. Architecture de la Hiérarchie Visuelle

L'objectif principal était de passer d'une interface utilitaire classique à une expérience **SaaS Premium** inspirée par l'excellence d'Evenium tout en intégrant des codes modernes (Bento Grid, Glassmorphism).

### Site Marketing (Sections Dédiées)
- **Top-Down Flow** : Navigation → Hero → Section Billetterie → Section CRM → Section Bornes → Section Digital Signage → Section Régie Pub → Footer.
- **Points Focalisation** : Utilisation alternée de fonds blancs (`#FFFFFF`) et gris très clairs (`#F8FAFC`) pour distinguer les modules tout en conservant une unité visuelle premium. Chaque module dispose de son propre CTA unique.

### Admin Dashboard (Efficacité)
- **Above the Fold** : Les métriques critiques (Live, Audience, Statut) sont immédiatement visibles en haut.
- **Bento Logic** : Les modules sont regroupés par "Logique Métier" pour réduire la charge cognitive.

---

## 🎨 2. Palette de Couleurs & Tokens

| Token | Valeur Hex | Usage |
| :--- | :--- | :--- |
| **Slate-50** | `#F8FAFC` | Arrière-plan principal (Light Mode) |
| **Slate-950** | `#020617` | Titres / Texte principal |
| **Tinitz-Red** | `#E14B33` | **Couleur Primaire** / CTAs / Conversion |
| **Tinitz-Blue** | `#114282` | **Couleur Secondaire** / Accents / CRM |
| **Slate-500** | `#64748B` | Texte secondaire / Légendes |
| **White** | `#FFFFFF` | Fonds de cartes / Surfaces |

---

## 🧩 3. Guide des Composants Tailwind

### A. Les Cartes Bento (`.bento-card`)
Utilisées pour structurer le contenu de manière modulaire.
- **Style** : `bg-slate-800/50`, `border-slate-700/50`, `rounded-3xl`, `p-8`.
- **Interaction** : Transition fluide sur le hover (`scale-102`, `translate-y-1`) avec un effet de lueur (glow) `shadow-tinitz-red/20`.

### B. Glassmorphism (`.glass`)
Appliqué sur le header et les prévisualisations pour une sensation de profondeur.
- **Styles** : `backdrop-blur-md`, `bg-white/5` (Dark) ou `bg-white/70` (Light), `border-white/10`.

### C. Boutons Premium
- **Action Primaire** : `bg-tinitz-red`, `text-white`, `font-black`, `rounded-2xl`, `shadow-xl`.
- **Action Secondaire** : `bg-slate-800`, `border-slate-700`, `hover:bg-slate-700`.

### D. Badges Dynamiques
Indicateurs d'état en temps réel.
- **Style** : `bg-tinitz-red/10`, `text-tinitz-red`, `border-tinitz-red/20`, avec animation de `pulse`.

### E. Mega-Menu (Navigation Stratégique)
Inspiré par Evenium pour une clarté maximale des solutions.
- **Style** : `absolute`, `glass`, `rounded-3xl`, `p-8`.
- **Organisation** : Colonnes thématiques (Opérations vs Hardware) avec icônes de couleurs distinctes (Emerald, Blue, Amber, Purple).

---

## 🚀 4. Analyse des Nouveaux Modules Stratégiques

| Module | Icone Lucide | Pattern UI | Objectif de Conversion |
| :--- | :--- | :--- | :--- |
| **Billetterie** | `ticket` | Bento Horizontal | "Gérer ma billetterie" (Lead Gen) |
| **CRM Participant** | `users` | Bento Vertical | "Optimiser mon CRM" (Efficacité) |
| **Hardware** | `monitor` | Image Mockup Overlay | "Réserver des bornes" (Service Physique) |
| **Content Management** | `layout` | Mini-Control Grid | "Piloter mes écrans" (Opérationnel) |
| **Régie Pub** | `trending-up` | High-Contrast Emerald | "Maximiser la visibilité" (Sponsors/ROI) |

---

## 💡 5. Recommandations de Développement (Growth Mindset)

1. **Lazy Loading** : Les images héroïques et les mockups de bornes doivent être chargés progressivement.
2. **Micro-interactions** : Utiliser Framer Motion ou GSAP pour des transitions de dashboard "liquides" lors du passage d'une vue à l'autre.
3. **Réactivité** : Le passage de la `col-span-12` (mobile) à une structure multi-colonnes (desktop) doit être géré avec soin pour maintenir la lisibilité.

---
*Design conçu par Antigravity - Expert Design System & UX Architecture.*

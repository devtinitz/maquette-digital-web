---
description: Ce workflow est conçu comme une chaîne de production itérative qui transforme une intention conceptuelle en une application web de haute fidélité (High-Fidelity).
---


## 1. PHASE D’ANALYSE ET CONCEPTION VISUELLE
* **ANALYSE_MAQUETTE :** Tu dois croiser les données de la maquette Stich (fournie) avec les standards d'interface de `corp.evenium.com`. Comble les lacunes créatives de la maquette en priorisant l'esthétique "Tech-Luxury".
* **IDENTITÉ_VISUELLE :** Définis une charte graphique incluant :
    * Une palette de couleurs (Fonds sombres/élégants, accents vibrants type Bleu Electrique ou Vert Emeraude).
    * Une typographie Sans-Serif moderne (Inter ou Montserrat).
    * Un style d'iconographie minimaliste et technologique.

## 2. PHASE D'ARCHITECTURE TECHNIQUE (VUE.JS 3)
* **MODULARITÉ :** Découpe la landing page en composants atomiques réutilisables dans le dossier `/components`.
* **NOMMAGE_COMPOSANTS :** Respecte strictement la structure suivante :
    * `Hero.vue` (Impact & Video)
    * `BentoGrid.vue` (Social Proof & Témoignages)
    * `PartnerSection.vue` (Écosystème)
    * `VideoPlayer.vue` (Expérience Tinitz)
    * `ConversionBanner.vue` (CTA Flash)
    * `ModuleGrid.vue` (Arsenal Technologique)
    * `ExpertiseFooter.vue` (Réseau & Lien externe)
    * `ContactForm.vue` (Validation JS Vanilla)

## 3. PHASE DE DÉVELOPPEMENT (TAILWIND CSS)
* **HERO_IMPACT :** Implémente un arrière-plan vidéo ou Lottie en plein écran avec un overlay de contraste pour assurer la lisibilité du message fort.
* **BENTO_LAYOUT :** Pour la section "Social Proof", utilise une grille de type Bento. Chaque carte doit être interactive au survol (`hover:scale-105`).
* **TECH_GRID :** La section Modules doit être une grille interactive (6 blocs : Billetterie, Bornes, CRM, Pub, Slides, Votes). Utilise des effets de `glassmorphism` (flou d'arrière-plan).
* **VALIDATION_CONTACT :** Le formulaire doit être minimaliste avec une validation en temps réel sans rafraîchissement de page, gérant les états : *En attente, Succès, Erreur*.

## 4. PHASE DE POLISSAGE "WOW EFFECT"
* **ANIMATION_SCROLL :** Intègre des transitions fluides à l'apparition de chaque section (utilisation de `Intersection Observer` ou bibliothèques d'animation légères).
* **MICRO_INTERACTIONS :** Chaque bouton (CTA) doit posséder un état de survol dynamique (changement de couleur, ombre portée ou légère expansion).
* **COHÉRENCE_MOBILE :** Assure-toi que l'expérience "vivante et inspirante" est maintenue sur mobile avec un responsive irréprochable.

## 5. DIRECTIVES SPÉCIFIQUES AUX SECTIONS
* **SECTION_PARTENAIRES :** Ne te limite pas aux logos. Ajoute des micro-citations ou cas d'usages rapides pour renforcer la crédibilité.
* **SECTION_EXPERTISE :** Doit obligatoirement inclure un bouton stylisé pointant vers `www.tinitz.ci` avec une icône de flèche externe.
* **SECTION_CTA :** Le contraste doit être maximal. Si le site est sombre, le bouton CTA doit être la source de lumière visuelle de la page.

## GUIDE D'APPROCHE PAR SECTION (LOGIQUE AGENT)

##SectionConcept Créatif & Technique

* **0. HeroImpact Visuel : Texte en font-black avec gradient textuel. Utilisation de object-cover pour la vidéo de fond.
* **1. Social ProofStructure Bento : Cartes de tailles inégales. Priorité aux logos d'entreprises prestigieuses pour le crédit immédiat.
* **2. PartenairesStorytelling : Ne pas se contenter d'un slider. Créer des mini-blocs "Cas d'usage" pour chaque partenaire majeur.
* **3. VidéoImmersif : Utiliser un filtre CSS backdrop-blur sur l'interface du player avant déclenchement.
* **4. CTAConversion : Utiliser une couleur de contraste (ex: Orange corail ou Vert néon) pour le bouton principal.
* **5. ModulesInteractivité : Grille de 6 blocs. Utilisation de hover:shadow-2xl et transition-all duration-300.
* **6. ExpertiseAutorité : Section sobre, type "Newsroom". Le lien vers tinitz.ci doit apparaître comme un bouton d'action officiel.
* **7. ContactMinimalisme : Champs épurés, typographie légère, validation temps réel sans rechargement de page.

---
**Instruction Finale pour l'Agent :**
> "Tu agis en tant que Lead Designer et Développeur. Si une information graphique manque, tu dois la créer en restant fidèle à l'image de marque de TINITZ : Innovant, Professionnel et Leader."
export const projects = [
  {
    id: "babitransit",
    category: "Étude de cas UX/UI",
    title: "BabiTransit — Mobilité Urbaine",
    subtitle: "Application mobile de transport en commun à Abidjan",
    tags: ["UX/UI Design", "Figma", "Design System", "Recherche Utilisateur", "Mobile App"],
    description:
      "Conception UX/UI complète de BabiTransit, une application mobile visant à simplifier la navigation dans le réseau de transport en commun complexe d'Abidjan (gbakas, wôrô-wôrôs, bus SUTRA, pinasses). En raison de la confidentialité du projet, la démarche présentée détaille le processus de recherche, les architectures d'information et le Design System créé.",
    image: new URL("../assets/images/babitransit.png", import.meta.url).href,
    imageAlt: "Aperçu de l'étude de cas BabiTransit",
    liveUrl: null,
    figmaUrl: "https://www.figma.com/design/a2doCMTNVc4PQVzVTGMr3M/BabiTransit?node-id=0-1&t=mfpr2bbgF7drjRE5-1",
    isUxCaseStudy: true,
    details: {
      heroBadges: ["Confidentiel", "Design System", "Recherche Utilisateur"],
      architecture: [
        {
          label: "1. EMPATHIE & DÉFINITION",
          main: "Recherche Utilisateur & Cartographie",
          detail:
            "Entretiens avec 15 usagers du transport à Abidjan. Cartographie des parcours de transport informels pour identifier les points de friction majeurs (tarifs fluctuants, absence de trajets définis, temps d'attente imprévisibles).",
        },
        {
          label: "2. IDÉATION & WIREFRAMING",
          main: "Wireflows & Architecture d'Information",
          detail:
            "Conception d'une navigation mobile ultra-rapide à une main (usage en déplacement). Hiérarchisation des fonctionnalités clés : recherche d'itinéraires multi-modes et estimation de coûts.",
        },
        {
          label: "3. UI DESIGN & PROTOTYPE",
          main: "Haute Fidélité & Système de Design",
          detail:
            "Création de la charte visuelle, d'un UI Kit atomique (boutons, cartes de transport, icônes personnalisées). Prototypage de parcours interactifs testés sur le terrain avec des usagers à Cocody et Adjamé.",
        },
      ],
      operations: {
        transfers: [
          "Entretiens utilisateurs & personas (daily commuters, étudiants, chauffeurs)",
          "Cartographie de l'expérience (Customer Journey Maps)",
          "Architecture d'information & arborescence applicative",
          "Wireframes basse et moyenne fidélité (Figma)"
        ],
        withdrawals: [
          "Prototypes interactifs haute fidélité (Figma)",
          "Design System complet (150+ composants réutilisables, variables de couleur)",
          "Spécifications UI pour l'équipe de développement front-end",
          "Tests d'utilisabilité sur le terrain et rapports d'itérations"
        ]
      },
      modules: [
        {
          name: "Design Inclusif & Lisibilité",
          desc:
            "Contraste élevé adapté à la forte luminosité extérieure d'Abidjan. Choix typographiques et iconographiques assurant une lisibilité maximale pour tous les profils d'usagers.",
          color: "#0FEFB4",
        },
        {
          name: "Représentation du Réseau Informel",
          desc:
            "Modélisation visuelle des arrêts et correspondances pour les gbakas et wôrô-wôrôs, traduisant graphiquement des données de transport non structurées.",
          color: "#0FEFB4",
        },
        {
          name: "Design System Évolutif (UI Kit)",
          desc:
            "Mise en place d'un framework UI documenté permettant aux développeurs d'intégrer rapidement les nouvelles vues et fonctionnalités sans dérive esthétique.",
          color: "#0FEFB4",
        },
      ],
      highlights: [
        { label: "Rôle", value: "Lead UX/UI Designer" },
        { label: "Livrables", value: "Prototypes interactifs & UI Kit" },
        { label: "Impact Dev", value: "-35% de temps sur l'intégration UI" },
        { label: "Méthode", value: "Design Thinking / Double Diamond" },
      ],
    },
  },
  {
    id: "babitrack",
    category: "Étude de cas UX/UI",
    title: "BabiTrack — Suivi de Flotte",
    subtitle: "Plateforme web et mobile de tracking & logistique en temps réel",
    tags: ["UX/UI Design", "Figma", "Dashboard", "Logistique", "Data Visualization"],
    description:
      "Design de l'interface de BabiTrack, un système de géolocalisation et de suivi de flotte en temps réel conçu pour les entreprises de livraison et de transport en Côte d'Ivoire. Le projet met l'accent sur la visualisation de données télémétriques complexes sans surcharge cognitive pour l'opérateur.",
    image: new URL("../assets/images/babitrack.png", import.meta.url).href,
    imageAlt: "Aperçu de l'étude de cas BabiTrack",
    liveUrl: null,
    figmaUrl: null,
    isUxCaseStudy: true,
    details: {
      heroBadges: ["Confidentiel", "Dashboard", "Data Viz"],
      architecture: [
        {
          label: "1. CONTEXTUAL INQUIRY",
          main: "Immersion & Analyse d'Activité",
          detail:
            "Observation d'une journée de travail de répartiteurs de flotte. Identification du besoin de gestion du stress : les opérateurs ont besoin de voir instantanément le statut d'un véhicule et de gérer les alertes en moins de 3 secondes.",
        },
        {
          label: "2. CONCEPT DESIGN",
          main: "Dashboard Centralisé & Alerting",
          detail:
            "Idéation d'une structure à trois volets : carte centrale dynamique, liste de flotte filtrable par statut et panneau latéral contextuel pour les détails télémétriques.",
        },
        {
          label: "3. DESIGN SYSTEM & TESTS",
          main: "UI Sombre & Composants Télémétriques",
          detail:
            "Conception d'une interface à thème sombre natif (réduction de la fatigue visuelle pour le travail en 24/7). Création de widgets de dataviz (vitesse, carburant, température moteur).",
        },
      ],
      operations: {
        transfers: [
          "Analyse de tâches et workflows des gestionnaires de flotte",
          "Zoning & structures de mise en page pour écrans larges",
          "Design de flux d'alertes & gestion des notifications prioritaires",
          "Création de personas opérationnels"
        ],
        withdrawals: [
          "Prototypes haute fidélité interactifs (Figma Web + Mobile)",
          "Librairie de widgets télémétriques et d'indicateurs de statut",
          "Guide de styles visuels & spécifications d'animations UI",
          "Spécifications de handoff détaillées pour les développeurs"
        ]
      },
      modules: [
        {
          name: "Visualisation de Données (Dataviz)",
          desc:
            "Transformation de flux JSON bruts (coordonnées, vitesse, capteurs) en graphiques et indicateurs visuels clairs et immédiats.",
          color: "#0FEFB4",
        },
        {
          name: "Système de Notification Graduel",
          desc:
            "Code couleur et signalétique UX étudiés pour hiérarchiser les urgences (panne moteur, sortie de zone autorisée, excès de vitesse).",
          color: "#0FEFB4",
        },
        {
          name: "Handoff Technique Fluide",
          desc:
            "Organisation des maquettes Figma avec des tokens CSS clairs, facilitant le travail d'intégration des développeurs Front-end.",
          color: "#0FEFB4",
        },
      ],
      highlights: [
        { label: "Rôle", value: "UX/UI Designer & Intégrateur" },
        { label: "Livrables", value: "Maquettes Figma & Widget Library" },
        { label: "Réaction Opérateurs", value: "-45% de temps de traitement des pannes" },
        { label: "Focus", value: "Dataviz & Ergonomie Télématique" },
      ],
    },
  },
  {
    id: "jvmr-agricole",
    category: "Étude de cas UX/UI",
    title: "JVMR — Secteur Agricole",
    subtitle: "Plateforme d'accompagnement et de suivi du secteur agricole",
    tags: ["UX/UI Design", "Figma", "Agriculture", "Mobile App", "Recherche Utilisateur"],
    description:
      "Design UX/UI complet de la plateforme JVMR Agricole, une application conçue pour moderniser et optimiser la gestion des exploitations, le suivi des cultures et la prise de décision. Cette étude de cas illustre le travail de recherche terrain auprès des producteurs et la conception d'interfaces lisibles, iconographiques et accessibles adaptées aux contraintes du secteur.",
    image: new URL("../assets/images/jvmr-agricole.jpg", import.meta.url).href,
    imageAlt: "Aperçu de l'étude de cas JVMR Agricole",
    liveUrl: null,
    figmaUrl: "https://www.figma.com/design/quzHAy9ZV5oHW22L7d9XdX/JVMR?node-id=0-1&t=GSyrZEKEr2g387VO-1",
    isUxCaseStudy: true,
    details: {
      heroBadges: ["UX/UI Design", "Figma", "Agriculture"],
      architecture: [
        {
          label: "1. RECHERCHE & DIAGNOSTIC",
          main: "Analyse des besoins terrain",
          detail:
            "Immersion auprès de coopératives agricoles pour identifier les défis des producteurs : suivi de la météo, gestion des intrants, planification des récoltes et accès direct aux cours du marché.",
        },
        {
          label: "2. WIREFRAMES & ERGONOMIE",
          main: "Architecture d'Information & Flux",
          detail:
            "Zoning et création d'un arborescence simplifiée pour terminaux mobiles à petit écran. Focus sur la lisibilité, l'épuration visuelle et la forte utilisation d'éléments iconographiques explicites.",
        },
        {
          label: "3. UI SYSTEM & PROTOTYPE",
          main: "Charte Visuelle & Prototypes Figma",
          detail:
            "Définition d'un Design System aux tons naturels (vert, terreux), intégrant des icônes sur mesure (tracteur, météo, drone, eau). Prototypage interactif haute fidélité pour validation terrain.",
        },
      ],
      operations: {
        transfers: [
          "Recherches utilisateurs & interviews avec les producteurs locaux",
          "Cartographie des parcours utilisateurs (Customer Journey Maps)",
          "Zoning d'interface et arborescence de navigation mobile",
          "Wireframes basse et moyenne fidélité"
        ],
        withdrawals: [
          "Prototypes interactifs haute fidélité sous Figma (Mobile)",
          "Design System agricole complet (composants réutilisables, styles, palettes)",
          "Iconographie sur mesure explicite pour les fonctionnalités clés",
          "Spécifications UI complètes pour l'équipe de développement front-end"
        ]
      },
      modules: [
        {
          name: "Iconographie Explicitée",
          desc:
            "Jeu d'icônes spécifiques (drone, météo, cultures, eau) facilitant une navigation fluide et intuitive, même pour les utilisateurs peu technophiles.",
          color: "#10b981",
        },
        {
          name: "Tableaux de Bord Accessibles",
          desc:
            "Écrans de suivi clairs (température, humidité, prévisions) simplifiant la prise de décision et le suivi des cultures au quotidien.",
          color: "#10b981",
        },
        {
          name: "Design System Agricole",
          desc:
            "Composants réutilisables et charte graphique cohérente valorisant les codes du secteur agricole, garantissant une intégration harmonieuse.",
          color: "#10b981",
        },
      ],
      highlights: [
        { label: "Rôle", value: "Designer UX/UI" },
        { label: "Livrables", value: "Maquettes Figma & UI Kit" },
        { label: "Focus", value: "Ergonomie, Accessibilité & Terrain" },
        { label: "Méthodologie", value: "Design Thinking / Recherche terrain" },
      ],
    },
  },
  {
    id: "laundry-saas",
    category: "Application web SaaS",
    title: "Laundry Platform — Gestion Pressing",
    subtitle: "Système multi-tenant de gestion complète",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Multi-tenant"],
    description:
      "Plateforme SaaS de gestion pour pressing : commandes, trésorerie, facturation et suivi techniciens. Architecture multi-tenant avec Next.js, Express et PostgreSQL, pensée pour le marché Afrique de l'Ouest (FCFA).",
    image: new URL("../assets/images/laundry-dashboard.png", import.meta.url).href,
    imageAlt: "Aperçu du tableau de bord Laundry Platform",
    liveUrl: null,
    figmaUrl: null,
    details: {
      heroBadges: ["Multi-tenant", "FCFA", "Facturation"],
      architecture: [
        {
          label: "FRONTEND",
          main: "Next.js",
          detail:
            "Portail multi-tenant, expérience rapide, pages SSR/ISR pour certaines vues.",
        },
        {
          label: "BACKEND",
          main: "Node.js + Express",
          detail:
            "API REST, gestion commandes/clients, règles métier (paiement, statut, livraison).",
        },
        {
          label: "BASE DE DONNÉES",
          main: "PostgreSQL",
          detail:
            "Isolation par tenant, historisation, reporting trésorerie et facturation.",
        },
      ],
      highlights: [
        { label: "Multi-tenant", value: "Un espace par pressing" },
        { label: "Facturation", value: "Devis, factures, suivi paiements" },
        { label: "Suivi techniciens", value: "Attribution & avancement" },
        { label: "Monnaie", value: "FCFA" },
      ],
    },
  },
  {
    id: "money-center",
    category: "Application Fintech",
    title: "Money-Center — Transfert & Retrait",
    subtitle: "Plateforme multi-opérateurs de transfert d'argent",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Fintech", "API"],
    description:
      "Money-Center centralise les opérations de transfert et retrait d'argent (cash & mobile money) pour un réseau d'agences. Gestion multi-opérateurs (Orange, Wave, MTN…), frais configurables, taux de change système ou API, compensation inter-agences et reporting complet.",
    image: new URL("../assets/images/money-center.png", import.meta.url).href,
    imageAlt: "Aperçu du dashboard Money-Center",
    liveUrl: null,
    figmaUrl: null,
    details: {
      heroBadges: ["Multi-money", "Multi-agences"],
      architecture: [
        {
          label: "FRONTEND",
          main: "Next.js",
          detail:
            "Dashboard temps réel, interfaces opérateur & admin, SSR pour les rapports.",
        },
        {
          label: "BACKEND",
          main: "Node.js + Express",
          detail:
            "REST API, moteur de calcul frais/taux, intégration opérateurs mobile money.",
        },
        {
          label: "BASE DE DONNÉES",
          main: "PostgreSQL",
          detail:
            "Transactions atomiques, traçabilité complète, isolation par agence.",
        },
      ],
      operations: {
        transfers: [
          "Cash to cash (entre agences)",
          "Cash to mobile money",
          "Mobile money to cash",
          "Mobile to mobile (multi-opérateurs)",
        ],
        withdrawals: [
          "Retrait cash (guichet agence)",
          "Retrait mobile money",
          "Retrait multi-comptes",
          "Vérification de solde en temps réel",
        ],
      },
      modules: [
        {
          name: "Dashboard",
          desc:
            "Vue globale : volumes de transactions, soldes agences, alertes et KPIs en temps réel.",
          color: "",
        },
        {
          name: "Gestion des transferts",
          desc:
            "Initiation, suivi et validation des transferts cash et mobile money multi-opérateurs.",
          color: "",
        },
        {
          name: "Gestion des retraits",
          desc:
            "Traitement des retraits cash et mobile, vérification d'identité et validation.",
          color: "",
        },
        {
          name: "Gestion des agences",
          desc:
            "Paramétrage des points de service, soldes, limites de transaction et agents rattachés.",
          color: "",
        },
        {
          name: "Frais & Taux de change",
          desc:
            "Barèmes de frais configurables + intégration API de taux de change en temps réel.",
          color: "",
        },
        {
          name: "Compensation",
          desc:
            "Calcul et règlement de la compensation inter-agences et inter-opérateurs.",
          color: "",
        },
        {
          name: "Reporting",
          desc:
            "Rapports journaliers/mensuels, exports, audit trail et réconciliation comptable.",
          color: "",
        },
      ],
      highlights: [
        { label: "Opérateurs supportés", value: "Orange, Wave, MTN, Moov…" },
        { label: "Taux de change", value: "Système interne ou API externe" },
        { label: "Traçabilité", value: "100% des transactions loggées" },
        { label: "Multi-agences", value: "Réseau d'agences centralisé" },
      ],
    },
  },
  {
    id: "post-it",
    category: "Application web",
    title: "Post It — WeCode",
    subtitle: "Notes collaboratives numériques",
    tags: ["Vue.js", "API REST", "UI"],
    description:
      "Post It numérise le concept de post-it : création, organisation et partage de notes dans une interface claire et réactive, avec un front Vue.js connecté à une API dédiée.",
    image: new URL("../assets/images/Frame19.png", import.meta.url).href,
    imageAlt: "Aperçu du projet Post It",
    liveUrl: "https://post-it-wecode-project.netlify.app/#/",
    figmaUrl: null,
  },
  {
    id: "trello-clone",
    category: "Application web",
    title: "Clone Trello — WeCode",
    subtitle: "Tableaux et cartes de tâches",
    tags: ["Vue.js", "WordPress API", "Kanban"],
    description:
      "Application de gestion de tâches façon kanban : colonnes, cartes et collaboration, avec Vue.js côté interface et WordPress comme backend pour les données.",
    image: new URL("../assets/images/trello.jpg", import.meta.url).href,
    imageAlt: "Aperçu du clone Trello",
    liveUrl: null,
    figmaUrl: null,
  },
  {
    id: "my-shop",
    category: "E-commerce",
    title: "My Shop — WeCode",
    subtitle: "Boutique en ligne full stack",
    tags: ["Laravel", "PHP", "E-commerce"],
    description:
      "Plateforme e-commerce avec gestion des produits, commandes et comptes utilisateurs, pensée pour un parcours d’achat fluide et sécurisé.",
    image: new URL("../assets/images/logo/ashion.jpg", import.meta.url).href,
    imageAlt: "Aperçu du projet My Shop",
    liveUrl: "https://genius.lux-gabon.com/#",
    figmaUrl: null,
  },
  {
    id: "lux-gabon",
    category: "Site institutionnel",
    title: "Lux Gabon",
    subtitle: "Site web pour une ONG",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      "Site pour l’ONG Lux Gabon (lien Luxembourg) : présentation des actions, pages structurées et mise en ligne soignée pour renforcer la visibilité de l’organisation.",
    image: new URL("../assets/images/logo/luxgabon.jpg", import.meta.url).href,
    imageAlt: "Aperçu du site Lux Gabon",
    liveUrl: null,
    figmaUrl: null,
  },
  {
    id: "igospel",
    category: "Média & design",
    title: "iGospel Magazine",
    subtitle: "Maquette et site",
    tags: ["Figma", "Communauté", "Média"],
    description:
      "Conception d’une plateforme moderne pour la communauté chrétienne : mise en avant du magazine (foi, inspiration, actualité) avec une navigation intuitive.",
    image: new URL("../assets/images/gospel.jpg", import.meta.url).href,
    imageAlt: "Aperçu iGospel Magazine",
    liveUrl: "https://igospelmagazine.com/",
    figmaUrl:
      "https://www.figma.com/proto/9o9QIrhdakOavJcNbR4BBh/I-Gospel-Magazine?t=mwnDloiZdgBiVo6B-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-4&starting-point-node-id=2%3A4",
  },
  {
    id: "val-tech-apple",
    category: "E-commerce & design",
    title: "VAL-TECH Apple Store",
    subtitle: "Vente d’appareils Apple",
    tags: ["Figma", "E-commerce", "Apple"],
    description:
      "Maquette et site orientés catalogue Apple : mise en page épurée, hiérarchie visuelle forte et parcours d’achat lisible sur mobile comme sur desktop.",
    image: new URL("../assets/images/val-tech-apple.jpg", import.meta.url).href,
    imageAlt: "Aperçu VAL-TECH Apple Store",
    liveUrl: "https://val-techapplestore.com/",
    figmaUrl:
      "https://www.figma.com/proto/NhFF84Oj86KKoMq2r7b3RT/Val-Tech-Apple-Store-2?node-id=64-38&node-type=canvas&t=GkuWgPpRfa7uFaY6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2",
  },
  {
    id: "val-tech-plus",
    category: "E-commerce & design",
    title: "VAL-TECH Plus",
    subtitle: "Multi-marques téléphonie",
    tags: ["Figma", "E-commerce", "Responsive"],
    description:
      "Même exigence de clarté que pour Apple Store, étendue à un catalogue multi-marques : focus sur la lisibilité des fiches produits et la conversion.",
    image: new URL("../assets/images/val-tech-plus.jpg", import.meta.url).href,
    imageAlt: "Aperçu VAL-TECH Plus",
    liveUrl: "https://www.val-techplus.com/",
    figmaUrl:
      "https://www.figma.com/proto/vPa3NBpcVHP0vjCAGClGiK/Val-tech-Plus-2?node-id=2-2&node-type=canvas&t=ZUvRZOUh15bpcYaP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}


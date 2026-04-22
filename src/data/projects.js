export const projects = [
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


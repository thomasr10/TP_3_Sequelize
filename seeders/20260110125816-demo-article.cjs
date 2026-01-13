'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles', [
      {
        title: "Les bases indispensables de Node.js pour débuter",
        content: "Node.js repose sur un moteur JavaScript performant et un modèle événementiel non bloquant. Comprendre les modules, le système de fichiers et les callbacks est essentiel pour démarrer.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Pourquoi Express est le framework le plus utilisé en backend JS",
        content: "Express offre une structure minimaliste mais flexible. Il permet de créer des APIs robustes grâce à ses middlewares et son système de routing simple.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre les middlewares Express en profondeur",
        content: "Les middlewares permettent d'intercepter les requêtes et d'ajouter des fonctionnalités comme la validation, l’authentification ou la gestion des erreurs.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Introduction aux Webhooks et leur utilisation",
        content: "Les webhooks permettent à un service d'envoyer automatiquement des données à un autre via HTTP. Ils sont essentiels pour les intégrations modernes.",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comment structurer un projet Express de manière scalable",
        content: "Séparer routes, controllers, services et middlewares permet de maintenir un code propre et évolutif, surtout dans les projets de grande taille.",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les avantages de l’architecture MVC en JavaScript",
        content: "Le pattern MVC sépare la logique métier, la gestion des données et l’affichage. Cela améliore la maintenabilité et la testabilité.",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre les tokens JWT pour sécuriser une API",
        content: "Les JWT permettent une authentification stateless. Ils doivent être signés et idéalement stockés dans des cookies HTTPOnly.",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comment fonctionne bcrypt pour hasher les mots de passe",
        content: "Bcrypt applique un algorithme de hachage lent et salé, rendant les attaques par force brute beaucoup plus difficiles.",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Pourquoi utiliser un ORM comme Sequelize",
        content: "Sequelize simplifie les interactions avec la base de données grâce à ses modèles, migrations et associations.",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les migrations Sequelize expliquées simplement",
        content: "Les migrations permettent de versionner la structure de la base et d’assurer une cohérence entre environnements.",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre les associations Sequelize",
        content: "Les relations One-to-Many, Many-to-Many et One-to-One permettent de modéliser des structures complexes dans la base.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Optimiser les performances d’une API Node.js",
        content: "La mise en cache, la compression et la limitation des requêtes sont des techniques essentielles pour améliorer les performances.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre le fonctionnement du Event Loop",
        content: "Le Event Loop gère l’exécution asynchrone en JavaScript. Il orchestre la pile d’appels, la queue de tâches et les microtasks.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les promesses en JavaScript : guide complet",
        content: "Les promesses permettent de gérer l’asynchronisme proprement. Elles évitent le callback hell et améliorent la lisibilité.",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Async/Await : simplifier l’asynchronisme",
        content: "Async/await permet d’écrire du code asynchrone comme du code synchrone, rendant la logique plus claire.",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Pourquoi utiliser TypeScript dans vos projets",
        content: "TypeScript ajoute un typage statique qui réduit les erreurs et améliore l’autocomplétion et la documentation.",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les interfaces et types en TypeScript",
        content: "Les interfaces permettent de définir des contrats clairs pour les objets, améliorant la robustesse du code.",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre le DOM et ses manipulations",
        content: "Le DOM représente la structure HTML sous forme d’arbre. Manipuler ses nœuds permet de créer des interfaces dynamiques.",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les bonnes pratiques CSS pour un code maintenable",
        content: "Utiliser BEM, des variables CSS et des fichiers modulaires permet de garder un style propre et scalable.",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Introduction à SCSS et ses avantages",
        content: "SCSS ajoute des fonctionnalités comme les variables, mixins et nesting, facilitant l’écriture de styles complexes.",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Créer un design system moderne",
        content: "Un design system centralise les composants, couleurs et règles UX pour assurer cohérence et rapidité de développement.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les bases de React pour débuter",
        content: "React repose sur les composants, les props et le state. Comprendre ces concepts est essentiel pour démarrer.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre le Virtual DOM",
        content: "Le Virtual DOM permet à React d’optimiser les mises à jour en comparant deux arbres virtuels avant d’appliquer les changements.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les hooks React indispensables",
        content: "useState, useEffect et useContext permettent de gérer l’état, les effets et le partage de données dans l’application.",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Créer une API REST propre et maintenable",
        content: "Une API REST doit respecter des conventions claires : endpoints cohérents, statuts HTTP corrects et validation des données.",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les statuts HTTP expliqués simplement",
        content: "Les statuts HTTP indiquent le résultat d’une requête. 200 signifie succès, 404 ressource introuvable, 500 erreur serveur.",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Pourquoi utiliser Postman pour tester vos APIs",
        content: "Postman permet de tester rapidement les endpoints, d’automatiser des scénarios et de documenter l’API.",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Comprendre CORS et comment le configurer",
        content: "CORS contrôle quelles origines peuvent accéder à votre API. Une mauvaise configuration peut bloquer les requêtes front-end.",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les bonnes pratiques Git pour les équipes",
        content: "Utiliser des branches claires, des commits explicites et des pull requests bien structurées améliore la collaboration.",
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Introduction à Docker pour les développeurs",
        content: "Docker permet d’isoler les environnements et de garantir que l’application fonctionne de la même manière partout.",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Article', null, {});

  }
};

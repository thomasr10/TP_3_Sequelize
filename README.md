# 📝 Application de création d’articles

## 📖 Description

Ce projet est une **petite application de création d’articles** avec un système **d’inscription et de connexion** des utilisateurs.

L’application implémente les fonctionnalités **CRUD** classiques :

- Créer un article
- Lire les articles
- Modifier un article
- Supprimer un article

🔐 **Règles d’accès :**
- Un utilisateur peut **modifier et supprimer uniquement ses propres articles**
- Il est **obligatoire d’être connecté** pour :
  - Créer un article
  - Modifier un article
  - Supprimer un article

## 🛠️ Technologies utilisées

- **Node.js**
- **Express**
- **Sequelize**
- **MySQL**

## ⚙️ Installation

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/thomasr10/TP_3_Sequelize.git
```

### 2️⃣ Installer les dépendances
```bash
npm install
```
### 3️⃣ Configuration de l’environnement

- Copier le fichier .env-example
- Le renommer en .env
- Remplir les variables d’environnement nécessaires (BDD, utilisateur, mot de passe, etc.)

```bash
cp .env-example .env
```

### 4️⃣ Créer la base de données
```bash
npx sequelize db:create
```
### 5️⃣ Lancer les migrations
```bash
npx sequelize db:migrate
```

### 6️⃣ Insérer les données de seed
```bash
npx sequelize db:seed:all
```

### 7️⃣ Lancer le serveur
```bash
npm run dev
```
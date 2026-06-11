# ⚽ Pronos CDM 2026

Application de pronostics pour la Coupe du Monde 2026.

---

## 🚀 Déploiement sur Vercel (étape par étape)

### ÉTAPE 1 — Créer un compte GitHub
1. Allez sur **github.com**
2. Cliquez **"Sign up"** → créez un compte gratuit
3. Vérifiez votre email

---

### ÉTAPE 2 — Mettre le projet sur GitHub
1. Une fois connecté, cliquez **"New repository"** (bouton vert)
2. Nommez-le `cdm2026-pronos`
3. Laissez tout par défaut → cliquez **"Create repository"**
4. Sur la page suivante, cliquez **"uploading an existing file"**
5. Glissez-déposez les fichiers dans cet ordre :
   - `package.json`
   - `pages/index.jsx`
   - `pages/api/scores.js`
6. Cliquez **"Commit changes"**

---

### ÉTAPE 3 — Créer un compte Vercel
1. Allez sur **vercel.com**
2. Cliquez **"Sign Up"**
3. Choisissez **"Continue with GitHub"** → autorisez l'accès
4. Vercel et GitHub sont maintenant liés ✅

---

### ÉTAPE 4 — Déployer le projet
1. Sur Vercel, cliquez **"Add New Project"**
2. Vous verrez votre repo `cdm2026-pronos` → cliquez **"Import"**
3. Laissez tout par défaut
4. **IMPORTANT** : Avant de cliquer Deploy, allez dans **"Environment Variables"**

---

### ÉTAPE 5 — Ajouter la clé API (indispensable pour les scores auto)
Dans la section **Environment Variables** :
- **Name** : `ANTHROPIC_API_KEY`
- **Value** : votre clé API Anthropic (commence par `sk-ant-...`)
- Cliquez **"Add"**

> 💡 Votre clé API se trouve sur **console.anthropic.com** → API Keys

---

### ÉTAPE 6 — Lancer le déploiement
1. Cliquez **"Deploy"**
2. Attendez 1-2 minutes ☕
3. Vercel vous donne une URL du type :
   **`cdm2026-pronos.vercel.app`**

---

### ÉTAPE 7 — Partager sur WhatsApp 🎉
Copiez l'URL et envoyez-la sur votre groupe WhatsApp.
Tout le monde l'ouvre dans son navigateur — aucune installation !

---

## ⚙️ Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| 📝 Pronos | Chaque joueur saisit ses pronostics avant le match |
| 🔒 Verrouillage | Les pronos se verrouillent au coup d'envoi |
| 👥 Voir tout le monde | Les pronos des autres visibles après le coup d'envoi |
| 🌐 Scores auto | Import automatique des résultats via IA (admin) |
| 🏆 Classement | Mise à jour en temps réel |
| 🎯 Système de points | 5 pts score exact / 3 pts bon score + vainqueur / 2 pts vainqueur / 1 pt différence / 0 pt raté |

---

## 🔐 Mot de passe admin
`cdm2026`

---

## 📁 Structure du projet
```
cdm2026-pronos/
├── pages/
│   ├── index.jsx        ← Application principale
│   └── api/
│       └── scores.js    ← Route serveur (clé API cachée)
├── package.json
└── README.md
```

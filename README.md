# 📌 TypeScript Project

## 📖 Description
Ce projet a pour objectif de découvrir et de pratiquer les notions fondamentales de **TypeScript**, en couvrant aussi bien les types de base que des concepts plus avancés comme :  

- Les **types primitifs**  
- Les **interfaces** et **classes**  
- La **manipulation du DOM**  
- Les **types génériques**  
- L’usage des **namespaces** et la fusion de déclarations  
- L’utilisation d’un **ambient namespace** pour importer une librairie externe  
- Le **typing nominal** de base  

Tous les fichiers sources sont écrits en **TypeScript (.ts)** et compilés vers **JavaScript**.  
Les tests sont effectués avec **Jest (v24.9.\*)**.  

---

## 📚 Ressources
Avant de commencer, il est recommandé de consulter :  

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)  
- [TypeScript DOM Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)  
- [TypeScript Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)  
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)  

---

## 🎯 Objectifs d’apprentissage
À la fin de ce projet, vous serez capable d’expliquer sans aide externe :  

✅ Les types de base en TypeScript  
✅ L’utilisation des interfaces, classes et fonctions  
✅ Comment manipuler le DOM avec TypeScript  
✅ Les types génériques  
✅ L’usage des namespaces  
✅ La fusion de déclarations  
✅ Comment utiliser un ambient namespace pour importer une librairie externe  
✅ Le typing nominal de base avec TypeScript  

---

## ⚙️ Environnement & Contraintes
- **Éditeurs autorisés** : `vi`, `vim`, `emacs`, `Visual Studio Code`  
- Tous les fichiers doivent **se terminer par une nouvelle ligne**  
- Les fichiers seront transpilés sur **Ubuntu 18.04**  
- Les scripts TypeScript seront testés avec **Jest 24.9.\***  
- Un fichier **README.md** est obligatoire à la racine du projet  
- L’extension **.ts** doit être utilisée quand c’est possible  
- Le compilateur TypeScript ne doit afficher **aucun warning ou erreur**  

---

## 🚀 Installation & Utilisation

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/votre-repo/ts-project.git
cd ts-project
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Compiler le projet
```bash
npx tsc
```

### 4️⃣ Lancer les tests
```bash
npm test
```

---

## 📂 Structure du projet
```
.
├── src/              # Fichiers sources TypeScript (.ts)
├── dist/             # Fichiers compilés JavaScript (.js)
├── tests/            # Fichiers de tests Jest
├── tsconfig.json     # Configuration TypeScript
├── package.json      # Dépendances et scripts npm
└── README.md         # Documentation du projet
```
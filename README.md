# gestion-bibliotheque-js
# Atelier JavaScript POO - Livrable

## 📝 Mini-Rapport Technique

### 🚗 Exercice 1 - Héritage Automobile (ex1.js)
- **Implémentation** : 
  - Classes `Voiture`, `Hyundai`, `Ford` avec héritage
  - Tri des véhicules par année (`sort()`)
- **Points clés** : 
  ```javascript
  class Hyundai extends Voiture {
    constructor(model, marque, annee, serie) {
      super(model, marque, annee);
      this.serie = serie;
    }
  }
Exercice 2 - Système Éducatif (ex2.js)
Réalisation :

Classes Etudiant/Professeur avec méthodes dédiées

Tri multi-critères (nom → prénom → âge)

Technique :
etudier() {
  return `${this.prenom} étudie`;
}

Exercice 3 - Géométrie (ex3.js)
Classes implémentées :

Vecteur2D (addition de vecteurs)

Rectangle → Carre (héritage)

Segment (composition avec Point)

Méthodes :
additionner(vecteur) {
  return new Vecteur2D(this.x + vecteur.x, this.y + vecteur.y);
}

Exercice 4 - Mini Blog (ex4.js)
Fonctionnalités :

Sérialisation JSON complète

Persistance via localStorage

Gestion des posts/utilisateurs

Extrait :

toJSON() {
  return {
    posts: this.posts.map(post => post.toJSON())
  };
}

Exercice 5 - Bibliothèque (ex5.js)
Structures :

Structure	Méthodes utilisées
Array	push/pop/shift/unshift
Set	add/delete/has
Map	set/get/delete
▶ Exécution

# Lancer un exercice (remplacer N par 1-5)
node exN.js

# Pour le blog (exercice 4) :
open ex4.html  # ou double-clic dans l'explorateur


Auteur:Oubay Azibou

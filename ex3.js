class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        return `Vecteur(${this.x}, ${this.y})`;
    }

    additionner(autreVecteur) {
        return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
}

class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    afficher() {
        return `${this.nom} - Longueur: ${this.longueur}, Largeur: ${this.largeur}`;
    }

    surface() {
        return this.longueur * this.largeur;
    }
}

class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }

    afficher() {
        return `Segment: [(${this.orig.x},${this.orig.y}) → (${this.extrem.x},${this.extrem.y})]`;
    }
}


const v1 = new Vecteur2D();
const v2 = new Vecteur2D(3, 4);
const v3 = new Vecteur2D(1, 2);

console.log("=== Vecteurs ===");
console.log(v1.afficher()); 
console.log(v2.afficher());
console.log("Somme:", v2.additionner(v3).afficher());

const rect = new Rectangle(5, 3);
const carre = new Carre(4);

console.log("\n=== Rectangles ===");
console.log(rect.afficher()); // rectangle - Longueur: 5, Largeur: 3
console.log("Surface:", rect.surface()); // 15
console.log(carre.afficher()); // carré - Longueur: 4, Largeur: 4
console.log("Surface carré:", carre.surface()); // 16

const seg = new Segment(1, 1, 4, 5);
console.log("\n=== Segment ===");
console.log(seg.afficher()); // Segment: [(1,1) → (4,5)]
class Bibliotheque {
    constructor() {
        this.books = ['Le Petit Prince', '1984', 'Le Seigneur des Anneaux'];
        
        this.categories = new Set(['Fiction', 'Science', 'Histoire']);
        
        this.borrows = new Map();
    }

    gererLivres() {
        console.log("=== Gestion des livres ===");
        
        console.log("Livres initiaux:", this.books);
        
        this.books.push("Harry Potter");
        console.log("Après push:", this.books);
        
        this.books.unshift("L'Alchimiste");
        console.log("Après unshift:", this.books);
        
        this.books.pop();
        console.log("Après pop:", this.books);
        
        this.books.shift();
        console.log("Après shift:", this.books);
    }

    gererCategories() {
        console.log("\n=== Gestion des catégories ===");
        
        console.log("Catégories initiales:", [...this.categories]);
        
        this.categories.add("Fantasy");
        console.log("Après ajout Fantasy:", [...this.categories]);
        
        this.categories.add("Fiction");
        console.log("Après tentative doublon Fiction:", [...this.categories]);
        
        this.categories.delete("Science");
        console.log("Après suppression Science:", [...this.categories]);
    }

    gererEmprunts() {
        console.log("\n=== Gestion des emprunts ===");
        
        this.borrows.set("Le Petit Prince", "Jean Dupont");
        this.borrows.set("1984", "Marie Martin");
        this.borrows.set("Le Seigneur des Anneaux", "Pierre Durand");
        console.log("Après ajout 3 emprunts:", this.mapToObj(this.borrows));
        
        this.borrows.delete("1984");
        console.log("Après suppression 1984:", this.mapToObj(this.borrows));
        
        console.log("Harry Potter emprunté?", this.borrows.has("Harry Potter"));
        console.log("Le Petit Prince emprunté?", this.borrows.has("Le Petit Prince"));
    }

    mapToObj(map) {
        return Object.fromEntries(map.entries());
    }

    executer() {
        this.gererLivres();
        this.gererCategories();
        this.gererEmprunts();
    }
}

const biblio = new Bibliotheque();
biblio.executer();
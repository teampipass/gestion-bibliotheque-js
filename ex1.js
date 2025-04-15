class Voiture {
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}

const voitures = [
    new Voiture("Model S", "Tesla", 2020, "Berline", "Electrique"),
    new Voiture("Fiesta", "Ford", 2018, "Compacte", "Essence"),
    new Voiture("Tucson", "Hyundai", 2021, "SUV", "Hybride")
];

class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
        super(model, marque, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        return "Alarme activée!";
    }
}

class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
        super(model, marque, annee, type, carburant);
        this.options = options || [];
    }
}

voitures.push(
    new Hyundai("Ioniq", "Hyundai", 2022, "Berline", "Electrique", "NE", true),
    new Ford("Mustang", "Ford", 2019, "Sport", "Essence", ["Toit ouvrant", "Siège chauffant"])
);

voitures.sort((a, b) => a.annee - b.annee);

console.log("=== Voitures triées par année ===");
voitures.forEach(voiture => {
    let info = `${voiture.marque} ${voiture.model} (${voiture.annee})`;
    
    if (voiture instanceof Hyundai) {
        info += ` - Série: ${voiture.serie}, Hybride: ${voiture.hybride}`;
    } else if (voiture instanceof Ford) {
        info += ` - Options: ${voiture.options.join(', ')}`;
    }
    
    console.log(info);
});
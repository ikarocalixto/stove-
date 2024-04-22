// Importações
import Burner from './Burner.js'; 
import Oven from './Oven.js'; 

// Definição da classe Stove
class Stove {
    constructor(color, dimensions, brand) {
        this.color = color;
        this.dimensions = dimensions;
        this.brand = brand;
        this.burners = [
            new Burner("red"),
            new Burner("blue"),
            new Burner("green"),
            new Burner("yellow")
        ];
        this.oven = new Oven();
    }

    toggleBurner(index) {
        if (index < 0 || index >= this.burners.length) {
            console.error("Invalid burner index.");
            return;
        }
        this.burners[index].toggle();
    }

    toggleOvenLamp() {
        this.oven.toggleLamp();
    }
}

export default Stove; // Exportação padrão da classe Stove

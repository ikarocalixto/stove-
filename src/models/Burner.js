


class Burner {
    constructor(color) {
        this.color = color;
        this.isOn = false;
    }

    toggle() {
        this.isOn = !this.isOn;
        console.log(`Burner (${this.color}) is now ${this.isOn ? "on" : "off"}.`);
    }
}

export default Burner;  // Exportando como padrão
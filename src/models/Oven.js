class Oven {
    constructor() {
        this.lampOn = false;
    }

    toggleLamp() {
        this.lampOn = !this.lampOn;
        console.log(`Oven lamp is now ${this.lampOn ? "on" : "off"}.`);
    }
}
export default Oven;
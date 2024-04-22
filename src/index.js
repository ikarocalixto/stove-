import Stove from './models/Stove.js'; 

const stove = new Stove("stainless steel", "30x30x36 inches", "GenericBrand");

window.toggleBurner = function(index) {
    stove.toggleBurner(index);
    const burnerButtons = document.querySelectorAll(".burner");
    const burnerButton = burnerButtons[index];
    burnerButton.style.backgroundColor = stove.burners[index].isOn ? "darkred" : "red";
};

window.toggleOvenLamp = function() {
    stove.toggleOvenLamp();
    const ovenWindow = document.querySelector(".oven-window");
    ovenWindow.style.backgroundColor = stove.oven.lampOn ? "yellow" : "#ccc";
};

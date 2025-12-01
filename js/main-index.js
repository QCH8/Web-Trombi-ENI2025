//gestion de l'affichage liste
//import modules

//Should have : condition en fonction du h1 de la page (mettre un id sur les pages (doit ê le même sur chaque page))

import { initTab } from "./modules/initTab.js";
import { applyPrefs } from "./modules/handlingprefs.js";
import { initCards } from "./modules/initCards.js";
import { fetchJSON } from "./modules/fetchJSON.js";

let dataLoaded = [];

document.addEventListener("DOMContentLoaded", async () => {
    applyPrefs();

    dataLoaded = (await fetchJSON("promo.json")).apprenants;

    const pref = localStorage.getItem("prefDisplay") || "list";

    //check de l'input en fonction de la pref
    const radioToCheck = document.querySelector(`input[name="displayType"][value="${pref}"]`);
    if (radioToCheck) radioToCheck.checked = true;

    // Affichage initial
    if (pref === "list") {
        initTab(dataLoaded);
    } else if (pref === "grid") {
        initCards(dataLoaded);
    }

    // Écoute des radios pour toggle
    document.querySelectorAll('input[name="displayType"]').forEach(radio => {
        radio.addEventListener("click", event => {
            if (event.target.value === "list") {
                initTab(dataLoaded);
                toggleDisplay("table");
            } else if (event.target.value === "grid") {
                initCards(dataLoaded);
                toggleDisplay("cards");
            }
        });
    });
    toggleDisplay(pref === "list" ? "table" : "cards");
});

function toggleDisplay(mode) {
    const tableSection = document.getElementById("listPlace");
    const cardsSection = document.getElementById("cardsPlace");

    if (mode === "table") {
        tableSection.style.display = "";
        cardsSection.style.display = "none";
    } else {
        tableSection.style.display = "none";
        cardsSection.style.display = "";
    }
}
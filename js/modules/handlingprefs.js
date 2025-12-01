import { initTab } from "./initTab.js";
import { initCards } from "./initCards.js";



export function savePrefs(){
    const theme = document.getElementById("choice").value;
    const format = document.querySelector('input[name="prefDisplay"]:checked')?.value;

    localStorage.setItem("theme", theme);
    localStorage.setItem("prefDisplay", format);
}

export function applyPrefs(){
    const theme = localStorage.getItem("theme");
    const header = document.querySelector("header");
    if (theme === "option2"){
        document.body.classList.add("bg-dark", "text-white");
        if (header){header.classList.add("bg-dark","text-white")};
    } else {
        document.body.classList.remove("bg-dark", "text-white");
        if (header){header.classList.remove("bg-dark","text-white")};
    }
}

export function loadPrefsIntoForms(){
    const theme = localStorage.getItem("theme");
    const format = localStorage.getItem("prefDisplay");

    if(theme){
        document.getElementById("choice").value = theme;
    }

    if (format){
        const radio = document.querySelector(`input[name="prefDisplay"][value="${format}"]`);
        if (radio){ 
            radio.checked = true
        };
    }
}


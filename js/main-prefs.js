//page preference : doit stocker en local les préférences user:
//- le thème clair (blanc et bleu clair)

//-le theme sombre (bg sombre => couleur police passe en blanc)
import { applyPrefs, loadPrefsIntoForms, savePrefs } from "./modules/handlingprefs.js";



document.addEventListener("DOMContentLoaded", () => {
    applyPrefs();
    loadPrefsIntoForms();
});

document.getElementById("saveLocalStorage").addEventListener("click", () => {
    savePrefs();
    applyPrefs();
    console.log("Preférénces enregistrées");
});


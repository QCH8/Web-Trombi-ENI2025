import { applyPrefs } from "./modules/handlingprefs.js";
import { fetchJSON } from "./modules/fetchJSON.js";


applyPrefs();
let dataLoaded = [];


var map = L.map('map').setView([46.864, 1.84], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


dataLoaded = (await fetchJSON('promo.json')).apprenants;

initMapMarkers(dataLoaded);

function initMapMarkers(data){
    data.forEach(apprenant =>{
        const markLat = apprenant.coordonnees.latitude;
        const markLong = apprenant.coordonnees.longitude;
        if (!markLat || !markLong){
            return
        }

        L.marker([markLat, markLong])
            .addTo(map)
            .bindPopup(`<b>${apprenant.prenom} ${apprenant.nom}</b>`);
    })
}




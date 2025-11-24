window.onload = initTab;
// liste => récupération du data.json => boucle for each => 
// création des éléments HTML => insertion de la data

function initTab(){ 
    // Récupération du tbody de la "liste" des candidats
    const tbody = document.getElementById("bodyTab");

    fetchJSON('promo.json')
        .then(data=> {
            data.apprenants.forEach(apprenant => {
                //création de ligne pour chaque apprenant
                const tr = document.createElement('tr');
                //le fun des cellules
                
                // Nom
                const tdNom = document.createElement('td');
                tdNom.textContent = apprenant.nom;
                tr.appendChild(tdNom);

                //Prenom
                const tdPrenom = document.createElement('td');
                tdPrenom.textContent = apprenant.prenom;
                tr.appendChild(tdPrenom);
                
                //Ville
                const tdVille = document.createElement('td');
                tdVille.textContent = apprenant.ville;
                tr.appendChild(tdVille);

                //Détails
                const tdDetail = document.createElement('td');
                tdDetail.textContent = "Détails";
                tr.appendChild(tdDetail)

                tbody.appendChild(tr);
            })
        });
}

function fetchJSON(url){
    return fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error("Erreur import JSON");
        }
        return response.json();
    });
}







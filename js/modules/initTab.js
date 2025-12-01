import{fetchJSON} from './fetchJSON.js';


export function initTab(){ 
    // Récupération du tbody de la "liste" des candidats
    const tbody = document.getElementById("bodyTab");
    if (!tbody) {return};
    tbody.innerHTML = "";

    fetchJSON('promo.json')
        .then(data=> {
            data.apprenants.forEach(apprenant => {
                //création de ligne pour chaque apprenant
                const tr = document.createElement('tr');    
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
                tdDetail.innerHTML = `<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#detailsModal-${apprenant.id}">Détails</button>`;
                tr.appendChild(tdDetail)

                tbody.appendChild(tr);

                const modal = document.createElement('div');
                modal.innerHTML = `
                    <div class="modal fade" id="detailsModal-${apprenant.id}" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title">${apprenant.prenom} ${apprenant.nom}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="modal-body">
                                    <p><strong>Ville :</strong> ${apprenant.ville}</p>
                                    <p><strong>Anecdote :</strong> ${apprenant.anecdotes || "Pas d'infos"}</p>
                                    <img src="./ressources/avatars/avatar.png" class="img-fluid rounded" alt="avatar">
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                </div>

                            </div>
                        </div>
                    </div>`;
                document.body.appendChild(modal);
        });
    });
}
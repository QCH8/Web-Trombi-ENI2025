

export function initCards(data){
    const container = document.getElementById("cardsContainer");
    if (!container){return};

    container.innerHTML = "";

 data.forEach((apprenant) => {
        const col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "d-flex");

        col.innerHTML = `
            <div class="card p-3 shadow-sm h-100 w-100 d-flex flex-column text-center">
                <h3>${apprenant.prenom} ${apprenant.nom}</h3>
                <p>${apprenant.ville}</p>
                <button class="btn btn-primary mt-auto" 
                        data-bs-toggle="modal" 
                        data-bs-target="#detailsModal-${apprenant.id}">
                    Détails
                </button>
            </div>
        `;

        container.appendChild(col);

        const modal = document.createElement("div");
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
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.appendChild(modal);
    });
}

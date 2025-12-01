export function fetchJSON(url){
    return fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error("Erreur import JSON");
        }
        return response.json();
    });
}

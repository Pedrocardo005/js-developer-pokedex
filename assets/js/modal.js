var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

/**
 * @param {Number} id 
 */
function openModal(id) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
    const topModal = document.getElementById('top-modal');
    const bottomModal = document.getElementById('bottom-modal');

    modal.style.display = "block";

    fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
            const pokeFomarted = convertPokeApiDetailToPokemon(pokemon)
            const topHtml = `
                <span class="number">#${pokeFomarted.number}</span>
                <span class="name">${pokeFomarted.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokeFomarted.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <div class="img-pokemon">
                    <img src="${pokeFomarted.photo}" alt="${pokeFomarted.name}" width="150px">
                </div>
            `;

            topModal.classList.add(pokeFomarted.type);
            topModal.innerHTML = topHtml;

        });
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
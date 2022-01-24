// This function generate the code html of the card with the information
const generator = (object) => {
    const card = document.createElement('article');
    card.classList.add('card')

    card.innerHTML = `
    <article class="cards">
        <figure>
            <span>${object?.status}</span>
            <img src="${object?.image}" alt="Image of the character ${object?.name}">
        </figure>
        <div>
            <h3>${object?.name}</h3>
            <p>${object?.origin.name}</p>
        </div>
    </article>
    `;

    return card;
}
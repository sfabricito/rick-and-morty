// This function generate the code html of the card with the information
export const generator = (object) => {
    const card = document.createElement('article');
    card.classList.add('card')

    card.innerHTML = `
    <article class="cards">
        <div class="${object?.status}">
            <span title="${object?.status}"></span>
        </div>
        <img src="${object?.image}" alt="Image of the character ${object?.name}">
        <div class="info">
            <h3>${object?.name}</h3>
            <p>${object?.origin.name}</p>
        </div>
    </article>
    `;

    return card;
}

import ButtonsPagination from "../templates/ButtonsPagination/ButtonsPagination";

import getQuerySelector from "../utils/getQueryString";
import getData from "../utils/getData";

const Home = async () => {
    const data = await getData(null, getQuerySelector());
    const footer = null || document.getElementById('footer');

    const view = `
    <section id="main-cards" class="main-cards">
        ${data.results.map( character => `
        <article class="cards">
            <a href="#/${character.id}" class="card-link">
                <div class="Status">
                    <span title="${character.name}"></span>
                </div>
                <img src="${character.image}" alt="Image of the character ${character.name}">
                <div class="info">
                    <h3>${character.name}</h3>
                    <p>${character.origin.name}</p>
                </div>
            </a>
        </article>
        `
        ).join('')}
    </section>
    <div class="footer">
        ${ButtonsPagination(data.info)}
    </div>
    `;

    return view;
}

export default Home;
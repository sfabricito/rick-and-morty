import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    console.log(characters)

    const view = `
    <section id="main-cards" class="main-cards">
        ${characters.results.map( character => `
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
    <div class="main-btn">
        <button title="Show more characters" id="btn">Show more</button>
    </div>
    `
    return view;
}

export default Home;
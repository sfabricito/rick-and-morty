import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    history.pushState({page: 1}, "title 1", `${location.origin}/${location.search}`)
    const view = `
        <div class="Characters-container">
            <article class="Characters-card">
                <h2>${character.name}</h2>
                <div class="img-container">
                    <img src="${character.image}" alt="">
                </div>
            </article>

            <article class="Characters-card">
                <div class="Card-text">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last Location: <span>${character.location.name}</span></h3>
                </div>
            </article>
        </div>
        <div class="Character-back-btn">
            <a class="Back-btn" href="${location.href}" title="" id="btn">
                <div class="Back-btn-container">
                    <span>Back</span>
                </div>
            </a>
        </div>
    `
    return view;
}

export default Character;

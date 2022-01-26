import { fetchData } from "./utils/fetchData.js";
import { generator } from "./utils/generator.js";

//The url of the Rick and Morty API
const API = 'https://rickandmortyapi.com/api/character/';

// Get the element 'main-cards' to html by the 'ID'
const cardContent = document.getElementById('main-cards');

// Get the element 'main-btn' to html by the 'ID'
let btn = document.getElementById("btn");
// Save the lasted printed page of the API
let countPage = 1;

const printInformation = async () => {
    try{
        const data = await fetchData(`${API}?page=${countPage}`);
        if (data?.info?.next === null) return alert("No more characters");
        else{
            console.log(countPage);
            countPage++;
            console.log(countPage);
            data.results.map(character => {
                const card = generator(character);
                cardContent.appendChild(card);
            })
        }
    }
    catch (error){
        console.error(error);
    }
}

printInformation();

function callFunction() {
    printInformation()

};

btn.addEventListener('click', callFunction)
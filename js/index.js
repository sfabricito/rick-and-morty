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



// Combine the information of the module fetchData and generator
const printInformation = async () => {
    try{
        const data = await fetchData(`${API}?page=${countPage}`);
        if (data?.info?.next === null) return alert("No more characters");
        else{
            countPage++;
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


// Call the API and print the information for first time
printInformation();


// When the button is clicked call the API and print more information
function callFunction() {
    printInformation()

};

btn.addEventListener('click', callFunction)
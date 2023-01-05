import { API } from "../../env";

const getData = async (id, page) => {
    const apiURL = id ? `${API}/${id}` : `${API}?page=${page}`;
    console.log(API);
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    }
}

export default getData;
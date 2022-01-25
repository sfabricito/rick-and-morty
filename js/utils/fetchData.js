// Function to call the API with XMLHttpRequest. 
export const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true)
        xhttp.onreadystatechange = (event) => {
        // 4 because the request is complete
        if(xhttp.readyState === 4){
            // 200 because meaning that the response is 'OK'
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error' + url))
            } 
        }
        xhttp.send();
    })
};


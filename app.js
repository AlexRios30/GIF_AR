let myKey = "AIzaSyDUTfGgyYuWN-yBAQtDRjJwVMoPD8YKhOw";
let featuredUrl = "https://tenor.googleapis.com/v2/featured?key=" + myKey
const container = document.getElementById("container");
const input = document.getElementById("input");

window.addEventListener("DOMContentLoaded", apiFunction);
input.addEventListener("keyup", searchGif);

function createCard(data) {
    data["results"].map(results => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = results["media_formats"]["gif"]["url"];
        img.classList.add("img");
        
        div.appendChild(img);
        container.appendChild(div);
    })
}

function apiFunction() {
    fetch(featuredUrl)
    .then(response => response.json())
    .then(data => createCard(data))
}

function searchGif(event) {
    
    container.innerHTML="";
    let newUrl = "";

    if (input.value === "") {
        apiFunction();
    } else {
        newUrl =  `https://tenor.googleapis.com/v2/search?q=${event.target.value}&key=${myKey}`;
    }

    fetch(newUrl)
    .then(response => response.json())
    .then(data => createCard(data))
}
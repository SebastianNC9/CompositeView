import Header from "./components/header.js";
import SearchBar from "./components/searchbar.js";
import VideoCard from "./components/videocard.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const body = document.body;
    const header = new Header();
    body.prepend(header.render());

    
    const main = document.querySelector(".main");

    
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        const searchBar = new SearchBar();
        main.prepend(searchBar.render());
        cargarContenido("inicio"); 
    }
});


const data = {
    inicio: [
        { titulo: "Video 1", descripcion: "Descripción del video 1" },
        { titulo: "Video 2", descripcion: "Descripción del video 2" }
    ],
    suscripciones: [
        { titulo: "Canal A - Video 1", descripcion: "Nuevo video del Canal A" },
        { titulo: "Canal B - Video 2", descripcion: "Mira este contenido del Canal B" }
    ]
};

window.cargarContenido = function(seccion) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    if (seccion === "inicio" || seccion === "suscripciones") {
        const searchBar = new SearchBar();
        mainContent.appendChild(searchBar.render());
    }

    data[seccion].forEach(videoData => {
        const videoCard = new VideoCard(videoData.titulo, videoData.descripcion);
        mainContent.appendChild(videoCard.render());
    });
};

class VideoCard {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    render() {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        videoCard.innerHTML = `
            <div class="video-thumbnail">Aquí va una imagen</div>
            <div class="video-info">
                <div class="video-title">${this.titulo}</div>
                <div class="video-description">${this.descripcion}</div>
            </div>
        `;

        return videoCard;
    }
}

export default VideoCard;

class Header {
    render() {
        const header = document.createElement("header");
        header.classList.add("header");

        const title = document.createElement("h1");
        title.textContent = "Mi Sitio"; 

        header.appendChild(title);
        return header;
    }
}

export default Header;

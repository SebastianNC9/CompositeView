class SearchBar {
    render() {
        const searchContainer = document.createElement("div");
        searchContainer.classList.add("search-bar");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Buscar...");

        searchContainer.appendChild(input);
        return searchContainer;
    }
}

export default SearchBar;

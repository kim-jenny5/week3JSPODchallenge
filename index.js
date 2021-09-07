const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=200"

fetch(baseURL)
    .then(resp => resp.json())
    .then(pokemon => getPokemon(pokemon.results))

function getPokemon(pokemon) {
    // debugger
    const list = document.getElementById("list")
    for (monster of pokemon) {
        const li = document.createElement("li")
        li.innerHTML = monster.name
        list.append(li)
        li.addEventListener("mouseover", letsHover)
        // debugger
        fetch(monster.url)
            .then(resp => resp.json())
            // .then(data => getMoreInfo(data))
            .then(data => { debugger })
        // li.addEventListener("click", getMoreInfo)
        // debugger
        li.addEventListener("click", function (e) {
            debugger
        })
    }
}

function letsHover(e) {
    e.target.style.color = "red"
}

function getMoreInfo(data) {
    // fetch(monster.url)
    // .then(resp => resp.json())
    // .then(data => getMoreInfo(data))
    debugger
}

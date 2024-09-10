document.getElementById("livroHeader").addEventListener("click", function() {
    let livroCells = document.getElementsByClassName("livro");
    for (let i = 0; i < livroCells.length; i++) {
        livroCells[i].style.backgroundColor = "blue";
    }
    resetColors("livro");
});

document.getElementById("paginasHeader").addEventListener("click", function() {
    let paginasCells = document.getElementsByClassName("paginas");
    for (let i = 0; i < paginasCells.length; i++) {
        paginasCells[i].style.backgroundColor = "green";
    }
    resetColors("paginas");
});

function resetColors(exclude) {
    let allCells = document.querySelectorAll("td");
    for (let i = 0; i < allCells.length; i++) {
        if (!allCells[i].classList.contains(exclude)) {
            allCells[i].style.backgroundColor = "white";
        }
    }
}

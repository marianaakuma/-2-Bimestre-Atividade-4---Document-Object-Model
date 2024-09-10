document.getElementById("livroHeader").addEventListener("click", function() {
    let livroCells = document.getElementsByClassName("livro");
    for (let i = 0; i < livroCells.length; i++) {
        livroCells[i].style.backgroundColor = "blue";
    }
});

document.getElementById("paginasHeader").addEventListener("click", function() {
    let paginasCells = document.getElementsByClassName("paginas");
    for (let i = 0; i < paginasCells.length; i++) {
        paginasCells[i].style.backgroundColor = "green";
    }
});

let livroCells = document.getElementsByClassName("livro");
let paginasCells = document.getElementsByClassName("paginas");

for (let i = 0; i < livroCells.length; i++) {
    livroCells[i].addEventListener("click", function() {
        resetColors();
    });
}

for (let i = 0; i < paginasCells.length; i++) {
    paginasCells[i].addEventListener("click", function() {
        resetColors();
    });
}

function resetColors() {
    let allCells = document.querySelectorAll("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "white";
    }
}

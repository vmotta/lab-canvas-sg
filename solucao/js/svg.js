const simbolo = document.getElementById("simbolo");
const estado = document.getElementById("estado");
let simboloLaranja = false;

function alternarCor() {
    simboloLaranja = !simboloLaranja;

    if (simboloLaranja) {
        simbolo.setAttribute("fill", "#f97316");
        estado.textContent = "O símbolo está laranja.";
    } else {
        simbolo.setAttribute("fill", "#2563eb");
        estado.textContent = "O símbolo está azul.";
    }
}

simbolo.addEventListener("click", alternarCor);

simbolo.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        alternarCor();
    }
});

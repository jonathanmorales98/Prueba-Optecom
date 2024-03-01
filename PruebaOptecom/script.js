function calcularAreaTriangulo() {

    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var area = (base * altura) / 2;
    document.getElementById("resultado").innerText = area;
}

function calcularAreaCirculo() {

    var radio = parseFloat(document.getElementById("radio").value);
    var area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultado2").innerText = area;
}
function fnGeo() {
    let datoVariable = document.getElementById("txtDato").value;
    console.log("El dato ingresado es:", datoVariable);
    document.getElementById("resultado").textContent = `El dato ingresado es: ${datoVariable}`;
}

function fnSumar() {
    let numero1 = parseFloat(document.querySelector("#txtNum1").value);
    let numero2 = parseFloat(document.querySelector(".txtNum2").value);
    let resultado = numero1 + numero2;
    console.log(`La suma de ${numero1} + ${numero2} es: ${resultado}`);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function fnRestar() {
    let numero1 = parseFloat(document.querySelector("#txtNum1").value);
    let numero2 = parseFloat(document.querySelector(".txtNum2").value);
    let resultado = numero1 - numero2;
    console.log(`La resta de ${numero1} - ${numero2} es: ${resultado}`);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function fnMultiplicar() {
    let numero1 = parseFloat(document.querySelector("#txtNum1").value);
    let numero2 = parseFloat(document.querySelector(".txtNum2").value);
    let resultado = numero1 * numero2;
    console.log(`La multiplicación de ${numero1} * ${numero2} es: ${resultado}`);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function fnDividir() {
    let numero1 = parseFloat(document.querySelector("#txtNum1").value);
    let numero2 = parseFloat(document.querySelector(".txtNum2").value);

    if (numero2 === 0) {
        document.getElementById("resultado").textContent = "Error: No se puede dividir entre cero.";
        console.error("Error: División por cero");
        return;
    }

    let resultado = numero1 / numero2;
    console.log(`La división de ${numero1} / ${numero2} es: ${resultado}`);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

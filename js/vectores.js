function generarInputs() {
    const tam1 = parseInt(document.getElementById("tam1").value);
    const tam2 = parseInt(document.getElementById("tam2").value);

    if (isNaN(tam1) || isNaN(tam2) || tam1 <= 0 || tam2 <= 0) {
        alert("Por favor ingresa tamaños válidos para ambos vectores.");
        return;
    }

    let html1 = "<h3>Valores del Vector 1</h3>";
    for (let i = 0; i < tam1; i++) {
        html1 += "<input type=\"number\" id=\"v1_" + i + "\" placeholder=\"v1[" + i + "]\"> ";
    }

    html1 += "<h3>Valores del Vector 2</h3>";
    for (let j = 0; j < tam2; j++) {
        html1 += "<input type=\"number\" id=\"v2_" + j + "\" placeholder=\"v2[" + j + "]\"> ";
    }

    html1 += "<br><br><button onclick=\"mostrarValores(" + tam1 + ", " + tam2 + ")\">Mostrar valores</button>";

    document.getElementById("inputsVectores").innerHTML = html1;
}

function mostrarValores(tam1, tam2) {
    let vector1 = [];
    let vector2 = [];

    for (let i = 0; i < tam1; i++) {
        vector1.push(parseFloat(document.getElementById("v1_" + i).value) || 0);
    }
    for (let j = 0; j < tam2; j++) {
        vector2.push(parseFloat(document.getElementById("v2_" + j).value) || 0);
    }

    alert("Vector 1: [" + vector1 + "] \nVector 2: [" + vector2 + "]");
}

function generarTablas() {
    const cantidad = parseInt(document.getElementById("numTablas").value);
    const filas = parseInt(document.getElementById("numFilas").value);
    const columnas = parseInt(document.getElementById("numColumnas").value);

    if (isNaN(cantidad) || cantidad <= 0 ||
        isNaN(filas) || filas <= 0 ||
        isNaN(columnas) || columnas <= 0) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    let html = "";

    for (let t = 0; t < cantidad; t++) {
        html += "<h3>Tabla " + (t + 1) + "</h3>";
        html += "<table border=\"1\" style=\"margin-bottom:10px; border-collapse:collapse;\">";

        for (let i = 0; i < filas; i++) {
            html += "<tr>";
            for (let j = 0; j < columnas; j++) {
                html += "<td style=\"padding:5px;\">Fila " + (i + 1) + " Col " + (j + 1) + "</td>";
            }
            html += "</tr>";
        }

        html += "</table>";
    }

    document.getElementById("tablasGeneradas").innerHTML = html;
}

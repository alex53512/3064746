import * as aliascombine from './combine.js';

// Obtener elementos del DOM con IDs correctos
const num1txt = document.getElementById('txtnum1');
const num2txt = document.getElementById('txtnum2');
const opcionsel = document.getElementById('selopcion');
const ejecutarbtn = document.getElementById('btnejecutar');
const resultadosiddiv = document.getElementById('dividresultados');

// Función principal
function calcular() {
    try {
        const selopcion = opcionsel.value;
        const num1 = parseFloat(num1txt.value);
        const num2 = parseFloat(num2txt.value);

        // Validación para sumar/restar
        if (selopcion !== 'nombre' && (isNaN(num1) || isNaN(num2))) {
            throw new Error('Por favor ingresa números válidos');
        }

        let resultado;

        // Selección de operación
        switch (selopcion) {
            case 'sumar':
                resultado = aliascombine.aliasCalc.sum(num1, num2);
                mostrarresultado(`La suma es: ${resultado}`);
                console.log('La suma es:', resultado);
                break;

            case 'restar':
                resultado = aliascombine.aliasCalc.res(num1, num2);
                mostrarresultado(`La resta es: ${resultado}`);
                console.log('La resta es:', resultado);
                break;

            case 'nombre':
                resultado = aliascombine.aliasname; 
                mostrarresultado(`El nombre es: ${resultado}`);
                console.log('El nombre es:', resultado);
                break;

            default:
                throw new Error('Opción no válida');
        }

    } catch (error) {
        mostrarresultado(`Error: ${error.message}`, 'error');
        console.error(`Error: ${error.message}`);
    }
}

// Mostrar resultado en pantalla
function mostrarresultado(mensaje, tipo = 'success') {
    resultadosiddiv.textContent = mensaje;
    resultadosiddiv.className = `resultcls ${tipo}`;
}

// Evento del botón
ejecutarbtn.addEventListener('click', calcular);

console.log('operaciones indicadas - escoge una opcion');

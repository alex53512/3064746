var nombre = "alexander pechene";
var nombres = ["alexander pechene", "juan lopez", "manolo garcia", "jose martinez", 35, true];

var lenguajes = new Array ("alexander", "pechene", "yalanda", "java");

var lenguajes = new Array("PHP", "JS", "GO", "Java");
var elemento = new parseInt(prompt("Que elemnto del array quieres??", 0));

(elemento)> nombres.length 
? alert("Introduce un numero menor que"+ nombres.length) : alert("El usuario seleccionado es:"+nombre[elemento]);

   
for(var i =0; i < lenguajes.length; i++){document.write("<li>"+lenguajes[i]+" </li>" );}
document.write("</ul");

lenguajes.forEach((elementoDelArrayLenguajes, indice)=>{
    document.write("<li>"+indice+"-"+elementoDelArrayLenguajes+"</li>" );
});

var i = 0;
while (i < lenguajes.length) {
  document.write("<li>" + lenguajes[i] + " </li>");
  i++;
}
document.write("</ul>"); 

var precios = [10, 20, 50, 80, 12];

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

var busqueda = precios.some(precio => precio >= 29);
document.write(busqueda);


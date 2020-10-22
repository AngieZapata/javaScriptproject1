let pc = {
    nombre: "NombrePC",
    procesador: "Intel core I7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `el nombre del PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la ram es: <b>${ram}</b> <br>
         el espacio es: <b>${pc["espacio"]}</b> <br>`;

document.write(frase);

let numeroW=0;

document.write("<br>" + "while" + "<br>");

while (numeroW < 5) {
    numeroW++;
    document.write(numeroW + "<br>");
}

document.write("<br>" + "do while" + "<br>");
numeroW=0;

do {
    numeroW++;
    document.write(numeroW + "<br>");
} while (numeroW < 5);

document.write("<br>" + "while + break" + "<br>");
numeroW=0;

let numero2=0;

while (numeroW < 100) {
    numeroW++;
    document.write(numeroW + "<br>");
    if (numeroW == 50) {
        numero2 = numeroW;
        break;
    }
}



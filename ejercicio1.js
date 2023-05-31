/*1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.*/

/*let respuestaEjercicio1 = prompt("¿Eres bellisimo/a?");

if (respuestaEjercicio1 === "si") {
    console.log("Ciertamente.");
} else if (respuestaEjercicio1 === "no") {
    console.log("No te creo.");
} else {
    console.log("Eso que escribiste no lo entiendo.");
}

/*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
núm*/

/*3. Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert.*/

/*let numero = parseInt(prompt("Digite un numero"));

if (numero === 0) {
    alert("Digite un valor mayor a cero"); 
} else if (numero % 2 === 0) {
    //console.log("Su número es divisible por 2."); 
    alert("Su número es divisible por 2.");
} else if (numero % 2 === 1) {
    //console.log("Su número no es divisible por 2.");
    alert("Su número no es divisible por 2.");
} else {
    console.log("Por favor digite un caracter númerico.");
}

/*4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.*/

/*let numeroGanar = parseInt(prompt("Digite el número de cliente"));

if (numeroGanar === 1000) {
    console.log("Ganaste un premio");
} else if (numeroGanar !== 1000) {
    console.log("Sigue participando");
} else {
    console.log("Por favor digite un caracter numerico");
}

/*5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.*/

/*let num_1 = parseInt(prompt("Digite un número"));
let num_2 = parseInt(prompt("Digite otro número"));

if (num_1 < num_2) {
    console.log(`${num_1} es menor que ${num_2}`);
} else if (num_1 > num_2) {
    console.log(`${num_2} es menor que ${num_1}`);
}
else {
    console.log("Digite un caracter numerico");
}

/*6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.*/

/*let num1 = parseInt(prompt("Digite un número"));
let num2 = parseInt(prompt("Digite otro número"));
let num3 = parseInt(prompt("Digite el tercer numero número"));

if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Dos de los numeros ingresados son iguales");
} else if (num1 > num2 && num1 > num3) {
    console.log(`${num1} es mayor que ${num2} y ${num3}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} es mayor que ${num1} y ${num3}`);
} else {
    console.log(`${num3} es mayor que ${num2} y ${num1}`);
}

/*7. Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje.*/

/*let dia = prompt("Por favor digita un día de la semana");
dia = dia.toLowerCase();

if(dia === "lunes" || dia ===  "viernes") {
    console.log("¡ANIMO! Estas empezando o terminando semana 😉");
} else if(dia === "sabado" || dia === "domingo") {
    console.log("🎉😎😴 ¡Aprovecha y recupera energías! 🤗")
}else{
    console.log(`No es lunes, ni viernes, ni sabado ni domingo; Sigue con tus tareas diarias 😭🧐`)
}

/*8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10.*/

/*let calificacion = parseInt(prompt("Digite una calificación entre 1 y 10"));

if(calificacion >= 1 && calificacion <= 10) {
    if(calificacion < 6) {
    console.log("Reprobado");
    } else if(calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
    } else if(calificacion === 9) {
    console.log("Bien");
    } else {
        console.log("Excelente");
    }
} else {
    console.error("Digite un número entre 1 y 10");
}

/*9. Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping.*/

/*let helado = prompt("¿Escribe el tipo de topping deseas: oreo, kitkat o brownie?");
let precio = 50;

if(helado === "oreo") {
    console.log(`Su helado con topping de oreo cuesta: ${precio+10} MXN`);
} else if(helado === "kitkat") {
    console.log(`Su helado con topping de kitkat cuesta: ${precio+15} MXN`);
}else if(helado === "brownie") {
    console.log(`Su helado con topping de brownie cuesta: ${precio+20} MXN`);
} else {
    console.log("No tenemos este topping, lo sentimos");
    console.log(`El valor de su helado es: ${precio} MXN`)
}

/*Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses*/

/*let programa = prompt("Escoja el programa que desea estudiar: Course, Carrera o Master");
let valorPrograma=0;
let descuento = 0;


programa = programa.toLowerCase();


if(programa === "course") {
    valorPrograma = 4999;
}else if(programa === "carrera") {
    valorPrograma = 3999;
}else if(programa === "master") {
    valorPrograma = 2999;
}else{
    console.log("El programa no existe");
}

let respuesta = prompt("Uste tiene alguna beca (por favor responda SI o NO)");
respuesta = respuesta.toLowerCase();

if(respuesta === "si") {
    beca = parseInt(prompt("¿Que tipo de beca tiene?: 1.Facebook 2.Google 3.Jesua"));
} else{
    console.log(`El valor del programa sin beca a 2 meses es de: ${valorPrograma * 2} MXN`);
    console.log(`El valor del programa sin beca a 6 meses es de: ${valorPrograma * 6} MXN`);
    console.log(`El valor del programa sin beca a 12 meses es de: ${valorPrograma * 12} MXN`);
}

if(beca === 1) {
    descuento = 0.2;
}else if(beca === 2) {
    descuento = 0.15;
}else if(beca === 3) {
    descuento = 0.5;
}else{
    console.log("Digite un numero de 1 a 3");
}

let valorTotal = valorPrograma - (valorPrograma*descuento);


console.log(`El valor a pagar del programa por 2 meses es de ${valorTotal.toFixed() * 2} MXN`);
console.log(`El valor a pagar del programa por 6 meses es de ${valorTotal.toFixed() * 6} MXN`);
console.log(`El valor a pagar del programa por 12 meses es de ${valorTotal.toFixed() * 12} MXN`);*/

/*11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.*/

let vehiculo = parseInt(prompt("Por favor digite el tipo de vehiculo: 1. Coche 2. Moto 3. Autobus"));
let kmRecorridos = parseFloat(prompt("Por favor digite los KM recorridos"));
let total_a_pagar = 0;

if(vehiculo === 1) {
    precioKm = 0.20;
}else if(vehiculo === 2) {
    precioKm = 0.10;
}else if(vehiculo === 3) {
    precioKm = 0.5;
}else {
    alert("Error");
}

if(kmRecorridos > 0 && kmRecorridos <=100) {
    extra = 5;
}else if(kmRecorridos > 100 ) {
    extra = 10;
} else {
    alert("Error");
}

total_a_pagar = (kmRecorridos * precioKm) + extra;
console.log(total_a_pagar.toFixed(2));










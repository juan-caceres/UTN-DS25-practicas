//ej1
let n = 2;
let r= n + 5;

//ej2
let texto1="Juan";
let texto2="Caceres"
let conca= texto1 + " " + texto2
console.log(conca)

//ej3
let n1= 5;
let n2=3;

if (n1>n2){
    console.log(n1 + " es mayor que " + n2)
}else if (n1<n2){
    console.log(n2 + " es mayor que " + n1)
}else{
    console.log(n1 + " es igual que " + n2)
}

//ej4

let nej4=3;
//let nej4=Number(prompt("ingresa un numero"));

switch (nej4) {
    case 1:    
    case 2:
    case 3:
        console.log(nej4 + " pertenece al Grupo 1: del 1 al 3");
    break;
    case 4:    
    case 5:
    case 6:
        console.log(nej4 + " pertenece al Grupo 2: del 4 al 6");
    break;
    case 7:    
    case 8:
    case 9:
    case 10:
        console.log(nej4 + " pertenece al Grupo 3: del 7 al 10");
    break;
    default:
        console.log(nej4 + " No pertenece a ningun grupo");
    break;

}

//ej5
let sumita=0;
for (let i=0 ; i<10 ; i++){
    sumita= sumita + i;
}

console.log(sumita);

//ej6

let numeritos=[1,2,3,4,5,6,7,8,9,10];
let productito=numeritos[0];

for (let i=0 ; i<numeritos.length ; i++){
    productito= productito * numeritos[i]  ;
}

console.log(productito);

//ej7

function producto (n1,n2){
    return n1*n2;
}

let numej7 = 3;
let num2ej7=3;
console.log(producto(numej7,num2ej7));

//ej8

function concatenar (t1,t2){
    return t1 + t2;
}

let textoj7 = "hola ";
let texto2ej7="como estas";
console.log(concatenar(textoj7,texto2ej7));

//ej9

function esMayor (n1,n2){
    if (n1>n2){
    console.log(n1 + " es mayor que " + n2)
    }else if (n1<n2){
        console.log(n2 + " es mayor que " + n1)
    }else{
        console.log(n1 + " es igual que " + n2)
    }
}

let numej9 = 3;
let num2ej9=1;
esMayor(numej9,num2ej9);

//ej10

let asteriscos="";
function asteriscosParametros(n){
    asteriscos= asteriscos + "*"
    console.log("La cantidad de veces que se paso un numero por parametro: "+ asteriscos + " (los asteriscos representan la cantidad de veces)")
}

asteriscosParametros(1)
asteriscosParametros(2)
asteriscosParametros(2)
asteriscosParametros(2)
asteriscosParametros(2)

//ej11

function descuento(monto,medioPago){
    let abonar=0;
    if (monto==200 && monto<=400){
   
        switch (medioPago) {
            case "E":
                    abonar=monto - (monto*0.30);
                break;    
            case "D":
                    abonar=monto - (monto*0.20);
                break;
            case "C":
                abonar=monto - (monto*0.10);
                break;
        }
        
    }else if (monto>400){
        abonar=monto - (monto*0.40);
    }else{
        abonar=monto;
        console.log ("no se realiza descuento")
    }
    return abonar;
}

console.log("Debe abonar: "+descuento(200,"E"));

//ej12


function arboriscos(n){
    let troncoriscos="";
    let div =document.getElementById("textoprueba");
    div.innerHTML="";
    for (let i=0; i<n; i++){
        troncoriscos= troncoriscos + "*"
        div.innerHTML+= "<p>"+troncoriscos+"</p>"; 
    }
}


//ej13

function diaSemana(numeroSemana){
    nombreDia="";
    switch (numeroSemana) {
        case 1:
            nombreDia="Lunes";
            break;    
        case 2:
            nombreDia="Martes";
            break; 
        case 3:
            nombreDia="Miercoles";
            break; 
        case 4:
            nombreDia="Jueves";
            break;     
        case 5:
            nombreDia="Viernes";
            break; 
        case 6:
        case 7:
            nombreDia="fin de semana";
            break; 
        default:
            nombreDia="no es ningun dia de la semana"

    }

    return nombreDia;
}

console.log(diaSemana(1))

//ej14

function promedioNumeros(){
    let n=0;
    let suma=0;
    let promedio=0;
    let arregloNumeros=[];
    let tamaño= parseInt(prompt("Ingrese cantidad de numeros a ingresar"));
    for (let i=0; i<tamaño; i++){
        n=parseInt(prompt("Ingrese numero"));
        suma=suma+n;
        arregloNumeros.push(n);
    }

    promedio = suma/(arregloNumeros.length); 

    alert("Arreglo de numeros: " + arregloNumeros)
    alert("Promedio de los numeros: " + promedio.toFixed(2)); //toFixed es para tomar hasta 2 decimales
} 

//promedioNumeros();

//ej15

function crearArbol(){
    let tamanioArbol= Number(document.getElementById("alturaArbol").value);
    if (isNaN(tamanioArbol)){
        alert("valor incorrecto, Por favor ingrese un NUMERO")
    }
    arboriscos(tamanioArbol)
}

//ej16
cont=0;
piso=true; //variable para saber si se esta colocando dpto o piso

function llamar(){
    let mp=document.getElementById("mensajePortero");
    let vp=document.getElementById("visorPiso").textContent;
    let vd=document.getElementById("visorDpto").textContent;
    
    if (vp[0]=="0"){ //si el numero es ej 01; solo toma 1
        vp=vp[1];
    }
    let vdNumero=Number(vd);
    let vpNumero=Number(vp);

    alert(vdNumero+vpNumero)

    if (vpNumero<=48 && 1<=vdNumero && vdNumero<=6){
        mp.innerHTML= "Llamado al piso "+vpNumero+" , depto "+vdNumero; 
    }else{
        mp.innerHTML="El piso o departamento no existe"
    }




}


function enviar(p1){

    let vp=document.getElementById("visorPiso");
    let vd=document.getElementById("visorDpto");

    if (cont==0){
    
        vp.innerHTML= ""; 
    }

    if (cont==2){
        vd.innerHTML= ""; 
    }


    
    if (cont<2 && piso==true) {
        let vp=document.getElementById("visorPiso");
        vp.innerHTML += p1; 
        alert(vp.textContent)
    }else if (cont==2){
        piso=false;
        let vd=document.getElementById("visorDpto");
        vd.innerHTML += p1; 
        alert(vd.textContent)
        const botones = document.querySelectorAll(".btnPortero");
        botones.forEach(boton => {
            boton.disabled=true; //desactiva boton
        });
    }
    cont= cont+1;
    alert("valor de contador: "+cont)
}


function borrar(){
   
    let mp=document.getElementById("mensajePortero");
    mp.innerHTML= ""; 
    let vp=document.getElementById("visorPiso");
    vp.innerHTML= ""; 
    let vdpto=document.getElementById("visorDpto");
    vdpto.innerHTML= ""; 
    const botones = document.querySelectorAll(".btnPortero");
        botones.forEach(boton => {
            boton.disabled=false; //activa boton
        });

    cont=0;
    piso=true;
}



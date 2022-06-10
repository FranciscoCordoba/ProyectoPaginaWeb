var contador = 0;
var oni = 0;
var espiritu = 0;
var deterioro = 0;
var enfermera = 0;
var trampero = 0;

function siguiente(num){

    switch(num){
        case 0: {(oni < 2) ? oni += 1 : oni = 0; 
            contador = oni;};break;
        case 3: {(espiritu < 2) ? espiritu += 1 : espiritu = 0; 
            contador = espiritu;};break;
        case 6: {(deterioro < 2) ? deterioro += 1 : deterioro = 0; 
            contador = deterioro;};break;
        case 9: {(enfermera < 2) ? enfermera += 1 : enfermera = 0; 
            contador = enfermera;};break;
        case 12: {(trampero < 2) ? trampero += 1 : trampero = 0; 
            contador = trampero;};break;
    }

    imagen = new Array;
    imagen[0]="ONI.jpg";
    imagen[1]="ONI2.jpg";
    imagen[2]="ONI3.jpg";
    imagen[3]="ESPIRITU.jpg";
    imagen[4]="ESPIRITU2.jpg";
    imagen[5]="ESPIRITU3.jpg";
    imagen[6]="DETERIORO.jpg";
    imagen[7]="DETERIORO2.jpg";
    imagen[8]="DETERIORO3.jpg";
    imagen[9]="ENFERMERA.jpg";
    imagen[10]="ENFERMERA2.jpg";
    imagen[11]="ENFERMERA3.jpg";
    imagen[12]="TRAMPERO.jpg";
    imagen[13]="TRAMPERO2.jpg";
    imagen[14]="TRAMPERO3.jpg";

    document.querySelectorAll(".carrusel img")[(num/3)].src = imagen[(contador + num)];
}

function enviar(){

    var nombre = document.getElementById("f_nombre");
    var apellido = document.getElementById("f_apellido");
    var correo = document.getElementById("f_correo");
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var errores = 0;
    var formulario = document.getElementById("formulario");

    if(document.getElementById("textoError1").hasChildNodes()){
        document.getElementById("textoError1").removeChild(document.getElementById("textoError1").firstChild);
    }
    if(document.getElementById("textoError2").hasChildNodes()){
        document.getElementById("textoError2").removeChild(document.getElementById("textoError2").firstChild);
    }
    if(document.getElementById("textoError3").hasChildNodes()){
        document.getElementById("textoError3").removeChild(document.getElementById("textoError3").firstChild);
    }

    if(nombre.value.trim() == ""){
        nombre.className = "inputError";
        p = document.createElement('p');
        p.setAttribute("class","textoError");
        texto = document.createTextNode("ERROR, este campo no puede estar vacío");
        p.appendChild(texto);
        document.getElementById("textoError1").appendChild(p);
        errores += 1;
    }else if(!isNaN(nombre.value)){
        nombre.className = "inputError";
        p = document.createElement('p');
        p.setAttribute("class","textoError");
        texto = document.createTextNode("ERROR, debe ingresar un nombre");
        p.appendChild(texto);
        document.getElementById("textoError1").appendChild(p);
        errores += 1;
    }else{
        nombre.className = "";
    }

    if(apellido.value.trim() == ""){
        apellido.className = "inputError";
        p = document.createElement('p');
        p.setAttribute("class","textoError");
        texto = document.createTextNode("ERROR, este campo no puede estar vacío");
        p.appendChild(texto);
        document.getElementById("textoError2").appendChild(p);
        errores += 1;
    }else if(!isNaN(apellido.value)){
        apellido.className = "inputError";
        p = document.createElement('p');
        p.setAttribute("class","textoError");
        texto = document.createTextNode("ERROR, debe ingresar un nombre");
        p.appendChild(texto);
        document.getElementById("textoError2").appendChild(p);
        errores += 1;
    }else{
        apellido.className = "";
    }

    if(correo.value.trim() == ""){
        correo.className = "inputError";
        p = document.createElement('p');
        p.setAttribute("class","textoError");
        texto = document.createTextNode("ERROR, este campo no puede estar vacío");
        p.appendChild(texto);
        document.getElementById("textoError3").appendChild(p);
        errores += 1;
    }else if(!expReg.test(correo.value)){
        correo.className = "inputError";
        p = document.createElement('p');
        p.setAttribute("class","textoError");
        texto = document.createTextNode("ERROR, debe ingresar un correo válido");
        p.appendChild(texto);
        document.getElementById("textoError3").appendChild(p);
        errores += 1;
    }else{
        correo.className = "";
    }

    if(errores == 0){
        console.log("LO HACE")
        p = document.createElement('p');
        texto = document.createTextNode(nombre.value + " " + apellido.value + " se suscribió con el email '" + correo.value + "'");
        p.appendChild(texto);
        document.getElementById("suscripciones").appendChild(p);
        formulario.reset();
    }

    return false;
}
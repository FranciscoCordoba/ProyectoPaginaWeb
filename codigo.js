var posicion = 0;

function siguiente(){
    if(posicion < 2){
        posicion += 1;
    }else{
        posicion = 0;
    }
    imagen = new Array;
    imagen[0]="killer.jpg";
    imagen[1]="survii.webp";
    imagen[2]="ONI.jpg";
    document.Killer.src = imagen[posicion];
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
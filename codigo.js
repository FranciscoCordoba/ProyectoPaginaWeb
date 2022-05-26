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
function imprimirNamED (nombre,edad){
    console.log(nombre,edad);
}
setTimeout (imprimirNamED, 1000,"Nicolas",19)

setTimeout (function(){
    while (true) {
        console.log("Segundo enemigo");
    }
}, 1000)
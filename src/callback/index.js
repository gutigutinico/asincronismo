function sum(num1,num2){
    return num1+num2;
}

function calc(num1,num2,callback,callback2){
    callback2 (num1);
    callback2 (num2);
    return callback (num1,num2);
}
setTimeout (function(){
    console.log(calc(2,2,sum,inpresionDos));    
}, 2000) 


function interses2021 (saldoActualEnero,Saldofinal){
    return (Saldofinal - saldoActualEnero)*0.5
}

function interses2022 (saldoActualEnero,Saldofinal){
    return Saldofinal * 0.25 - saldoActualEnero * 0.07
}

function inpresionUno(text){
    console.log(text);
}


function inpresionDos(text){
    console.error(text + ("error"));
}
console.log(calc(3300000,7700000,interses2022,inpresionUno));
let name = "nico";
console.log("yo me llamo " + name + " De Girardot, \n\
que mas parcero");
console.log(`yo me llamo ${name} De Girardot
que mas parcero`);
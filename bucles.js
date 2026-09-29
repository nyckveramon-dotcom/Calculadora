
// let num=9;
// let num2=9;// este sera el input de entrada para operacion
// let operación="-";//validar este punto para saber que operacion se hace;
// if(operación=="+"){
//     console.log("el resultado es " + (num+num2));
// }else if(operación=="-"){
//     console.log(num-num2);
// }else if(operación=="*"){
//     console.log(num*num2);
// }else if(operación=="/"){
//     console.log(num/num2);
// }else console.log("el valor simbolo ingresado no esta en el menu");



const prompt =require("prompt-sync")();
let bandera=false;

while(!bandera){
    let operacion=prompt("que opreacion deseas realizar, ingresa el simbolo:");
    let num1=Number(prompt("ingresa el primer numero: "));
    let num2=Number(prompt("ingresa el segundo numero: "));
    if(operacion=="+"){
        console.log("el resultado de la operaciones "+(num1+num2));
    }else if(operacion=="-"){
        console.log("el resultado de la operaciones " + num1-num2);
    }else if(operacion=="*"){
        console.log("el resultado de la operaciones " + num1*num2);
    }else if(operacion=="/"){
        console.log("el resultado de la operaciones " + num1/num2);
    }else {
        console.log("el simbolo no esta registrado");
    }
    let pregunta=prompt("desea continuar usando la calculadora si/no: git ");
    if(pregunta=="no")bandera=true;
    
}
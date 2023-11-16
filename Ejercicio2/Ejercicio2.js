const ps=require('prompt-sync');
const prompt=ps();
let variable1=0;
let variable2=0;
let decision=1;
function Interfaz(){
console.log('CALCULADORA \n');
console.log(
    'Elija que operacion desea realizar \n'
+ '1. Suma \n'
+ '2. Resta \n'
+ '3. Multiplicacion \n'
+ '4. Division \n'
+ '5. Salir \n'
);
}

function ObternerDatos(){
   variable1=parseInt(prompt('Ingrese el primer numero '));
   variable2=parseInt(prompt('Ingrese el segundo numero '));
}

function Suma(){
    let resultado=0;
    resultado=variable1+variable2;
    console.log('El resultado de la suma es: '+resultado);
}

function Resta(){
    let resultado=0;
    resultado=variable1-variable2;
    console.log('El resultado de la resta es: '+resultado);
}

function Multiplicacion(){
    let resultado=0;
    resultado=variable1*variable2;
    console.log('El resultado de la multiplicacion es: '+resultado);
}

function Division(){
    let resultado=0;
    while(variable2==0){
        console.log('No se puede dividir por 0');
        variable2=parseInt(prompt('Ingrese el segundo numero otra vez '));
    }

    resultado=variable1/variable2;
    console.log('El resultado de la division es: '+resultado);
}

function preguntarContinuar(){
    decision=parseInt(prompt('Desea realizar otra operacion?  1. Si  2. No '));
    while(decision!=1 && decision!=2){
        console.log('No se ingreso una opcion valida');
        decision=parseInt(prompt('Desea realizar otra operacion?  1. Si  2. No '));
    }
    if(decision==1){
        Interfaz();
    }
    else{
        console.log('Gracias por usar la calculadora');
        decision=0;
    }
}


Interfaz();
while(decision==1){
    switch(parseInt(prompt(''))){
        
        case 1:
            ObternerDatos();
            Suma();
            break;
        case 2:
            ObternerDatos();
            Resta();
            break;
        case 3:
            ObternerDatos();
            Multiplicacion();
            break;
        case 4:
            ObternerDatos();
            Division();
            break;
        case 5:
            console.log('Gracias por usar la calculadora');
            decision=0;
            break;
        default:
            console.log('No se ingreso una opcion valida');
            break;
    }
    preguntarContinuar();
}
/*
switch(parseInt(prompt(''))){
    case 1:
        ObternerDatos();
        Suma();
        preguntarContinuar();
        break;
    case 2:
        ObternerDatos();
        Resta();
        preguntarContinuar();
        break;
    case 3:
        ObternerDatos();
        Multiplicacion();
        preguntarContinuar();
        break;
    case 4:
        ObternerDatos();
        Division();
        preguntarContinuar();
        break;
    case 5:
        console.log('Gracias por usar la calculadora');
        decision=0;
        break;
    default:
        console.log('No se ingreso una opcion valida');
        break;
}
} */

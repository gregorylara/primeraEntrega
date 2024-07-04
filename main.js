//Curso de Javascript Coderhouse
//Desarrollado por Gregory Lara
//Primera Entrega 07/03/2024

    let seleccion = Number(prompt("Hola para seleccionar una funcion necesitas\nEscribir el numero y presionar enter \n1 = Calculadora. \n2 = Tablas de multiplicar.\nEscriba 0 si quiere cerrar"));
do {

    if(seleccion === 1){
    
        let operador = (prompt("Ingrese un numero para seleccionar el tipo de operacion\n1 = Suma \n2 = Resta \n3 = Multiplicacion \n4 = Dividir \n5 = Menu Principal"));
        
        switch (operador){
            case '1':
            let numero1 = Number(prompt("Ingrese el primer valor"));
            let numero2 = Number(prompt("Ingrese el segundo valor"));
            let resultado1 = numero1 + numero2;
            operador = "Suma";
                alert(`El Resultado de la ${operador} = ${resultado1}.`);
            break;
            
            case '2':
            let num1 = Number(prompt("Ingrese el primer valor"));
            let num2 = Number(prompt("Ingrese el segundo valor"));
            let resultado2 = num1 - num2;
            operador = "Resta";
                alert(`El Resultado de la ${operador} = ${resultado2}.`);
            break;
            
            case '3':
            let nume1 = Number(prompt("Ingrese el primer valor"));
            let nume2 = Number(prompt("Ingrese el segundo valor"));
            let resultado3 = nume1 * nume2;
            operador = "Multiplicacion";
                alert(`El Resultado de la ${operador} = ${resultado3}.`);
            break;
            
            case '4':
            let numer1 = Number(prompt("Ingrese el primer valor"));
            let numer2 = Number(prompt("Ingrese el segundo valor"));
                
                if (numer2 !== 0){
            let resultado4 = numer1 / numer2;
            operador = "Division";
                alert(`El Resultado de la ${operador} = ${resultado4}.`);
                } else alert("Error division entre cero");
            break;
            
            case '5':
                seleccion = 0;
                alert("Cargando menu principal...");
                seleccion = Number(prompt("Hola para seleccionar una funcion necesitas\nEscribir el numero y presionar enter \n1 = Calculadora. \n2 = Tablas de multiplicar.\nEscriba 0 si quiere cerrar"));
            break;
        }
        
        }else if (seleccion === 2){
        
            let numero
        do {
            numero = Number(prompt("Ingrese la tabla para mostrar\nEscriba 0 Cuando quiera Cerrar"));
            let tablamultiplicar = (`La tabla de multiplicar del ${numero} es:\n`);
            
            if (numero !== 0){
                for (let i = 1 ; i <= 10 ; i++){
                    resultado = numero * i;
                    tablamultiplicar += (`${numero} x ${i} = ${resultado}\n`);
                }
                alert(tablamultiplicar);
            }

        }while (numero !== 0) alert("Cerrando aplicacion..."), seleccion = 0;

        }else seleccion = Number(prompt("Hola para seleccionar una funcion necesitas\nEscribir el numero y presionar enter \n1 = Calculadora. \n2 = Tablas de multiplicar.\nEscriba 0 si quiere cerrar"));
        
    }while (seleccion !==0) alert(`Gracias por usar el programa Hasta Luego!`);
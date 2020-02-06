function MergeSort(a){
                         //funcion merge
    if (a.length === 1){                  //si longitud del arreglo es igual a 1 
        return a;                       //devuelve el arreglo
    }

    rounding = Math.floor(a.length / 2);   //redondea hacia abajo (longitud del arrelgo entre dos); parte el arreglo a la mitad
    let arrayR = a.slice(0,rounding);    //creamos variable para el arreglo de la dereche
    let arrayL = a.slice(rounding);      //creamos variable para el arreglo de la izquierda 

   var OrderedRight = MergeSort(arrayR);               //DO va a ser igual a la fusion del arreglo de la derecha ya ordenado
   var OrderedLeft = MergeSort(arrayL);               //IO va a ser igual a la fusion del arreglo de la izquierda ya ordenado
   let newarray = [];
                        //nuevo arreglo para almacenar de menor a mayor de izquierda a derecha
    while (OrderedRight.length > 0 && OrderedLeft > 0) { //mientas la longitud del arreglo de la derecha e izquierda sea menor a 0 el ciclo va a parar hasta que ambos arreglos ya no tengan nada dentro
       
        if (OrderedLeft[0] > OrderedRight[0]){              //si el arreglo ordenado izq es mayor al arreglo ordenado der
            newarray.push(OrderedRight[0]);         //vamos a meterlo en el nuevo arreglo, se agrega el menor valor al nuevo arreglo
            OrderedRight.shift();                 //y lo vamos a eliminar del viejo, se saca del arreglo original DO
        }
        else {                         //si el de la derecha es mayor o si el de la izquierda es menor 
            newarray.push(OrderedLeft[0]);         //vamos a meterlo en el nuevo arreglo (io solo tiene un valor en la posicion 0)
            OrderedLeft.shift();                //y lo vamos a eliminar del viejo
        }
    }

   return newarray = [...newarray,...OrderedRight,...OrderedLeft]; //retorna todos los arreglos concatenados ya ordenados DO y IO se esta 
}                                           // asegurando de que si queda uno solito tambien se agregue
console.log(MergeSort ([1, 12, 4, 7, 8]));
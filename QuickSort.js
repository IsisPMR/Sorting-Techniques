function QuickSort (a){  
                       //funcion quicksort que recibe como parametro un array
    if(a.length <= 1){                        //Si la longitud del arreglo (a) es menor o igual a 1 (porque si ya solo tengo un elemento diferente en el arreglo ya no es necesario que compare)
        return a;                           //Devuelve ese valor del arreglo
    }

    let major = [];                         //Declaramos un arreglo vacio llamado menores
    let minor = [];                         //Declaramos un arreglo vacio para a columna de mayores 
    let pivot = a[0]; 
                         //Declaramos el pivote que va a ser nuestra primera posicion del arreglo, por eso a[0] con la cual vamos a comparar cada los numeros
    for (i = 1; i < a.length; i++){  
                   //Declaramos 
        if(pivot > a[i]){                    //Si pivote es mayor que el arreglo en la posicion i (primera vuelta vale 1)
            minor.push(a[i]);             //Mandalo del arreglo en esa posicion al nuevo arreglo de menores
        }
        else {
            major.push(a[i]);             //Si es mayor que el pivote mandalo al nuevo arreglo de mayores
        }
    }

    let minorsort = QuickSort(minor);    //Manda a llamar la funcion de dividir (quick sort) y acomodar para el arreglo de menores
    let majorsort = QuickSort(major);    ////Manda a llamar la funcion de dividir (quick sort) y acomodar para el arreglo de mayores
    let sort = [...minorsort,pivot,...majorsort]; //Concatena los arreglos ya acomodados en un arreglo nuevo
   
    return sort;                         //Devuelve el arreglo nuevo ya organizado
}

console.log(QuickSort([5,8,1,3]));
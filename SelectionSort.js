function SelectionSort(array){
    
    let minor; 
    let minorposition;

    for (let h = 0; h < array.length; h++){

        for(let i = h + 1; i <= array.length; i++){

            if (array[h]>array[i]){
                minor = array[i];
                minorposition = i;

                let temp = array[h];
                array[h] = minor;
                array[minorposition]=temp;
            }
        }
    }
    return(console.log("The sorted array is: ", array));
}
SelectionSort([5,2,4,8])
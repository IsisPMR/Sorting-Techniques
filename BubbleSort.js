function BubbleSort(array){

    for (let h = 0; h <= array.length; h++){

        for(let i = 0; i <= array.length; i++){

            if(array[i] > array [i + 1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
    }
    return console.log(("Sorted array is: ", array));
}
BubbleSort([0, 3, 5, -1, 4]);
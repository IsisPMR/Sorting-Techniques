function max(array, length, index){
    let big = index;
    let left = index * 2 + 1;
    let right = left + 1;

    if(left < length && array[left] > array[big]){
        big = left;
    }

    if(right < length && array[right] > array[big]){
        big = right;
    }

    if(big != index){
        [array[index], array[big]] = [array[big], array[index]];
        max(array, length, big);
    }
    return array;
}

function heapsort(array) {
    let length = array.length;
    let floor = Math.floor(length / 2 - 1);
    let move = length - 1;

    while (floor >= 0){
        max(array, length, floor);
        floor--;
    }

    while (move >= 0){
        [array[0], array[move]] = [array[move], array[0]];
        max(array, move, 0);
        move--;
    }
    return console.log(("Sorted array is: ", array));
}
heapsort([4, 44, 5, 11, 25, 27, 7, 1]);
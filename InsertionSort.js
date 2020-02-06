const a = [];

function insertion(a){
let copy = [a[0]]; 

for(let i = 1; i < a.length; i++){

    if(a[i] < copy[i-1]){
        var temp = a[i];

        for(j = copy.length-1; j >= 0; j--){

            if(j == 0 && temp < copy[j]){
                copy.splice(j, 0, temp);
                break;
            }
            if (temp < copy[j] && temp > copy[j-1]){
                copy.splice(j, 0, temp);
                break;
            }
        }
    }

    else {
        copy.push(a[i]);
    }
}

return console.log(("Sorted array is: ", copy));;
}
insertion([1, 12, 8, 5, 7]);
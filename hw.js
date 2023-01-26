let myArr = []
let arrayGenap =[]
let arrayGanjil = []

// let totalGenap = 0;
// let totalGanjil = 0;
// let avgGenap = 0;
// let avgGanjil =0;
// let maxValGenap = 0;
// let minValGenap = Number.POSITIVE_INFINITY;
// let maxValGanjil = 0;
// let minValGanjil = Number.POSITIVE_INFINITY;

function randomArray (n){
    for (let i = 0; i < n; i++){
        myArr.push(Math.floor(Math.random()*50+1))
    }

   
    
}
randomArray(100);
console.log(myArr)

function tentukanGaGe (array){
    for ( let i = 0; i < array.length; i++){
        if (i % 2 == 0){
            arrayGenap.push(array[i])
        } else{
            arrayGanjil.push(array[i])
        }
    }
}
tentukanGaGe(myArr);

console.log(arrayGenap);
console.log(arrayGanjil)


function sumArray (array){

        let total = 0;

        for (let i = 0; i < array.length; i++){

                 total += array[i];
        }

        return total 
       
}

let totalGenap = sumArray(arrayGenap)
let totalGanjil = sumArray(arrayGanjil)


console.log(totalGenap)
console.log(totalGanjil)

function averageArray (totalArray,array){

        let average = 0

         for (let i = 0; i < array.length; i++){

                 average = totalArray/array.length;
            }
            return average
}
let avgGenap = averageArray (totalGenap,arrayGenap)
let avgGanjil = averageArray (totalGanjil,arrayGanjil)

console.log(avgGenap)
console.log(avgGanjil)

 

function maxValue (getArray){

   
    let maxValue = getArray[0];
    

    for (let i = 0; i <getArray.length; i++){

        if (getArray[i] > maxValue){
            maxValue = getArray[i]
        }   
    }
    return maxValue
   
    
}

 let maxValueGenap = maxValue(arrayGenap)
 let maxValueGanjil = maxValue(arrayGanjil)
console.log(maxValueGenap)
console.log(maxValueGanjil)

function minValue (getArray){

   
    let minValue = Number.POSITIVE_INFINITY;
    

    for (let i = 0; i <getArray.length; i++){

        if (getArray[i] < minValue){
            minValue = getArray[i]
        }   
    }
    return minValue
   
    
}

 let minValueGenap = minValue(arrayGenap)
 let minValueGanjil = minValue(arrayGanjil)
console.log(minValueGenap)
console.log(minValueGanjil)



function compareMax (even, odd ){

    if (even === odd){
        return "nilai sama"
    } else if ( even > odd){
        return "Nilai Genap lebih besar"
    } else {
        return "Nilai Ganjil lebih besar"
    }
}

let hasilCompareTotalValue = compareMax(totalGenap, totalGanjil)
let hasilCompareAvgValue= compareMax(avgGenap, avgGanjil)
let hasilCompareMaxValue = compareMax(maxValueGenap, maxValueGanjil)
let hasilCompareMinValue  = compareMax(minValueGenap, minValueGanjil)

console.log("perbandingan nilai total: " +hasilCompareTotalValue)
console.log("perbandingan nilai rata: " + hasilCompareAvgValue)
console.log ("perbandingan nilai max: " + hasilCompareMaxValue)
console.log("perbandingan nilai min: " + hasilCompareMinValue)



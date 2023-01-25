let myArr = []
let genap =[]
let ganjil = []
let total = 0;
let totalGenap = 0;
let totalGanjil = 0;
let avgGenap = 0;
let avgGanjil =0;
let maxValGenap = 0;
let minValGenap = Number.POSITIVE_INFINITY;
let maxValGanjil = 0;
let minValGanjil = Number.POSITIVE_INFINITY;

function randomArray (n){
    for (let i = 0; i < n; i++){
        myArr.push(Math.floor(Math.random()*50+1))
    }

   
    
}
randomArray(200);
console.log(myArr)

function tentukanGaGe (array){
    for ( let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            genap.push(array[i])
        } else{
            ganjil.push(array[i])
        }
    }
}
tentukanGaGe(myArr);

console.log(genap);
console.log(ganjil)


function sumArray (x){

        for (let i = 0; i < x.length; i++){
    
            if (x[i] % 2 == 0){

                 totalGenap  += x[i];
                
            } else {
                totalGanjil  += x[i];
            }
    
            
            

            
   
     

}

}

sumArray(ganjil)
sumArray(genap)

console.log(totalgenap)
console.log(totalganjil)

function averageArray (totalArray,Array){
         for (let i = 0; i < Array.length; i++){

             if (Array[i] % 2 == 0){

                 avgGenap = totalArray/Array.length;
                
            } else {
                avgGanjil = totalArray/Array.length;
            }
        
    
    

     

}
    
}
averageArray (totalGenap,genap)
averageArray (totalGanjil,ganjil)

console.log(avgGenap)
console.log(avgGanjil)

function minMax (getArray){
    for (let i = 0; i <getArray.length; i++){

        if (getArray[i] % 2 == 0){
             if (getArray[i]> maxValGenap){
            maxValGenap = getArray[i]
        } else if ( getArray[i]< minValGenap){
            minValGenap = getArray[i]
        }

        } else {
            if (getArray[i]> maxValGanjil){
            maxValGanjil = getArray[i]
        } else if ( getArray[i]< minValGanjil){
            minValGanjil = getArray[i]
        }

        }

       

    }
}

minMax(genap)
minMax(ganjil)
console.log(maxValGenap)
console.log(minValGenap)
console.log(maxValGanjil)
console.log(minValGanjil)


function compareMax (even, odd ){

    if (even === odd){
        return "nilai sama"
    } else if ( even > odd){
        return "Nilai  Genap lebih besar"
    } else {
        return "Nilai Ganjil lebih besar"
    }
}

let hasilCompareMaxValue = compareMax(maxValGenap, maxValGanjil)
let hasilCompareMinValue = compareMax(minValGenap, minValGanjil)
let hasilCompareTotalValue = compareMax(totalGenap, totalGanjil)
let hasilCompareAvgValue = compareMax(avgGenap, avgGanjil)

console.log (hasilCompareMaxValue)
console.log(hasilCompareMinValue)
console.log(hasilCompareAvgValue)
console.log(hasilCompareTotalValue)

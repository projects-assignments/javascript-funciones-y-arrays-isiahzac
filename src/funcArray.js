/* Encuentra el máximo */

// export function maxOfTwoNumbers(numero1,numero2){
//     if(numero1 > numero2){
//         return numero1
//     }else if(numero1 < numero2){
//     return numero2
//     }else {
//         return numero1 || numero2;
//     }
// }
// Segunda forma de solucionar el problema: Condicional ternario
// export function maxOfTwoNumbers(numero1, numero2) {
//     return numero1 > numero2 ? numero1 : numero1 < numero2 ? numero2 : numero1 || numero2;
// }

//Tercera forma de solucionar el problema y más limpia: Math.max
export function maxOfTwoNumbers(numero1, numero2) {
    return Math.max(numero1, numero2);
}


export function findLongestWord(array){
    return array.reduce((palabraLarga, palabra) => palabra.length > palabraLarga.length ? palabra : palabraLarga, array[0]);     
}

// Segunda forma de solucionar el problema: For
// export function findLongestWord(array){
//     let palabraLarga = array[0]
//     for(let i = 0; i < array.length; i++){
//         if(array[i].length > palabraLarga.length){
//             palabraLarga = array[i];
        
//         }
//     }
//     return palabraLarga;
// };



export function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i += 1){
    sum += array[i];
    }
    return sum;
}

// const result = sumArray([]);
// console.log(result);

export function averageNumbers(array){
    // if(array.length === 0){
    //     return undefined;
    // }
    const average = sumArray(array) / array.length;
    if (average === 0){
        return undefined;
    }
    return average || undefined; // Le ponemos || undefined para que no de error en caso de que el array este vacío
    
}

// Segunda forma de solucionar el problema: Reduce
// export function averageNumbers(array){
    // const average = array.reduce((total, num) => total + num, 0);
    // return array.length === 0 || average === 0 ? undefined : average / array.length;
//}

// Otra forma de solucionar el problema:
    // const initialValue = 0;
    // const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    // let elements = array.length;
    // if(elements === 0){
    //     return undefined;
    // }else {
    //     return sum / elements;
    // }


export function averageWordLength(words){
    if (words.length === 0) {
        return undefined;
    }

    let totalLength = 0;

    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }
    
    return totalLength / words.length;

}


export function uniquifyArray(array){
    if (array.length === 0) {
        return undefined;
    }

    const uniqueArray = [...new Set(array)];

    return uniqueArray;
}
// Otra forma de solucionar el problema:

    // if(array.length === 0){
    //     return undefined;
    // } else if(array.length === 1){
    //     return array;
    // }

    // const uniqueArray = [];

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    //     if (!uniqueArray.includes(element)) {
    //         uniqueArray.push(element)
    //     }
    // }
    // return uniqueArray;


export function doesWordExist(array, palabra){
    return array.includes(palabra);
}

// Otra forma de hacer lo mismo:
// let count = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === palabra) {
//         count++;
//         if (count > 1) {
//             return false;
//         }
//     }
// }
// return count === 1;

export function howManyTimes(array, palabra){
    if (array.length === 0) {
        return undefined;
    }

    return array.reduce((count, word) => {
        return word === palabra ? count + 1 : count;
        
    }, 0);
    
}

export function greatestProduct(matrix){
    let maxProduct = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 3; j++) {
            const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    console.log("Fila", maxProduct)

    for (let i = 0; i < matrix.length - 3; i++){
        for (let j = 0; j < matrix[i].length; j++){
            const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    console.log("Columna", maxProduct)

    for (let i = 0; i < matrix.length - 3; i++){
        for (let j = 0; j < matrix[i].length - 3; j++){
            const product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
            
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    console.log("Diagonal", maxProduct)

    for (let i = 0; i < matrix.length - 3; i++){
        for (let j = 3; j < matrix[i].length; j++){
            const product = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
            
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    console.log("Diagonal inversa", maxProduct)
    return maxProduct;
}








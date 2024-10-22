// forma manual

function filtrarArrayManual(array: any[]) {
    const numberArray: number[] = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            numberArray.push(array[i])
        }
    }

    return numberArray
}

// forma com funções auxiliares do JS

function filtrarArrayAuxiliar(array: any[]) {
    const numberArray = array.filter(arrayItem => typeof arrayItem === "number")
    return numberArray
}


const arrayNumber1 = filtrarArrayManual(["Texto", 1, 2, 6, 3, true, false, { nome: "Claudia" }])
console.log(arrayNumber1)
const arrayNumber2 = filtrarArrayAuxiliar(["Texto", 1, 2, 6, 3, true, false, { nome: "Claudia" }])
console.log(arrayNumber2)
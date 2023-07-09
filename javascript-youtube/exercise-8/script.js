const addNumberBt = document.getElementById("add_number")
addNumberBt.addEventListener("click", addNumber)
const summaryBt = document.getElementById("generate_summary")
summaryBt.addEventListener("click", generateSummary)
const resetBt = document.getElementById("reset_array")
resetBt.addEventListener("click", wipeArray)

let array = []

function addNumber() {
    let number = document.getElementById("number_input")
    if (number.value.length == 0) {
        window.alert('Add number')
    } else {
        console.log(Number(number.value))
        array.push(Number(number.value))
    }
}

function generateSummary() {
    console.log(array)
    let len = array.length
    let mean = array.length
    let median = array.length
    let std = array
    let min = Math.min(...array)
    let max = Math.max(...array)
    console.log(len, min, max)

    return
}

function wipeArray() {
    array = []
    console.log(`array wiped ${array}`)
}

// TODO std
function standardDeviation(arr) {

}

// TODO Continue
function median(arr) {
    //sort
    arr.sort((a, b) => a - b)
    let lenght = arr.lenght
    if (lenght % 2 == 0) {

    } 
    else {
        return arr[lenght / 2]
    }
}

function mean(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum / arr.length
}

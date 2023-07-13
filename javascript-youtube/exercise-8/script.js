const addNumberBt = document.getElementById("add_number")
addNumberBt.addEventListener("click", addNumber)
const summaryBt = document.getElementById("generate_summary")
summaryBt.addEventListener("click", generateSummary)
const resetBt = document.getElementById("reset_array")
resetBt.addEventListener("click", wipeArray)

const count_value = document.getElementById("count_td")
const mean_value = document.getElementById("mean_td")
const median_value = document.getElementById("median_td")
const min_value = document.getElementById("min_td")
const max_value = document.getElementById("max_td")
const std_value = document.getElementById("std_td")
let arraySelect = document.getElementById("array_select")

let array = []

function addNumber() {
    let number = document.getElementById("number_input")
    if (number.value.length == 0) {
        window.alert('Add number')
    } else {
        number_value = Number(number.value)
        let arrayOption = document.createElement('option')
        arrayOption.innerText = number_value
        arraySelect.appendChild(arrayOption)
        
        array.push(number_value)
    }
}

function wipeArray() {
    array = []
    arraySelect.innerHTML = ""
}

function generateSummary() {
    console.log(array)
    count_value.innerText = array.length
    mean_value.innerText = meanArray(array)
    median_value.innerText = medianArray(array)
    std_value.innerText = standardDeviation(array)
    max_value.innerText = Math.min(...array)
    min_value.innerText = Math.max(...array)
}


function standardDeviation(arr) {
    let mean = meanArray(arr)
    let variance = 0 
    for (let i = 0; i < arr.length; i++) {
        variance += (mean - arr[i]) * (mean - arr[i])
    }
    variance = variance/arr.length
    return Math.sqrt(variance)
}

function medianArray(arr) {
    arr.sort((a, b) => a - b)
    let length = arr.length
    if (length % 2 == 0) {
        return (arr[length/2] + arr[length/2-1])/2
    } 
    else {
        return arr[Math.floor(length / 2)]
    }
}

function meanArray(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum / arr.length
}

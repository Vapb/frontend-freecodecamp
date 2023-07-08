const generate = document.getElementsByTagName('button')[0]
generate.addEventListener('click', generateTable)

function generateTable() {
    let numberInput = document.getElementById("number_input")
    let multTable = document.getElementById("mult_table")
    
    if (numberInput.value.length == 0) {
        window.alert('Add number')
    }
    else {
        multTable.innerHTML = ''
        number = Number(numberInput.value) 
        for (let i = 1; i <= 10; i++) {
            let itemRow = document.createElement('option')
            itemRow.innerText = `${i} X ${number} = ${i * number}`
            multTable.appendChild(itemRow)
        }
    }
    return
}
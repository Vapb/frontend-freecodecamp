var title_seq = document.getElementById("title_seq")
var result_seq = document.getElementById("result_seq")
var generate = document.getElementById('generate')
generate.addEventListener('click', generate_sequence)

function generate_sequence() {
    var sequence = ""
    var start = Number(document.getElementById('start_number').value);
    var end = Number(document.getElementById('end_number').value);
    var step = Number(document.getElementById('step').value);
    console.log(`Start : ${start} - End : ${end} - Step : ${step}`)

    if ((end <= start) | (step <= 0)) {
        title_seq.innerHTML = "<span style='color:red';> No sequence available </span>"
        sequence = " ... "
    }
    
    else {
        for (var i = start; i < end; i = i + step) {
            sequence = sequence + `${i} - `
        }
            if ((end - start) % step != 0) {
                title_seq.innerHTML = "<span style='color:orange';>Incomplete sequence</span>" 
                sequence += `X`
            }
            else {
                title_seq.innerHTML = "<span style='color:green';>Complete sequence</span>"
                sequence += `${end}`
            }
    }

    result_seq.innerText = sequence
}


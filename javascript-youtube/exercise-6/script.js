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
    
    // Cres count
    if ((step > 0) && (end > start)) {
        console.log('CRES')
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
    
    // Desc count
    else if ((step < 0) && (end < start)){
        console.log('DESC')
        for (var i = start; i > end; i = i + step) {
            console.log(`DESC ${i}`)
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
    
    // start == end | step zero
    else {
        title_seq.innerHTML = "<span style='color:red';> No sequence available </span>"
        sequence = " ... "
    }
    result_seq.innerText = sequence
}


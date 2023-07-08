const titleSeq = document.getElementById("title_seq");
const resultSeq = document.getElementById("result_seq");
const generate = document.getElementById('generate');
generate.addEventListener('click', generateSequence);

function calcSequence(start, end, step, direction){
    let sequence = []
    for (let i = start; direction * i < direction * end; i += step) {
        console.log(`${direction > 0 ? 'CRES' : 'DESC'} ${i}`);
        sequence.push(i);
    }

    if ((end - start) % step !== 0) {
        titleSeq.innerHTML = "<span style='color:orange;'>Incomplete sequence</span>";
        sequence.push('X');
    } else {
        titleSeq.innerHTML = "<span style='color:green;'>Complete sequence</span>";
        sequence.push(end);
    }

    return sequence
}


function generateSequence() {
    var sequence = []
    var start = Number(document.getElementById('start_number').value);
    var end = Number(document.getElementById('end_number').value);
    var step = Number(document.getElementById('step').value);
    console.log(`Start : ${start} - End : ${end} - Step : ${step}`)
    
    if (step > 0 && end > start) {
        console.log('CRES');
        sequence = calcSequence(start, end, step, 1)
    } else if (step < 0 && end < start) {
        console.log('DESC');
        sequence = calcSequence(start, end, step, -1)
    } else {
        titleSeq.innerHTML = "<span style='color:red;'>No sequence available</span>";
        resultSeq.innerText = " ... ";
    }

    resultSeq.innerText = sequence.join(' - ');
    return;
}

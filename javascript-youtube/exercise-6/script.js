var generate = document.getElementById('generate')
generate.addEventListener('click', generate_sequence)

function generate_sequence() {
    var start = Number(document.getElementById('start_number').value);
    var end = Number(document.getElementById('end_number').value);
    var step = Number(document.getElementById('step').value);
    console.log(`Start : ${start} - End : ${end} - Step : ${step}`)
}
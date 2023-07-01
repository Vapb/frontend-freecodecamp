function carregar () {
    var imagem = document.getElementById("imagem")
    var msg = document.getElementById("msg")
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()

    msg.innerText = `Agora são ${hours}:${minutes}`

    if (hours >= 6 && hours < 12) {
        imagem.src = "imgs/morning.jpg"
        document.body.style.backgroundColor = 'wheat'
        console.log('Morning')
    }
    else if (hours >= 12 && hours < 18) {
        imagem.src = "imgs/evening.jpg"
        console.log('Night')
        document.body.style.backgroundColor = 'orange'
    }
    else {
        imagem.src = "imgs/night.jpg"
        console.log('Night')
        document.body.style.backgroundColor = 'grey'
    }
}
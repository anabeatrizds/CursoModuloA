function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.scr = 'fotomanha.png'
        document.body.style.background = '#F2CDAE'
        //#F5B16F
    } else if (hora >= 12 && hora <= 18) {
        img.scr = 'fototarde.png'
        document.body.style.background = '#F5B16F'
        //F2CDAE
    } else {
        img.scr = 'fotonoite.png'
        document.body.style.background = '#081D20'
        //081D20
    }
}



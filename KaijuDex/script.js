function enter() {
    var fkaiju = document.getElementsByName('kaiju')
    var res = document.querySelector('div#res')
    var monstro = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fkaiju[0].checked) {
        monstro = 'Godzilla'
        img.setAttribute('src', 'gojira.jpg')
    } else if (fkaiju[1].checked) {
        monstro = 'Kong'
        img.setAttribute('src', 'kong.jpg')
    } else if (fkaiju[2].checked) {
        monstro = 'Mothra'
        img.setAttribute('src', 'mothravd.jpg')
    }
    res.innerHTML = `Você escolheu ${monstro}`
    res.appendChild(img)
}
    
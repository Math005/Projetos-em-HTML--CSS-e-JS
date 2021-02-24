function contar() {
    let num = document.getElementById('cont')
    let num2 = document.getElementById('fim')
    let num3 = document.getElementById('raz')
    var res = document.getElementById('res')
    let n = Number(num.value)
    let cont = Number(num2.value)
    let razao = Number(num3.value)
    if (n < cont) {
        for (var c = n; c <= cont; c += razao) {
            res.innerHTML += `${c} \u{1F449}` 
        }
    } else {
        for (var c = n; c >= cont; c -= razao) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F604}`
}
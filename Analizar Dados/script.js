let num = document.getElementById('numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let vetores = []
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, vetores)) {
        vetores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado!')
    }
    num.value = ''
    num.focus()
}
function analisar() {
    if (vetores.length == 0) {
        window.alert('ERRO! Adicione um valor.')
    } else {
        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        let soma = 0
        let media =0
        for(let pos in vetores) {
            soma += vetores[pos]
            if (vetores[pos] > maior) {
                maior = vetores[pos]
            }
            if (vetores[pos] < menor) {
                menor = vetores[pos]
            }
            media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram digitados ${tot} valores.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores deu ${media}.</p>`
    }
}

let dia = document.querySelector('input#day')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#lista')
function adi() {
    if (dia.value.length == 0) {
        window.alert('ERRO! Adicione o dia')
    } else {
        let item = document.createElement('option')
        item.text = `O valor ${dia.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
}
function mostrar() {
    if (dia.value.length == 0) {
        window.alert('[ERRO] Adicione um valor!.')
    } else {
        if (dia.value == 23){
           res.innerHTML =`No dia ${dia.value} não terá água disponível.`
        }
        if (dia.value == 26) {
            res.innerHTML +=`No dia ${dia.value} não terá água disponível.`
        } else {
            res.innerHTML += `No dia ${dia.value} terá água disponível.`
           
        } 
        
    }
}
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já foi encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
            media = soma / total
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}`
        res.innerHTML += `<p> O menor valor informado foi ${menor}`
        res.innerHTML += `<p> Somando todos valores temos ${soma}`
        res.innerHTML += `<p> A média dos valores informados é ${media}`
    }
}

//adicionando funções nos botões
let btn_add = document.getElementById('btn_add')
btn_add.addEventListener('click', adicionar)

let btn_fim = document.getElementById('btn_fim')
btn_fim.addEventListener('click', finalizar)

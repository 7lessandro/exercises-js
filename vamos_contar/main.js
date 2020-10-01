
function contar() {
    let ini = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar :('
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo inválido... Passo 1 inserido automaticamente')
            p = 1
        }

        if(i < f) {
            //contagem crescente 
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F913}`
            }
        } else {
            //contagem regressiva 
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F913}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

var btn = document.getElementById('btn')
btn.addEventListener('click', contar)
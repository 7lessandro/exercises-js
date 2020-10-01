function imparoupar() {
    let num = document.getElementById('numero')
    let res = document.getElementById('res')

    let n_int = Number(num.value)

    if(n_int % 2 == 0) {
        res.innerHTML = `O número ${n_int} é par`
    } else {
        res.innerHTML = `O número ${n_int} é impar`
    }
}

let btn = document.getElementById('btn')
btn.addEventListener('click', imparoupar)
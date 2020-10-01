function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')

    if(num.value == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        tab.setAttribute('size', 10)
        res.innerText = `Essa é a tabuada do ${n} :)`
        

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } 
    }


}

let btn = document.getElementById('btn')
btn.addEventListener('click', tabuada)